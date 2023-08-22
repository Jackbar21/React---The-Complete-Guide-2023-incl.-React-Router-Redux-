const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// export const addExpense = (expense) => {
//   return expenses.unshift(expense);
// };

// export const deleteExpense = ({ id }) => {
//   return expenses.filter((expense) => expense.id !== id);
// };

// export const updateExpenseById = (id, updatedExpense) => {
//   return expenses.map((expense) =>
//     expense.id === id ? { ...expense, ...updatedExpense } : expense
//   );
// };

export default expenses;
