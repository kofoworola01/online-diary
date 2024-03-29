import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import  GlobalStyle  from './globalStyles.styled'
import { Provider } from 'react-redux';
import store from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);
