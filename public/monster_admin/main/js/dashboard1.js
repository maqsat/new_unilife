/*
Template Name: Monster Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/

// ==============================================================
// doughnut chart option
// ==============================================================
var doughnutChart = echarts.init(document.getElementById('sales-donute'));
// specify chart configuration item and data
option = {
    tooltip: {
        trigger: 'item'
        , formatter: "{a} <br/>{b} : {c} ({d}%)"
    }
    , legend: {
        show: false
        , data: ['Item A', 'Item B', 'Item C', 'Item D']
    }
    , toolbox: {
        show: false
        , feature: {
            dataView: {
                show: false
                , readOnly: false
            }
            , magicType: {
                show: false
                , type: ['pie', 'funnel']
                , option: {
                    funnel: {
                        x: '25%'
                        , width: '50%'
                        , funnelAlign: 'center'
                        , max: 1548
                    }
                }
            }
            , restore: {
                show: true
            }
            , saveAsImage: {
                show: true
            }
        }
    }
    , color: ["#edf1f5", "#009efb", "#55ce63", "#745af2"]
    , calculable: false
    , series: [
        {
            name: 'Source'
            , type: 'pie'
            , radius: ['80%', '90%']
            , itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                    , labelLine: {
                        show: false
                    }
                }
                , emphasis: {
                    label: {
                        show: false
                        , position: 'center'
                        , textStyle: {
                            fontSize: '30'
                            , fontWeight: 'bold'
                        }
                    }
                }
            }
            , data: [
                {
                    value: 835
                    , name: 'Item A'
                    }
                    , {
                    value: 310
                    , name: 'Item B'
                    }
                    , {
                    value: 134
                    , name: 'Item C'
                    }
                    , {
                    value: 235
                    , name: 'Item D'
                    }

            ]
        }
    ]
};
// use configuration item and data specified to show chart
doughnutChart.setOption(option, true), $(function () {
    function resize() {
        setTimeout(function () {
            doughnutChart.resize()
        }, 100)
    }
    $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
});

// ==============================================================
// Gauge chart option
// ==============================================================
var gaugeChart = echarts.init(document.getElementById('gauge-chart'));
option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    }
    , toolbox: {
        show: false
        , feature: {
            mark: {
                show: true
            }
            , restore: {
                show: true
            }
            , saveAsImage: {
                show: true
            }
        }
    }
    , series: [
        {
            name: ''
            , type: 'gauge'
            , splitNumber: 0, // ????????????????????????5
            axisLine: { // ????????????
                lineStyle: { // ??????lineStyle??????????????????
                    color: [[0.2, '#029ff6'], [0.8, '#1badcb'], [1, '#42c386']]
                    , width: 20
                }
            }
            , axisTick: { // ??????????????????
                splitNumber: 0, // ??????split???????????????
                length: 12, // ??????length????????????
                lineStyle: { // ??????lineStyle??????????????????
                    color: 'auto'
                }
            }
            , axisLabel: { // ??????????????????????????????axis.axisLabel
                textStyle: { // ???????????????????????????????????????????????????TEXTSTYLE
                    color: 'auto'
                }
            }
            , splitLine: { // ?????????
                show: false, // ?????????????????????show??????????????????
                length: 50, // ??????length????????????
                lineStyle: { // ??????lineStyle?????????lineStyle?????????????????????
                    color: 'auto'
                }
            }
            , pointer: {
                width: 5
                , color: '#54667a'
            }
            , title: {
                show: false
                , offsetCenter: [0, '-40%'], // x, y?????????px
                textStyle: { // ???????????????????????????????????????????????????TEXTSTYLE
                    fontWeight: 'bolder'
                }
            }
            , detail: {
                textStyle: { // ???????????????????????????????????????????????????TEXTSTYLE
                    color: 'auto'
                    , fontSize: '14'
                    , fontWeight: 'bolder'
                }
            }
            , data: [{
                value: 50
                , name: ''
            }]
        }
    ]
};
    timeTicket = setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        gaugeChart.setOption(option, true);
    }, 2000)
    // use configuration item and data specified to show chart
    gaugeChart.setOption(option, true), $(function () {
    function resize() {
        setTimeout(function () {
            gaugeChart.resize()
        }, 100)
    }
    $(window).on("resize", resize), $(".sidebartoggler").on("click", resize)
});