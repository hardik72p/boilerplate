import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return(
    <div className='App'>
       <h1>hello world</h1> 
       <img src={require('./images/home.jpg')} className='image'/>
    </div>
    );
  }
}

export default App;