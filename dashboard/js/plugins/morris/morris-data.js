// Morris.js Charts sample data for SB Admin template

$(function() {



    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Online Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Subsidiary Sales",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2016-01-01',
            orders: 802
        }, {
            d: '2016-01-02',
            orders: 783
        }, {
            d: '2016-01-03',
            orders: 820
        }, {
            d: '2016-01-04',
            orders: 839
        }, {
            d: '2016-01-05',
            orders: 792
        }, {
            d: '2016-01-06',
            orders: 859
        }, {
            d: '2016-01-07',
            orders: 790
        }, {
            d: '2016-01-08',
            orders: 1680
        }, {
            d: '2016-01-09',
            orders: 1592
        }, {
            d: '2016-01-10',
            orders: 1420
        }, {
            d: '2016-01-11',
            orders: 882
        }, {
            d: '2016-01-12',
            orders: 889
        }, {
            d: '2016-01-13',
            orders: 819
        }, {
            d: '2016-01-14',
            orders: 849
        }, {
            d: '2016-01-15',
            orders: 870
        }, {
            d: '2016-01-16',
            orders: 1063
        }, {
            d: '2016-01-17',
            orders: 1192
        }, {
            d: '2016-01-18',
            orders: 1224
        }, {
            d: '2016-01-19',
            orders: 1329
        }, {
            d: '2016-01-20',
            orders: 1329
        }, {
            d: '2016-01-21',
            orders: 1239
        }, {
            d: '2016-01-22',
            orders: 1190
        }, {
            d: '2016-01-23',
            orders: 1312
        }, {
            d: '2016-01-24',
            orders: 1293
        }, {
            d: '2016-01-25',
            orders: 1283
        }, {
            d: '2016-01-26',
            orders: 1248
        }, {
            d: '2016-01-27',
            orders: 1323
        }, {
            d: '2016-01-28',
            orders: 1390
        }, {
            d: '2016-01-29',
            orders: 1420
        }, {
            d: '2016-01-30',
            orders: 1529
        }, {
            d: '2016-01-31',
            orders: 1892
        }, ],
        // The name of the data record attribute that contains x-orderss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-orderss.
        ykeys: ['orders'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['orders'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
        	productcatrgory: 'Beverages',
            sales: 316
        }, {
        	productcatrgory: 'Condiments',
            sales: 397
        }, {
        	productcatrgory: 'Daiiry',
            sales: 575
        }, {
        	productcatrgory: 'MeatPoultry',
            sales: 780
        }, {
        	productcatrgory: 'Seafood',
            sales: 1255
        }, {
        	productcatrgory: 'Grains and Cereals',
            sales: 1671
        }],
        xkey: 'productcatrgory',
        ykeys: ['sales'],
        labels: ['salesbyproductcategory'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
