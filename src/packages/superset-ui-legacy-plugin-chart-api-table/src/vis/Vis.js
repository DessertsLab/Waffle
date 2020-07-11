import React from 'react'
import Funnel from './Funnel';
import BarRace from './BarRace';
import Sankey from './Sankey'

const Vis = props => {
    // console.log('props.type', props.type)
    if (props.type === "funnel") {
        // console.log('111111111111', 111111111111)
        return <Funnel data={props.data} columns={props.columns} />
    } else if (props.type === "bar_race") {
        return <BarRace data={props.data} columns={props.columns} />
    } else if (props.type === "sankey") {
        return <Sankey data={props.data} columns={props.columns} />
    }

    return <>'vis type not exists'</>
}

export default Vis