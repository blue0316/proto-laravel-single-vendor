<script>
import Charts from "vue-chartjs";

export default {
	extends: Charts.Bar,
	props: {
		chartLabel: Array,
		gross: Array,
		net: Array,
	},
	computed: {
		maxPrice: function () {
			return this.gross.reduce((max, item) => {
				return max > item ? max : item;
			});
		},
	},
	mounted: function () {
		this.renderChart(
			{
				labels: this.chartLabel,
				datasets: [
					{
						label: "Gross Sales",
						data: this.gross,
						backgroundColor: "#2baab1",
						barThickness: 15,
					},
					{
						label: "Net Sales",
						data: this.net,
						backgroundColor: "#0088cc",
						barThickness: 15,
					},
				],
			},
			{
				scales: {
					xAxes: [
						{
							stacked: true,
							gridLines: {
								display: false,
							},
						},
					],
				},
				legend: {
					display: false,
				},
				responsive: true,
				maintainAspectRatio: false,
			}
		);
	},
};
</script>