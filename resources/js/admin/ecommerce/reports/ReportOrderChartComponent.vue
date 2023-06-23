<script>
import Charts from 'vue-chartjs';
import { format } from 'date-format-parse';

const chartStyles = [
    {
        color: "#b1d4ea",
        borderWidth: 2
    },
    {
        color: "#3498db",
        borderWidth: 4
    }, 
    {
        color: "#e74c3c",
        borderWidth: 2
    },
    {
        color: "#5cc488",
        borderwidth: 3
    },
    {
        color: "#f1c40f",
        borderwidth: 2
    },
    {
        color: "#dbe1e3"
    }, 
    {
        color: "#ecf0f1"
    }
]
;

const hoverStyle = {
    color: "#0088cc",
    borderWidth: 8
};

function legendMouseenter(e) {
    var index = e.currentTarget.getAttribute('data-index');
    var ci = Object.values(e.view.Chart.instances)[0].chart;
    if(index > 4) {
        ci.data.datasets[index].backgroundColor = hoverStyle.color;
    } else {
        ci.data.datasets[index].borderColor = hoverStyle.color;
        ci.data.datasets[index].borderWidth = hoverStyle.borderWidth;
    }
    ci.update();
}

function legendMouseleave(e) {
    var index = e.currentTarget.getAttribute('data-index');
    var ci = Object.values(e.view.Chart.instances)[0].chart;
    if(index > 4) {
        ci.data.datasets[index].backgroundColor = chartStyles[index].color;
    } else {
        ci.data.datasets[index].borderColor = chartStyles[index].color;
        ci.data.datasets[index].borderWidth = chartStyles[index].borderWidth;
    }
    ci.update();
}

Chart.pluginService.register({
    afterDraw: function(chart) {
        // Draw Horizontal Line for average sales
        if (typeof chart.config.options.grossAvg != 'undefined' && typeof chart.config.options.netAvg != 'undefined' ) {
            var lineAt1 = Math.max(chart.config.options.grossAvg, 0),
                lineAt2 = Math.max(chart.config.options.netAvg, 0);
            
            var ctxPlugin = chart.chart.ctx;
            var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
            var yAxe = chart.scales[chart.config.options.scales.yAxes[1].id];

            var position1 = yAxe.getPixelForValue(lineAt1),
                position2 = yAxe.getPixelForValue(lineAt2);

            ctxPlugin.strokeStyle = chartStyles[0].color;
            ctxPlugin.lineWidth = 3;
            ctxPlugin.beginPath();
            ctxPlugin.moveTo(xAxe.left, position1);
            ctxPlugin.lineTo(xAxe.right, position1);
            ctxPlugin.stroke();

            ctxPlugin.strokeStyle = chartStyles[1].color;
            ctxPlugin.beginPath();
            ctxPlugin.moveTo(xAxe.left, position2);
            ctxPlugin.lineTo(xAxe.right, position2);
            ctxPlugin.stroke();
        }

        if (chart.config.options.redraw) {
            chart.config.options.redraw = false;
            // Legend Customization
            let legendWrapper = document.getElementById('legend-wrapper');
            // if (legendWrapper && ! legendWrapper.innerHTML) {
                legendWrapper.innerHTML = chart.generateLegend();

                var legends = document.querySelectorAll('#legend-wrapper > ul > li');
                legends.forEach( legend => {
                    legend.addEventListener('mouseenter', legendMouseenter);
                    legend.addEventListener('mouseleave', legendMouseleave);
                });
            // }
        }
    }
});

