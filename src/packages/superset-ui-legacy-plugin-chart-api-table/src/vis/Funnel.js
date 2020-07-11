import React, { useEffect } from 'react';
import FunnelGraph from 'funnel-graph-js';
import 'funnel-graph-js/dist/css/main.min.css'
import 'funnel-graph-js/dist/css/theme.min.css'

const Funnel = props => {
    // console.log('props.data', props.data)
    // console.log('props.columns', props.columns)

    useEffect(() => {
        // console.log("data changed")
        if (props.data !== undefined && props.data.length !== 0) {
            const draw = (labels, subLabels, colors, values, direction) => {
                var graph = new FunnelGraph({
                    container: '.funnel',
                    gradientDirection: 'horizontal',
                    width: 1200,
                    height: 300,
                    data: {
                        labels: labels,
                        subLabels: subLabels,
                        // colors: colors,
                        values: values
                    },
                    displayPercent: true,
                    direction: direction
                });
                graph.draw();
            }

            const labels = props.columns.map(col => col.dataIndex).slice(1) // 去掉第一个subLabel分组字段
            // console.log('labels', labels)
            const subLabels = Object.keys(props.data).map(k => props.data[k][props.columns.map(col => col.dataIndex)[0]])
            // console.log('subLabels', subLabels)
            const colors = [
                ['#FFB178', '#FF78B1', '#FF3C8E'],
                ['#A0BBFF', '#EC77FF'],
                ['#A0F9FF', '#7795FF']
            ]
            const values = [
                // [3500, 2500, 6500],
                // [3300, 1400, 1000],
                // [600, 200, 130]
            ]
            const direction = 'horizontal'
            labels.forEach(col => {
                let one_row_for_values = props.data.map(k =>
                    parseInt(k[col])
                )
                values.push(one_row_for_values)
            });
            // console.log(values)
            // console.log('values', values)
            draw(labels, subLabels, colors, values, direction)
        }
    }, [props])

    const Content = () => {
        if (props.data) {
            return <div className="funnel" style={{ backgroundColor: '#393862' }}></div>
        } else {
            return <></>
        }
    }

    return <>
        <Content />
    </>
}

export default Funnel