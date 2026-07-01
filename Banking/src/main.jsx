import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store.jsx';

// store.dispatch({type:"account/deposit", payload:5000});
// console.log(store.getState());


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>    
  </StrictMode>,
)
