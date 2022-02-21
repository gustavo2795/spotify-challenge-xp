import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Tracks from './pages/Tracks/Tracks.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/tracks/:id">
        <Tracks />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default AppRoutes;
