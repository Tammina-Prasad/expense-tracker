import { useContext } from "react";
import { GlobalContext } from "../Context/GlobleState";
import { FaWallet } from "react-icons/fa";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="balance-card">
      <div className="balance-header">
        <FaWallet className="balance-icon" />

        <div>
          <h4>Current Balance</h4>
          <p>Total Available</p>
        </div>
      </div>

      <h2 className="balance-amount">${total}</h2>
    </div>
  );
};

export default Balance;