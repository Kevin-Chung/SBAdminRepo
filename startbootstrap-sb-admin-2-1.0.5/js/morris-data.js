$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2014-06',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2014-07',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2014-08',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2014-09',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2014-10',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2014-11',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2014-12',
             sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2015-01',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054

        }, {
            period: '2015-02',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }, {
            period: '2015-03',
            sports: 2666,
            dining: null,
            hobbies: 2647,
            entertainment: null,
            outdoors: 123321,
            fun:9054
        }],
        xkey: 'period',
        ykeys: ['sports', 'dining', 'hobbies','entertainment','outdoors', 'fun'],
        labels: ['sports', 'dining', 'hobbies','entertainment','outdoors', 'fun'],
        pointSize: 2,
        hideHover: 'auto',
        resize: false
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Committed Customers",
            value: 27
        }, {
            label: "Interested Customers",
            value: 4
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
