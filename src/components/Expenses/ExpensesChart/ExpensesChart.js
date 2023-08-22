import React, { useState } from "react";
import Chart from "../../Chart/Chart/Chart";

const ExpressChart = (props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartDataPoints = months.map((monthName) => ({
    label: monthName,
    value: 0,
  }));

  const { expenses } = props;
  for (const expense of expenses) {
    const expenseIndex = expense.date.getMonth();

    chartDataPoints[expenseIndex].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpressChart;
