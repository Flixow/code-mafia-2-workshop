import React, { Component } from 'react';

import { Home } from './pages'
import { Header } from './components'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Home />
      </div>
    );
  }
}

export default App;
