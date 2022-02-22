import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import AppRoutes from './routes';
import store from './store';
import './App.css';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  )
};

export default App;