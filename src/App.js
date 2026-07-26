import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import NewIncomeExpenses from './Components/NewIncomeExpenses';
import NewTransactionList from './Components/NewTransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobleState';

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Header />

        <main className="container">
          <Balance />

          <NewIncomeExpenses />

          <NewTransactionList />

          <AddTransaction />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;