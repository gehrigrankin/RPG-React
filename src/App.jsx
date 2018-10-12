import React, { Component } from 'react';
import './App.css';

import Background from './components/Background';
import Menu from './components/Menu'

class App extends Component {
  state = {
    menu: true
    
  }

  start = () => {
    this.setState(() => {

    })
  }

  componentDidMount() {
    this.start();
  }

  render() {
    return (
      <div className="App">
        <Background />
        { this.state.menu ? <Menu/> : null }
      </div>
    );
  }
}

export default App;
