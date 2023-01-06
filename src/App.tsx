import React, { FC } from 'react';
import Router from 'react-easy-router';

// Routes
import routes from './routes';

// CSS Integration
import './css/index.css';

const App: FC = () => {
  const checkAuth = (): boolean => {
    return localStorage.getItem('token') !== null;
  };

  return <Router routes={routes} isAuthenticated={checkAuth} />;
};

export default App;
