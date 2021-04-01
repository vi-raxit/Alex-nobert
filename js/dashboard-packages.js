jQuery( document ).ready(function($)
 {
    var ctx = document.getElementById('myPieChart1');
    var data = {
        datasets: [{
            data: [100],
            backgroundColor: ['rgba(54, 162, 235, 0.6)'] }],
        labels: ['Skyfall']
    }
    var myPieChart1 = new Chart(ctx, {
        type: 'pie',
        data: data,
     });

    var ctx = document.getElementById('myPieChart2');
    var data = {
        datasets: [{
            data: [100],
            backgroundColor: [ 'rgba(255, 99, 132,0.6)']
                }],
        labels: ['Remaining packages']
    }
    var myPieChart2 = new Chart(ctx, {
        type: 'pie',
        data: data,
     });
});
