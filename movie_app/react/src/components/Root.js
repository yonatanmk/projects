import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import MovieShowContainer from '../containers/MovieShowContainer';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} />
      <Route path="/movie/:id" component={MovieShowContainer} />
    </Router>
  </Provider>
);

export default Root;
