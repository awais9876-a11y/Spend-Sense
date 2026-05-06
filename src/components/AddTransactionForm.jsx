import React, { useState } from "react";
import "./AddTransactionForm.css";

const categoryColors = {
  Work: "#d1fae5",
  Home: "#fee2e2",
  Food: "#fee2e2",
};

function AddTransactionForm({ onAddTransaction }) {
  const [transactionType, setTransactionType] = useState("expense");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Home");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert("Please fill in both description and amount.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type: transactionType,
      description,
      amount: parseFloat(amount),
      category,
      date: new Date(),
    };

    onAddTransaction(newTransaction);

    setDescription("");
    setAmount("");
  };

  return (
    <div className="add-transaction-section">
      <h2 className="new-transaction-title">
        <span className="plus-icon">+</span> New Transaction
      </h2>

      <form onSubmit={handleSubmit} className="new-transaction-form">
        <div className="toggle-container">
          <button
            type="button"
            className={`toggle-btn ${transactionType === "expense" ? "active expense-active" : ""}`}
            onClick={() => setTransactionType("expense")}
          >
            Expense
          </button>
          <button
            type="button"
            className={`toggle-btn ${transactionType === "income" ? "active income-active" : ""}`}
            onClick={() => setTransactionType("income")}
          >
            Income
          </button>
        </div>

        <input
          type="text"
          placeholder="What was it for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input text-input"
        />

        <div className="form-row">
          <input
            type="number"
            placeholder="Rs 0.00 "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input amount-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input category-select"
          >
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        <button type="submit" className="add-btn">
          Add {transactionType === "expense" ? "Expense" : "Income"}
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
