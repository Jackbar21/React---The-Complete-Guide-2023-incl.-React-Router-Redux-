import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const addExpense = props.addExpense;

  const getTodaysDate = () => {
    const date = new Date();
    const [year, month, day] = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ];

    return `${year}-${month}-${day}`;
  };

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   title: event.target.value,
    // }));
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   amount: event.target.value,
    // }));
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   date: event.target.value,
    // }));
  };

  const clearFormData = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!title || !amount || !date) return;

    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date),
    };

    // console.log(expenseData);
    addExpense(expenseData);

    clearFormData();
  };

  const [formState, setFormState] = useState(false);

  const toggleFormState = () => {
    setFormState((prev) => !prev);
  };

  if (!formState) {
    return (
      <div>
        <button onClick={toggleFormState}>Add Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodaysDate()}
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={toggleFormState}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
