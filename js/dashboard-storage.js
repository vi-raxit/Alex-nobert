// ** Dashboard Storage Jquery **//
jQuery( document ).ready(function($)
 {
    var ctx1 = document.getElementById('skyfall');
    var data1 = {
        datasets: [{
            data: [100],
            backgroundColor: ['rgba(54, 162, 235, 0.6)'] }],
        labels: ['Skyfall (MB)']
    }
    var skyfall = new Chart(ctx1, {
        type: 'pie',
        data: data1,
     });

    var ctx2 = document.getElementById('remainingStorage');
    var data2 = {
        datasets: [{
            data: [100,0],
            backgroundColor: [ 'rgba(255, 99, 132,0.6)','rgb(205,204,204,0.6)']
                }],
        labels: ['Remaining Storage (MB)','Other']
    }
    var remainingStorage = new Chart(ctx2, {
        type: 'pie',
        data: data2,
     });
});
