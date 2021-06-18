import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Hello />
      </div>
    );
  };
}

export default App;
