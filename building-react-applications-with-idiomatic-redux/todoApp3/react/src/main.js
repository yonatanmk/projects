import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

$(function() {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('todo')
  );
});
