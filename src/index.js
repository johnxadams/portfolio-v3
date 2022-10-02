import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyContextProvider } from './components/Context/MyContexts';

// libraries
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </BrowserRouter>
);
