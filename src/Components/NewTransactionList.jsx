import { useContext } from "react";
import { GlobalContext } from "../Context/GlobleState";
import Transaction from "./Transaction";
import { FaRegFolderOpen } from "react-icons/fa";

const NewTransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>

      {transactions.length === 0 ? (
        <div className="empty-history">
          <FaRegFolderOpen className="empty-icon" />
          <h4>No Transactions Yet</h4>
          <p>Add your first transaction to get started.</p>
        </div>
      ) : (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              transactions={transaction}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default NewTransactionList;