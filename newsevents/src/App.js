import React, { Component } from 'react';
import Header from './Components/Header';
import Pic from './Components/Pic'
import Middle from './Components/Middle'
import Footer from './Components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Pic />
      <Middle />
      <Footer />
      </div>
    );
  }
}

export default App;
