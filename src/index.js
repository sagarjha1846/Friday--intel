import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Mobile404 from './pages/Mobile404';
import LoginProvider from './context/LoginProvider';
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ProSidebarProvider>
        <LoginProvider>
          <BrowserView>
            <App />
          </BrowserView>
          <MobileView>
            <Mobile404 />
          </MobileView>
        </LoginProvider>
      </ProSidebarProvider>
    </Router>
  </React.StrictMode>,
);