export default {
    extends: Charts.Bar,
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
        grossSales: function () {
            let gross = this.chartData.reduce( ( acc, report ) => {
                if(report.gross_sales > 0) {
                    acc.push(report.gross_sales);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return gross;
        },
        maxPrice: function () {
            return this.chartData.reduce( ( max, report ) => {
                return max = Math.max(max, report.gross_sales | 0, report.refunded | 0);
            }, 0);
        },
        maxItems: function () {
            return this.chartData.reduce( ( max, report ) => {
                return max = Math.max(max, report.items_count | 0);
            }, 0);
        },
        netSales: function () {
            let net = this.chartData.reduce( ( acc, report ) => {
                if(report.net_sales > 0) {
                    acc.push(report.net_sales);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return net;
        },
        orderCount: function () {
            let orderCount = this.chartData.reduce( ( acc, report ) => {
                if(report.order_count > 0) {
                    acc.push(report.order_count);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return orderCount;
        },
        itemsCount: function () {
            let itemsCount = this.chartData.reduce( ( acc, report ) => {
                if(report.items_count > 0) {
                    acc.push(report.items_count);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return itemsCount;
        },
        refunded: function () {
            let refunded = this.chartData.reduce( ( acc, report ) => {
                if(report.refunded > 0) {
                    acc.push(report.refunded);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return refunded;
        },
        shipping: function () {
            let shipping = this.chartData.reduce( ( acc, report ) => {
                if(report.shipping > 0) {
                    acc.push(report.shipping);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return shipping;
        },
        coupon: function () {
            let coupon = this.chartData.reduce( ( acc, report ) => {
                if(report.coupon > 0) {
                    acc.push(report.coupon);
                } else {
                    acc.push(0);
                }
                return acc;
            }, []);
            return coupon;
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

                if(this.reports.by_month) {
                    range.setMonth(range.getMonth() + 1);
                } else {
                    range.setDate(range.getDate() + 1);
                }
            }
            
            this.renderChart({
                labels: this.chartLabels,
                datasets: [
                    {
                        type: "line",
                        label: "gross sales in this period",
                        fill: false,
                        yAxisID: "y-axis-1",
                        tension: 0,
                        borderColor: chartStyles[0].color,
                        borderWidth: chartStyles[0].borderWidth,
                        data: this.grossSales,
                        total: this.reports.gross_total.toFixed(2)
                    },
                    {
                        type: "line",
                        label: "net sales in this period",
                        fill: false,
                        yAxisID: "y-axis-1",
                        tension: 0,
                        borderColor: chartStyles[1].color,
                        borderWidth: chartStyles[1].borderWidth,
                        data: this.netSales,
                        total: this.reports.net_total.toFixed(2)
                    },
                    {
                        type: "line",
                        label: "refunded " + this.reports.refunded_orders + ' orders ' + '(' + this.reports.refunded_items + ' items)',
                        fill: false,
                        yAxisID: "y-axis-1",
                        tension: 0,
                        borderColor: chartStyles[2].color,
                        borderWidth: chartStyles[2].borderWidth,
                        data: this.refunded,
                        total: this.reports.refunded_total.toFixed(2)
                    },
                    {
                        type: "line",
                        label: "charged for shipping",
                        fill: false,
                        yAxisID: "y-axis-1",
                        tension: 0,
                        borderColor: chartStyles[3].color,
                        borderWidth: chartStyles[3].borderWidth,
                        data: this.shipping,
                        total: this.reports.shipping_total.toFixed(2)
                    },
                    {
                        type: "line",
                        label: "worth of coupon used",
                        fill: false,
                        yAxisID: "y-axis-1",
                        tension: 0,
                        borderColor: chartStyles[4].color,
                        borderWidth: chartStyles[4].borderWidth,
                        data: this.coupon,
                        total: this.reports.coupon_total.toFixed(2)
                    },
                    {
                        type: "bar",
                        barPercentage: 0.5,
                        label: "orders placed",
                        yAxisID: "y-axis-0",
                        backgroundColor: chartStyles[5].color,
                        data: this.orderCount,
                        total: this.reports.orders_total
                    },
                    {
                        type: "bar",
                        barPercentage: 0.5,
                        label: "items purchased",
                        yAxisID: "y-axis-0",
                        backgroundColor: chartStyles[6].color,
                        data: this.itemsCount,
                        total: this.reports.items_total
                    }
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
                                type: 'linear',
                                id: "y-axis-0",
                                position: "left",
                                ticks: {
                                    stepSize: 1,
                                    max: this.maxItems + 1
                                },
                            },
                            {
                                type: 'linear',
                                id: "y-axis-1",
                                position: "right",
                                ticks: {
                                    min: 0,
                                    max: Math.max(this.maxPrice * 1.02, 1),
                                    stepSize: Math.max(this.maxPrice * 1.02 / ( this.maxItems + 1 ), 1)
                                }
                            }
                        ]
                    },
                    legend: {
                        display: false
                    },
                    legendCallback: function(chart) {
                        var list = document.createElement('ul');
                        var datasets = chart.data.datasets;
                        var i, ilen, listItem, listItemStrong;

                        list.setAttribute('class', 'chart-legend');

                        for (i = 0, ilen = datasets.length; i < ilen; i++) {
                            listItem = list.appendChild(document.createElement('li'));
                            listItemStrong = listItem.appendChild(document.createElement('strong'));
                            listItemStrong.innerText = datasets[i].total;
                            listItem.setAttribute('data-index', i);
                            listItem.style.borderRightColor = datasets[i].borderColor ? datasets[i].borderColor : datasets[i].backgroundColor;
                            if (datasets[i].label) {
                                listItem.appendChild(document.createTextNode(datasets[i].label));
                            }
                        }

                        return list.outerHTML;
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    grossAvg: this.reports.orders_total ? this.reports.gross_avg : null,
                    netAvg: this.reports.orders_total ? this.reports.net_avg  : null,
                    redraw: true
                }
            );
        }
    },
    beforeDestroy: function () {
        var legends = document.querySelectorAll('#legend-wrapper > ul > li');
        legends.forEach( legend => {
            legend.removeEventListener('mouseenter', legendMouseenter);
            legend.removeEventListener('mouseleave', legendMouseleave);
        });
    }
}
</script>