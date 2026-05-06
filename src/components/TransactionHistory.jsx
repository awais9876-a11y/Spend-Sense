import React from "react";
import "./TransactionHistory.css";

const categoryConfig = {
  Work: { icon: "💼", bgColor: "#d1fae5" },
  Home: { icon: "🏠", bgColor: "#fee2e2" },
  Food: { icon: "☕", bgColor: "#fee2e2" },
  Shopping: { icon: "🛍️", bgColor: "#fee2e2" },
};

const TransactionItem = ({ transaction }) => {
  const isIncome = transaction.type === "income";
  const config = categoryConfig[transaction.category] || {
    icon: "❓",
    bgColor: "#f1f3f5",
  };

  const formatAmount = (amount) => {
    const formatted = `${amount.toFixed(2)}Rs/-`;
    return isIncome ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div className="transaction-item">
      <div className="item-left">
        <div
          className="category-icon"
          style={{ backgroundColor: config.bgColor }}
        >
          {config.icon}
        </div>
        <div className="details">
          <p className="description">{transaction.description}</p>
          <p className="category">{transaction.category}</p>
        </div>
      </div>
      <div className={`item-amount ${isIncome ? "income" : "expense"}`}>
        {formatAmount(transaction.amount)}
      </div>
    </div>
  );
};

function TransactionHistory({ transactions }) {
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="transaction-history-section">
      <h2 className="history-title">Recent History</h2>
      <div className="transactions-list-container">
        {recentTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}

        <div className="scroll-indicator">
          <div className="thumb"></div>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
