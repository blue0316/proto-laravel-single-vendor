<template>
	<div class="card card-modern h-100">
		<div class="card-header">
			<div class="card-actions">
				<a href="#" class="card-action card-action-toggle" data-card-toggle></a>
			</div>
			<h2 class="card-title">Revenue</h2>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-auto">
					<strong class="text-color-dark text-6">${{ gross[new Date().getMonth()].toFixed(2) }}</strong>
					<h3 class="text-4 mt-0 mb-2">This Month</h3>
				</div>
				<div class="col-auto">
					<strong class="text-color-dark text-6">${{ lastMonth.toFixed(2) }}</strong>
					<h3 class="text-4 mt-0 mb-2">Last Month</h3>
				</div>
				<div class="col-auto">
					<strong class="text-color-dark text-6">${{ total.toFixed(2) }}</strong>
					<h3 class="text-4 mt-0 mb-2">Total Profit</h3>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<ReportAnnualChartComponent :chartLabel="months" :gross="gross" :net="net" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ReportAnnualChartComponent from "./ReportAnnualChartComponent.vue";

export default {
	components: {
		ReportAnnualChartComponent,
	},
	props: {
		items: Object | Array,
	},
	data() {
		return {
			gross: [],
			net: [],
			thisMonth: 0,
			lastMonth: 0,
			total: 0,
			months: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
		};
	},
	copmuted: {
		lastMonth: function () {
			let month = new Date().getMonth();
			if (!month) return 0;
			return this.gross[month];
		},
	},
	created: function () {
		for (let i = 0; i < 12; i++) {
			if (this.items[this.months[i]]) {
				this.gross.push(this.items[this.months[i]].gross);
				this.net.push(this.items[this.months[i]].net);
				this.total += this.items[this.months[i]].gross;
			} else {
				this.gross.push(0);
				this.net.push(0);
			}
		}
	},
};
</script>