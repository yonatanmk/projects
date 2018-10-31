import React, { Component } from 'react';
import CounterButton from './CounterButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterButton />
      </div>
    );
  }
}

export default App;
