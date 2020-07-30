import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const Heat = props => {
    useEffect(() => {

        var mychart = echarts.init(document.getElementById('heat'))
        // var ydata = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
        const columns = props.columns.map(col => col.dataIndex)
        const columns_without_index = columns.slice(1)// remove index columns
        var ydata = columns_without_index;
        var xdata = columns_without_index;

        props.data.forEach(e => {

        })

        var data = [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
        [1, 0, 0], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0],
        [2, 0, 22], [2, 1, 22], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0],
        [3, 0, 62], [3, 1, 38], [3, 2, 22], [3, 3, 5], [3, 4, 0], [3, 5, 0],
        [4, 0, 73], [4, 1, 96], [4, 2, 84], [4, 3, 25], [4, 4, 37], [4, 5, 27],
        [5, 0, 100], [5, 1, 100], [5, 2, 93], [5, 3, 100], [5, 4, 40], [5, 5, 40]

        ];

        data = data.map(function (item) {
            return [item[1], item[0], item[2]];
        });

        let option = {
            tooltip: {
                position: 'top'
            },
            // toolbox: {
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            animation: false,
            grid: {
                height: '80%',
                left: '13%',
                top: '5%',
                //backgroundColor:'white'
            },
            xAxis: {
                name: 'x',
                nameTextStyle: {
                    // padding: [0, 0, -60, -245],    //the position of text 
                    color: 'white'
                },
                type: 'category',
                data: xdata,
                // textStyle: {
                //     color: 'white'
                // },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitArea: {         // background split area if no data you can see it
                    show: true,
                    color: 'white'
                },
                axisLabel: {
                    interval: 0,
                    rotate: 50
                }

            },
            yAxis: {
                name: 'y',
                nameTextStyle: {
                    // padding: [0, 0, -210, -80], //the position of text
                    color: 'white'
                },
                type: 'category',
                data: ydata,
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: 0,
                }
                // splitArea: {
                //     show: false
                // }
            },
            visualMap: {
                min: 0,
                max: 100,
                // align: 'left',
                calculable: true,
                orient: 'vertical',
                left: '90%',
                top: '35%',
                // top: 'auto',    
                //right: '10%',
                inRange: {
                    color: ['#fff', '#330033']
                }
            },
            series: [{
                name: 'Pearson',
                type: 'heatmap',
                data: data,
                label: {
                    show: false,
                    color: 'white'
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'white'
                    },
                }
            }]
        };
        mychart.setOption(option)
    }, [props])

    return <div id="heat" style={{ width: '100%', height: 1000, backgroundColor: '#393862' }}></div>
}

export default Heat