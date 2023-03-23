import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile404 from './pages/Mobile404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BrowserView>
        <App />
      </BrowserView>
    </Router>
    <MobileView>
      <Mobile404 />
    </MobileView>
  </React.StrictMode>,
);
