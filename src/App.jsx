import React, { useState } from "react";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionHistory from "./components/TransactionHistory";
import "./App.css";

const initialTransactions = [];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="app-container">
      <div className="main-content">
        <Header />
        <DashboardCard
          balance={totalBalance}
          income={totalIncome}
          expense={totalExpense}
        />
        <AddTransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
