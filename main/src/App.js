import { useState } from "react";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";
import initialExpenseData from "./data/expenses";

function App() {
  const [expenses, setExpenses] = useState(initialExpenseData);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
