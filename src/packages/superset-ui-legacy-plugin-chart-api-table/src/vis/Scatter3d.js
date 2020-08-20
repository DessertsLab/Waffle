import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const Scatter3d = props => {
    useEffect(() => {

        var mychart = echarts.init(document.getElementById('scatter3d'))
        // const columns = props.columns.map(col => col.dataIndex)
        // const columns_without_index = columns.slice(1)// remove index columns
        // var ydata = columns_without_index;
        // var xdata = columns_without_index;
        // let data = []

        // props.data.forEach((dt, x) => {
        //     columns_without_index.forEach((c, y) => {
        //         data.push([x, y, dt[c]])
        //     }
        //     )
        // })

        var sizeValue = '57%';
        var symbolSize = 2.5;

        let option = {
            tooltip: {},
            grid3D: {
                width: '50%'
            },
            xAxis3D: {},
            yAxis3D: {},
            zAxis3D: {},
            grid: [
                {left: '50%', width: '20%', bottom: sizeValue},
                {left: '75%', width: '20%', bottom: sizeValue},
                {left: '50%', width: '20%',  top: sizeValue},
                {left: '75%', width: '20%', top: sizeValue}
            ],
            xAxis: [
                {type: 'value', gridIndex: 0, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
                {type: 'category', gridIndex: 1, name: 'Country', boundaryGap: false, axisLabel: {rotate: 50, interval: 0}},
                {type: 'value', gridIndex: 2, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
                {type: 'value', gridIndex: 3, name: 'Life Expectancy', axisLabel: {rotate: 50, interval: 0}}
            ],
            yAxis: [
                {type: 'value', gridIndex: 0, name: 'Life Expectancy'},
                {type: 'value', gridIndex: 1, name: 'Income'},
                {type: 'value', gridIndex: 2, name: 'Population'},
                {type: 'value', gridIndex: 3, name: 'Population'}
            ],
            dataset: {
                dimensions: [
                    'Income',
                    'Life Expectancy',
                    'Population',
                    'Country',
                    {name: 'Year', type: 'ordinal'}
                ],
                source: data
            },
            series: [
                {
                    type: 'scatter3D',
                    symbolSize: 3,
                    encode: {
                        x: 'Population',
                        y: 'Life Expectancy',
                        z: 'Income',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
    
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    encode: {
                        x: 'Income',
                        y: 'Life Expectancy',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    encode: {
                        x: 'Country',
                        y: 'Income',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    encode: {
                        x: 'Income',
                        y: 'Population',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    encode: {
                        x: 'Life Expectancy',
                        y: 'Population',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                }
            ]
        }; 
        mychart.setOption(option)
    }, [props])

    return <div id="scatter3d" style={{ width: '100%', height: 1000, backgroundColor: '#393862' }}></div>
}

export default Scatter3d 