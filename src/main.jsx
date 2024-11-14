import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.jsx';
import {Provider} from "react-redux";

// store.dispatch({
//   type:"accounts/deposit", payload:3000
// })

console.log(store.getState());

// provider is given for using the subscribe option, because now App is now wrapped with Provoider, it has got the subscription and we pass store as a parameter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </StrictMode>,
)
