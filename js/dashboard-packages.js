jQuery( document ).ready(function($)
 {
    var ctx2 = document.getElementById('remainingPackages');
    var data2 = {
        datasets: [{
            data: [100],
            backgroundColor: [ 'rgba(255, 99, 132,0.6)']
                }],
        labels: ['Remaining packages']
    }
    var remainingPackages = new Chart(ctx2, {
        type: 'pie',
        data: data2,
     });
});
