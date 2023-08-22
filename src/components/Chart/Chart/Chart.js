import React, { useState } from "react";
import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalCost = dataPointValues.reduce((acc, curVal) => acc + curVal, 0);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalCost}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
