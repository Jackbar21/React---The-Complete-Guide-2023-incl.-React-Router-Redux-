import "./ExpenseDate.css";

const ExpenseDate = ({ date: expenseDate }) => {
  const [day, month, year] = [
    expenseDate.getDate(),
    expenseDate.toLocaleString("default", { month: "long" }),
    expenseDate.getFullYear(),
  ];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
