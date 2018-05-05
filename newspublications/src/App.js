import React, { Component } from 'react';
import Header from './Components/Header'
import SliderContainer from './Components/SliderContainer'
import PublicationsContent from './Components/PublicationsContent'
import Footer from './Components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <SliderContainer />
      <PublicationsContent />
      <Footer />
      </div>
    );
  }
}

export default App;
