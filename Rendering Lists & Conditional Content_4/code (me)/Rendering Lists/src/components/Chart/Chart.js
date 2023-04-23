import React from "react";
import ChartBar from './ChartBar'
import './ChartBar.css'
const Chart = props=>{

    const dataPointsValues=props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum=Math.max(...dataPointsValues);
    return <div className="chart">
        {props.dataPoints.map(datapoint => 
        <ChartBar 
        key={datapoint.label}
         value={datapoint.value} 
         maxValue={totalMaximum}
        label={datapoint.label} />)}
    </div>
};

export default Chart;
