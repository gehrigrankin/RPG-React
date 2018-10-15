import React, { Component } from 'react';
import './App.css';

import Background from './components/Background';
import Menu from './components/Menu'

class App extends Component {
  state = {
    menu: true,
    background: "basic",
    selected: "spongebob",
    characters: [
      {
        name: "spongebob",
        selected: true
      },
      {
        name: "patrick",
        selected: false
      },
      {
        name: "squidward",
        selected: false
      },
      {
        name: "sandy",
        selected: false
      }
    ]
  }

  start = () => {
    this.setState({
      menu: false,
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Background />
        { this.state.menu ? 
            <Menu 
              start={this.start }
              characters={this.state.characters}
              selected={this.state.selected}
            /> : null }
      </div>
    );
  }
}

export default App;
