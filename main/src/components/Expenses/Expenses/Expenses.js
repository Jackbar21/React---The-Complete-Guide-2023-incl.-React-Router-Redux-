import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

const Expenses = (props) => {
  const startingYear = 2019;
  const [filteredYear, setFilteredYear] = useState(startingYear);

  const setFilteredYearWrapper = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => Number(filteredYear) === new Date(expense.date).getFullYear()
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        startingYear={startingYear}
        value={filteredYear}
        onSelectYear={setFilteredYearWrapper}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
