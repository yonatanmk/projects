import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GameClass from './components/GameClass';

let game = new GameClass();

ReactDOM.render(
  <App
  game={game}
  />,
  document.getElementById('app')
);
