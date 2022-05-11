setTimeout(function() {
    $("#subscribeModal").modal("show")
}, 2e3);

//the radial


// annual collections graph
var annual_options = {
        chart: {
            height: 360,
            type: "bar",
            stacked: !0,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "25%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "UGX " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount in UGX",
            }
        },
        series: [{
            name: "Deposits",
            data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
        }, {
            name: "Collections",
            data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#556ee6", "#34c38f"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "UGX " + numeral(value).format('0,0')

                }
            }
        },

    },
    chart = new ApexCharts(document.querySelector("#stacked-column-chart-year"), annual_options);

// monthly collections graph
var monthly_options = {
        chart: {
            height: 360,
            type: "bar",

            stacked: !0,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "25%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "UGX " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount in UGX",
            }
        },
        series: [{
            name: "Deposits",
            data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
        }, {
            name: "Collections",
            data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
        }],
        xaxis: {
            categories: ["Apr 1st", "Apr 2nd", "Apr 3rd", "Apr 4th", "Apr 5th", "Apr 6th", "Apr th", "Apr 8th", "Apr 9th", "Apr 10th", "Apr 11th", "Apr 12th"]
        },
        colors: ["#556ee6", "#34c38f"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "UGX " + numeral(value).format('0,0')

                }
            }
        },

    },
    chart = new ApexCharts(document.querySelector("#stacked-column-chart-month"), monthly_options);

//weeklkly chart
var weekly_options = {
        chart: {
            height: 360,
            type: "bar",

            stacked: !0,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "25%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "UGX " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount in UGX",
            }
        },
        series: [{
            name: "Deposits",
            data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623]
        }, {
            name: "Collections",
            data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897]
        }],
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        colors: ["#556ee6", "#34c38f"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "UGX " + numeral(value).format('0,0')

                }
            }
        },

    },
    chart = new ApexCharts(document.querySelector("#stacked-column-chart-week"), weekly_options);

//daily chart
var daily_options = {
        chart: {
            height: 360,
            type: "bar",

            stacked: !0,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "25%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "UGX " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount in UGX",
            }
        },
        series: [{
            name: "Deposits",
            data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
        }, {
            name: "Collections",
            data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
        }],
        xaxis: {
            categories: ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM"]
        },
        colors: ["#556ee6", "#34c38f"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "UGX " + numeral(value).format('0,0')

                }
            }
        },

    },
    chart = new ApexCharts(document.querySelector("#stacked-column-chart-day"), daily_options);


options = {
    chart: {
        height: 360,
        type: "bar",
        toolbar: { show: !1 },
        stacked: !0,
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "35%",
            // endingShape: "rounded"
        }
    },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [{
        name: "Deposits",
        data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623]
    }, {
        name: "Collections",
        data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897]
    }],
    colors: ["#556ee6", "#34c38f"],
    xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yaxis: {
        title: {
            text: "Amount in UGX",
            style: { fontWeight: "500" }
        }
    },
    grid: { borderColor: "#f1f1f1" },
    fill: { opacity: 1 },
    tooltip: {
        y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                return "UGX " + numeral(value).format('0,0')

            }
        }
    },
};
(chart = new ApexCharts(document.querySelector("#stacked-column-chart-week"), options)).render();
options = {
    chart: {
        height: 360,
        type: "bar",
        toolbar: { show: !1 },
        stacked: !0,
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "35%",
            // endingShape: "rounded"
        }
    },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [
        { name: "Deposits", data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820] },
        { name: "Collections", data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568] },
    ],
    colors: ["#556ee6", "#34c38f"],
    xaxis: {
        categories: ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM"]
    },
    yaxis: {
        title: {
            text: "Amount in UGX",
            style: { fontWeight: "500" },
            labels: {
                formatter: function(value) {
                    return numeral(value).format('0,0 a')
                },
            },
        }
    },
    grid: { borderColor: "#f1f1f1" },
    fill: { opacity: 1 },
    tooltip: {
        y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                return "UGX " + numeral(value).format('0,0')

            }
        }
    },
};
(chart = new ApexCharts(document.querySelector("#stacked-column-chart-day"), options)).render();

options = {
    chart: {
        height: 360,
        type: "bar",
        toolbar: { show: !1 },
        stacked: !0,
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "35%",
            // endingShape: "rounded"
        }
    },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [{
        name: "Deposits",
        data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
    }, {
        name: "Collections",
        data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
    }],
    colors: ["#556ee6", "#34c38f"],
    xaxis: {
        categories: ["Apr 1st", "Apr 2nd", "Apr 3rd", "Apr 4th", "Apr 5th", "Apr 6th", "Apr th", "Apr 8th", "Apr 9th", "Apr 10th", "Apr 11th", "Apr 12th"]

    },
    yaxis: { title: { text: "Amount in UGX", style: { fontWeight: "500" } } },
    grid: { borderColor: "#f1f1f1" },
    fill: { opacity: 1 },
    tooltip: {
        y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                return "UGX " + numeral(value).format('0,0')

            }
        }
    },
};
(chart = new ApexCharts(document.querySelector("#stacked-column-chart-month"), options)).render();

options = {
    chart: {
        height: 360,
        type: "bar",
        toolbar: { show: !1 },
        stacked: !0,
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "35%",
            // endingShape: "rounded"
        }
    },
    dataLabels: { enabled: !1 },
    stroke: { show: !0, width: 2, colors: ["transparent"] },
    series: [{
        name: "Deposits",
        data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
    }, {
        name: "Collections",
        data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
    }],
    colors: ["#556ee6", "#34c38f"],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    },
    yaxis: { title: { text: "Amount in UGX", style: { fontWeight: "500" } } },


    grid: { borderColor: "#f1f1f1" },
    fill: { opacity: 1 },
    tooltip: {
        y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                return "UGX " + numeral(value).format('0,0')

            }
        }
    },
};
(chart = new ApexCharts(document.querySelector("#stacked-column-chart-year"), options)).render();



//the radial
chart.render();
options_radial = {
    chart: {
        height: 200,
        type: "radialBar",
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: "13px",
                    color: void 0,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: "16px",
                    color: void 0,
                    formatter: function(e) {
                        return e + "%"
                    }
                }
            }
        }
    },
    colors: ["#34c38f"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            shadeIntensity: .15,
            inverseColors: !1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        }
    },
    stroke: {
        dashArray: 4
    },
    series: [67],
    labels: ["Transactions increase"]
};
(chart = new ApexCharts(document.querySelector("#radialBar-chart"), options_radial)).render();