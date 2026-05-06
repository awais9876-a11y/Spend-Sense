import React from "react";
import "./DashboardCard.css";

const formatCurrency = (amount) => {
  return `${amount.toFixed(2)}Rs/-`;
};

function DashboardCard({ balance, income, expense }) {
  return (
    <div className="dashboard-card">
      <div className="balance-section">
        <p className="total-balance-label">Total Balance</p>
        <p className="total-balance-value">{formatCurrency(balance)}</p>
      </div>

      <div className="summary-section">
        <div className="summary-item income">
          <p className="summary-label">
            <span className="trend-icon">↗</span> INCOME
          </p>
          <p className="summary-value income-value">
            +{formatCurrency(income)}
          </p>
        </div>

        <div className="summary-item expense">
          <p className="summary-label">
            <span className="trend-icon">↘</span> EXPENSE
          </p>
          <p className="summary-value expense-value">
            -{formatCurrency(expense)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
