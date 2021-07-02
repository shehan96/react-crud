import './App.css';
import Hello from './components/Hello';
import Rest from './components/Rest';
import React, { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div className="App">
         <Hello />
       {/* <Rest />*/}
       {/* <Oi />*/}
        {/* test * */}
      </div>
    );
  };
}

export default App;
