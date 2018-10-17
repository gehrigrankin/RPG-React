import React, { Component } from 'react';
import './App.css';

import Background from './components/Background';

class App extends Component {
  state = {
    background: "normal",
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <h1 id="page-title">Spongebob's Bikini Bottom Trivia</h1>
        <Background />
        
      </div>
    );
  }
}

export default App;
