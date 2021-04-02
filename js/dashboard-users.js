jQuery( document ).ready(function($)
 {
    var ctx2 = document.getElementById('remainingUsers');
    var data2 = {
        datasets: [{
            data: [90,10],
            backgroundColor: [ 'rgba(255, 99, 132,0.6)','rgb(247,180,203,0.5)']
                }],
        labels: ['Remaining USers','Created Users']
    }
    var remainingUsers = new Chart(ctx2, {
        type: 'pie',
        data: data2,
     });
});
