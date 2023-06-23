<template>
	<div class="card card-modern">
		<div class="card-header">
			<h2 class="card-title">Orders</h2>
		</div>
		<div class="card-body">
			<div class="row mb-4">
				<div class="col-xl-auto">
					<div class="d-flex flex-wrap h-100">
						<button
							type="button"
							class="btn btn-default my-1 my-xl-0 mr-1"
							:class="{ active: buttonActive === 0 }"
							@click="getThisYear"
						>
							This Year
						</button>
						<button
							type="button"
							class="btn btn-default my-1 my-xl-0 mr-1"
							:class="{ active: buttonActive === 1 }"
							@click="getLastMonth"
						>
							Last Month
						</button>
						<button
							type="button"
							class="btn btn-default my-1 my-xl-0 mr-1"
							:class="{ active: buttonActive === 2 }"
							@click="getThisMonth"
						>
							This Month
						</button>
						<button
							type="button"
							class="btn btn-default my-1 my-xl-0"
							:class="{ active: buttonActive === 3 }"
							@click="getLastSevenDays"
						>
							Last 7 days
						</button>
					</div>
				</div>
				<div class="col-xl-auto mt-3 mt-xl-0">
					<div class="input-daterange input-group w-auto">
						<span class="input-group-prepend">
							<span class="input-group-text">
								<i class="fas fa-calendar-alt"></i>
							</span>
							<date-picker
								v-model="date"
								:clearable="false"
								:confirm="true"
								confirm-text="Go"
								@change="getData"
								:disabled-date="
									(date) => {
										return date > Date.now();
									}
								"
								range
							></date-picker>
						</span>
					</div>
				</div>
			</div>
			<div class="chart chart-with-sidebar">
				<div class="chart-sidebar" id="legend-wrapper"></div>
				<ReportOrderChartComponent :reports="reports" :date="date" />
			</div>
		</div>
	</div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import ReportOrderChartComponent from './ReportOrderChartComponent.vue';

export default {
    components: {
        DatePicker,
        ReportOrderChartComponent
    },
    props: {
    },
    data() {
        return  {
            date: [],
            reports: {},
            buttonActive: 3
        }
    },
    mounted: function () {
        let start = new Date();
        start.setDate(start.getDate() - 6);
        this.date.push(start, new Date());
        this.getData();
    },
    methods: {
        getData: async function () {
            this.date[1].setHours(23,59,59);
            this.$vToastify.setSettings({
                withBackdrop: true,
                position: "center-center"
            });
            this.$vToastify.loader("Please wait...");
            await window.axios.get('/admin/ecommerce/reports/get-orders', {
                params: {
                    start: this.date[0],
                    end: this.date[1],
                    offset: this.date[0].getTimezoneOffset()
                } 
            }).then( response => {
                this.reports = response.data;
                this.toggleRefund = false;
                this.$vToastify.stopLoader();
            }).catch( error => {
                this.$vToastify.stopLoader();
                this.$vToastify.setSettings({
                    withBackdrop: false,
                    position: "top-right",
                    singular: true,
                });
                this.$vToastify.error(error.response.data.message);
                this.toggleRefund = false;
            });
        },
        getThisYear: function () {
            this.buttonActive = 0;
            let start = new Date();
            start.setFullYear(start.getFullYear(), 0, 1);
            this.date = [start, new Date()];
            this.getData();
        },
        getLastMonth: function () {
            this.buttonActive = 1;
            let end = new Date();
            end.setDate(0);
            let start = new Date(end);
            start.setDate(1);
            this.date = [start, end];
            this.getData();
        },
        getThisMonth: function () {
            this.buttonActive = 2;
            let start = new Date();
            start.setDate(1);
            this.date = [start, new Date()];
            this.getData();
        },
        getLastSevenDays: function () {
            this.buttonActive = 3;
            let start = new Date();
            start.setDate(start.getDate() - 6);
            this.date = [start, new Date()];
            this.getData();
        }
    }
}
</script>