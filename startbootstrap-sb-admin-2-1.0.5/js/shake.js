

function filter(filter_value){
    
    alert('hello moto');
    $('#morris-area-chart').remove();
    
    //request the data
    /* socket.on('user_activity', function(results){
         $('.user-activity-panel').html('<div id="morris-area-chart"></div>');
        console.log($('.user-activity-panel').html());
           Morris.Area({
            element: 'morris-area-chart',
            data: results,
            xkey: 'period',
            ykeys: ['sports'],
            labels: ['sports'],
            pointSize: 2,
            hideHover: 'auto',
            resize: false
        });
    }) */
   // $('<div id="morris-area-chart"></div>').appendTo('.user-activity-panel');
    $('.user-activity-panel').html('<div id="morris-area-chart"></div>');
    console.log($('.user-activity-panel').html());
       Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2014-06',
            sports: 2666
        }, {
            period: '2014-07',
            sports: 2666
        }, {
            period: '2014-08',
            sports: 2666
        }, {
            period: '2014-09',
            sports: 2666
        }, {
            period: '2014-10',
            sports: 2666
        }, {
            period: '2014-11',
            sports: 2666
        }, {
            period: '2014-12',
             sports: 2666
        }, {
            period: '2015-01',
            sports: 2666

        }, {
            period: '2015-02',
            sports: 2666
        }, {
            period: '2015-03',
            sports: 2666
        }],
        xkey: 'period',
        ykeys: ['sports'],
        labels: ['sports'],
        pointSize: 2,
        hideHover: 'auto',
        resize: false
    });
}