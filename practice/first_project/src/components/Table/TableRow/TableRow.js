import React from "react";

const TableRow = (props) => {
  const {
    year,
    yearlyInterest,
    savingsEndOfYear,
    yearlyContribution,
    totalInterestGained,
    totalInvestedCapital,
  } = props.data;

  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <tr>
      <td>{year}</td>
      <td>{formatCurrency(savingsEndOfYear)}</td>
      <td>{formatCurrency(yearlyInterest)}</td>
      <td>{formatCurrency(totalInterestGained)}</td>
      <td>{formatCurrency(totalInvestedCapital)}</td>
    </tr>
  );
};

export default TableRow;
