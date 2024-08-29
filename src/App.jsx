import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="max-width">
          <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
