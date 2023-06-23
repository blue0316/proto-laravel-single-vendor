<script>
import { Doughnut } from 'vue-chartjs';

export default {
    extends: Doughnut,
    props: {
        sales: Array
    },
    watch: {
        sales: function () {
            this.renderChart({
                labels: [ "Customer sales", "Guest sales" ],
                datasets: [
                    {
                        backgroundColor: [
                            "#1abc9c",
                            "#8fdece"
                        ],
                        data: this.sales
                    }
                ]}, 
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        position: "bottom"
                    }
                }
            );
        }
    }
}
</script>