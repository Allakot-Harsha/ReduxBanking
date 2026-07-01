import CreateCustomer from "./Features/Customer/CreateCustomer";
import Customer from "./Features/Customer/Customer";
import AccountOperations from "./Features/Account/AccountOperations";
import BalanceDisplay from "./Features/Account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state)=>state.customer.fullName);

  return (
    <div>
      <h1>🏦 The Harsha Bank ⚛️</h1>
      {fullName===""?(<CreateCustomer />):(
        <><Customer />
      <AccountOperations />
      <BalanceDisplay />
      </>
    )}
      
      
    </div>
  );
}

export default App;