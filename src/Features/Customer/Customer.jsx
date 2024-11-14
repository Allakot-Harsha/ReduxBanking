import { useSelector } from "react-redux";
function Customer() {
  // we will use useSelector hook to use redux code inside any component that needs it
  const customer = useSelector((store)=> store.customer.fullName)
    return <h2>👋 Welcome, {customer}</h2>;
  }
  
  export default Customer;