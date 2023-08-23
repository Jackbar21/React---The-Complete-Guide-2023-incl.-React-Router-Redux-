import React, { useState } from "react";
import styles from "./Table.module.css";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

const Table = (props) => {
  const { data: yearlyData } = props;
  return (
    <table className={styles.result}>
      <TableHeader reverseHandler={props.reverseHandler} />
      <tbody>
        {yearlyData.map((data) => (
          <TableRow key={data.year} data={data} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
