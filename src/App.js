import './App.css';
import React, { Component } from 'react';
import RollDice from './components/RollDice';

class App extends Component {

  render() {
    return (
      <div className="app">
        <RollDice />
      </div>
    );
  }
}

export default App;


