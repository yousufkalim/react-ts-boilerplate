import React, { FC } from 'react';
import Router from 'react-easy-router';
import { ToastContainer } from 'react-toastify';

// Routes
import routes from './routes';

// CSS Integration
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

const App: FC = () => {
  const checkAuth = (): boolean => {
    return localStorage.getItem('token') !== null;
  };

  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={3000} />

      <Router routes={routes} isAuthenticated={checkAuth} />
    </div>
  );
};

export default App;
