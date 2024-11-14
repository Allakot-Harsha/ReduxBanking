import CreateCustomer from "./Features/Customer/CreateCustomer";
import Customer from "./Features/Customer/Customer";
import AccountOperations from "./Features/Account/AccountOperations";
import BalanceDisplay from "./Features/Account/BalanceDisplay";
import { useSelector } from "react-redux";
function App() {
  const fullName = useSelector((store)=>store.customer.fullName);
  return (
    <div>
      <h1>🏦 Harsha's Bank ⚛️</h1>
      {fullName===""?<CreateCustomer />:
      <><Customer />
      <AccountOperations />
      <BalanceDisplay />
      </>
      }      
      
    </div>
  );
}

export default App;