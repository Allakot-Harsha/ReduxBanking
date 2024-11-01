import CreateCustomer from "./Features/Customer/CreateCustomer";
import Customer from "./Features/Customer/Customer";
import AccountOperations from "./Features/Account/AccountOperations";
import BalanceDisplay from "./Features/Account/BalanceDisplay";
function App() {
  return (
    <div>
      <h1>🏦 Harsha's Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;