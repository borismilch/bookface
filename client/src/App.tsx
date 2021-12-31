import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home'

import Routes from './Routes';

const App = () => {

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
