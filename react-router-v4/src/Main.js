import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path='/roster' component={Roster}/>
    <Route path='/schedule' component={Schedule}/>
  </Switch>
)

export default Main;
