import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Proptypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Details />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

