var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['C', 'C++', 'Java', 'JavaScript', 'Flutter', 'Dart','Python'],
        datasets: [{
            label: `My Knowledge about Programing languages`,
            data: [16, 19, 13, 11, 8, 14,5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(5, 15, 6, 0.2)',
                'rgba(25, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(5, 15, 6, 1)',
                'rgba(25, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation:
        {
            duration:1000,
            easing:"easeOutBounce"
        }
        // title:{
        //     display:true,
        //     text:"Let's check my knowledge",
        //     fontSize:25,
        //     position :"bottom",
        // },
    },
});