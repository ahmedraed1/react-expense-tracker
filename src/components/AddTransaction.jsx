import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: parseInt(amount),
  };

  function addNewTransaction() {
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={addNewTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
}
