import React, { useEffect } from 'react';
import FunnelGraph from 'funnel-graph-js';
import 'funnel-graph-js/dist/css/main.min.css'
import 'funnel-graph-js/dist/css/theme.min.css'

const Funnel = props => {
    console.log(props.dataSource)
    const draw = () => {
        var graph = new FunnelGraph({
            container: '.funnel',
            gradientDirection: 'horizontal',
            width: 800,
            height: 300,
            data: {
                labels: ['Impressions', 'Add To Cart', 'Buy'],
                subLabels: ['Direct', 'Social Media', 'Ads'],
                colors: [
                    ['#FFB178', '#FF78B1', '#FF3C8E'],
                    ['#A0BBFF', '#EC77FF'],
                    ['#A0F9FF', '#7795FF']
                ],
                values: [
                    [3500, 2500, 6500],
                    [3300, 1400, 1000],
                    [600, 200, 130]
                ]
            },
            displayPercent: true,
            direction: 'horizontal'
        });
        graph.draw();
    }

    useEffect(() => {
        draw()
    }, [])

    return <>
        <div className="funnel" style={{ backgroundColor: '#393862' }}></div>
    </>
}

export default Funnel