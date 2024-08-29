import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4 className="text-xl">Your Balance</h4>
      <h2 id="balance" className="text-3xl">
        ${total}
      </h2>
    </>
  );
}
