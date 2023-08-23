import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const addExpense = props.addExpense;

  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default NewExpense;
