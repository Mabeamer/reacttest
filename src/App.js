import React, { Component } from 'react';
import './buttonNormal.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Start Game</h1>
        <changeTeamButton/>
        <button id="expert">Expert</button>
      </div>
    );
  }
}

export default App;
