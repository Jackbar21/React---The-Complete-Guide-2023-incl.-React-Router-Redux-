import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // Create years array from starting year to current year. [startingYear, ..., currentYear]
  // I.e. if startingYear is 2019, and currentYear is 2021, years will be [2019, 2020, 2021]
  const { startingYear, value: year, onSelectYear } = props;
  const numYears = new Date().getFullYear() - startingYear + 1;
  const years = Array.from(
    { length: numYears },
    (_, index) => startingYear + index
  );

  const onChangeHandler = (event) => {
    onSelectYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={onChangeHandler}>
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
