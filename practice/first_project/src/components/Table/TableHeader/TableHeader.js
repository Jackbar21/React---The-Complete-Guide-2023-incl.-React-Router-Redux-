import React from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <button onClick={props.reverseHandler}>Reverse</button>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
