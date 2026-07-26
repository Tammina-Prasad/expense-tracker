import React from "react";
import { FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaWallet className="logo-icon" />

        <div>
          <h1>Expense Tracker</h1>
          <p>Track your income & expenses easily</p>
        </div>
      </div>
    </header>
  );
};

export default Header;