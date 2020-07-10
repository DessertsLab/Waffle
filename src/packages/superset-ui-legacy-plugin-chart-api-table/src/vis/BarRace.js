import React, { useEffect } from 'react';
import BarChart from './BarRace/BarChart';
import data from './BarRace/data';

const randomColor = () => {
    return `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255})`;
}
const len = data[Object.keys(data)[0]].length;
const keys = Object.keys(data);
const colors = keys.reduce((res, item) => ({
    ...res,
    ...{ [item]: randomColor() }
}), {});

const labels = keys.reduce((res, item, idx) => {
    return {
        ...res,
        ...{
            [item]: (
                <div style={{ textAlign: "center", }}>
                    <div style={{ color: "#ffffff"}}>{item}</div>
                </div>
            )
        }
    }
}, {});

const time = Array(20).fill(0).map((itm, idx) => idx + 1);

const BarRace = props => {

    return <div className="container">
        <BarChart
            start={true}
            data={data}
            timeline={time}
            labels={labels}
            colors={colors}
            len={len}
            timeout={2000}
            delay={100}
            timelineStyle={{
                textAlign: "center",
                fontSize: "80px",
                color: "#ffffff",
                marginBottom: "100px"
            }}
            textBoxStyle={{
                textAlign: "right",
                color: "#ffffff",
                fontSize: "30px",
            }}
            barStyle={{
                height: "60px",
                marginTop: "10px",
                borderRadius: "2px",
            }}
            width={[15, 75, 10]}
            maxItems={25}
        />
    </div>
}

export default BarRace

