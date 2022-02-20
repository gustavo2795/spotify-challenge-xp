import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default AppRoutes;
