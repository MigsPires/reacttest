import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ola from './Ola';

class App extends Component {
  constructor() {
    super();
    this.state = {
      adeus: 'ola',
    }
  }

  render() {
    return (
      <div className="App">
        <Ola texto={this.state.adeus} />
      </div>
    );
  }
}

export default App;
