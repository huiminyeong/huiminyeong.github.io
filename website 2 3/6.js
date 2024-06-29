<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    // 数据
    var data = {
        labels: ['优秀', '良好', '中等', '不及格'],
        datasets: [{
            data: [25, 30, 15, 10],
            backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0']
        }]
    };

    // 配置选项
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    };

    // 获取canvas并绘制图表
    var ctx = document.getElementById('donut-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
</script>
