import React, { Component } from 'react';
import Header from './components/Header';
import Icons from './components/Icons';
import Logo from './components/Logo';
import First from './components/First';
import Black from './components/Black';
import White from './components/White';
import Second from './components/Second';
import Third from './components/Third';
import Overview from './components/Overview';
import Mission from './components/Mission';
import History from './components/History';
import Flogo from './components/Flogo';
import Who from './components/Who';
import What from './components/What';
import Other from './components/Other';
import Speech from './components/Speech';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
      <div className="header" style={{  backgroundImage: 'url(' + require('./images/headerb.png') + ')' }}>

      <Logo />
        <Header />
        <Icons />
        <div className="zero">
            <First />
            <Second />
            <Third />
        </div>
      </div>


      <div className="middle">
      <Overview />
              <Mission />
              <History />
      </div>
      <div className="directors-speech">

              <Speech />

              </div>

      <div className="footer">
      <Flogo />
      <Who />
      <What />
      <Other />
      </div>
      </div>
    );
  }


}

export default App;
