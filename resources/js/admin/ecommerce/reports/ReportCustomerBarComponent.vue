<script>
import { Bar } from 'vue-chartjs';
import { format } from 'date-format-parse';

export default {
    extends: Bar,
    props: {
        reports: Object,
        date: Array
    },
    data() {
        return  {
            chartLabels: [],
            chartData: []
        }
    },
    computed: {
        customerOrders: function () {
            let customer = this.chartData.reduce( ( acc, report ) => {
                if(report.customer > 0) {
                    acc.push(report.customer);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return customer;
        },
        guestOrders: function () {
            let guest = this.chartData.reduce( ( acc, report ) => {
                if(report.guest > 0) {
                    acc.push(report.guest);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return guest;
        },
        maxOrderCount: function () {
            return this.chartData.reduce( ( max, report ) => {
                return max = Math.max(max, report.customer | 0, report.guest | 0);
            }, 0);
        }
    },
    watch: {
        reports: function () {
            if (! this.reports) return;

            let range = new Date(this.date[0]);
            range.setHours(0, 0, 0);
            this.chartLabels = [];
            this.chartData = []
            while ( this.date[1] > range ) {
                let label;
                if (this.reports.by_month) {
                    label = format(range, "YYYY-MM");
                    this.chartLabels.push(format(range, "MMM"));
                } else {
                    label = format(range, "YYYY-MM-DD");
                    this.chartLabels.push(format(range, "DD MMM"));
                }
                
                if (this.reports[label]) {
                    this.chartData.push(this.reports[label]);
                } else {
                    this.chartData.push([]);
                }

                if (this.reports.by_month) {
                    range.setMonth(range.getMonth() + 1);
                } else {
                    range.setDate(range.getDate() + 1);
                }
            }
            
            this.renderChart({
                labels: this.chartLabels,
                datasets: [
                    {
                        label: 'Customer orders',
                        barPercentage: 0.5,
                        backgroundColor: "#1abc9c",
                        data: this.customerOrders
                    },
                    {
                        label: 'Guest orders',
                        barPercentage: 0.5,
                        backgroundColor: "#8fdece",
                        data: this.guestOrders
                    },
                ]}, 
                {
                    scales: {
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                callback: function (value, index, labels) {
                                    if(value === "Jan" ||labels.length < 24 || index % Math.ceil(labels.length / 12) == 0 || index === labels.length - 1 ) return value;
                                    return '';
                                }
                            }
                        }],
                        yAxes: [
                            {
                                ticks: {
                                    stepSize: 1,
                                    max: this.maxOrderCount + 1
                                },
                            }
                        ]
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            );
        }
    },
    created: function () {
    }
}
</script>