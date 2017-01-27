import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './App';
import UserPage from './UserPage';
import MovieIndex from './MovieIndex';
import MovieShowContainer from '../containers/MovieShowContainer';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Redirect from="/" to="/movies" />
      <Route path="/" component={App} >
        <Route path="/user" component={UserPage} />
        <Route path="/movies" component={MovieIndex} />
        <Route path="/movies/:id" component={MovieShowContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
