import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="header-top">
        <div className="logo-group">
          <span className="wallet-icon">📁</span>
          <span className="logo-text">SpendSense</span>
        </div>
        <div className="personal-tag">Personal</div>
      </div>
    </header>
  );
}

export default Header;
