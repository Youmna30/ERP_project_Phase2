import React, { Component } from 'react';
import Header from './components/Header';
import Icons from './components/Icons';
import Logo from './components/Logo';
import Wanted from './components/Wanted';
import Black from './components/Black';
import White from './components/White';
import Wanted1 from './components/Wanted1';
import Wanted2 from './components/Wanted2';
import Wanted3 from './components/Wanted3';
import Flogo from './components/Flogo';
import Who from './components/Who';
import What from './components/What';
import Other from './components/Other';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
      <div className="header" style={{  backgroundImage: 'url(' + require('./images/headerb.png') + ')' }}>

      <Logo />
      <Icons />
      <Wanted />
      </div>

      <Black />
      <White />
      <div className="middle">
      <div className="form">
      <Wanted />
      <Wanted1 />
      <Wanted2 />
      <Wanted3 />
      </div>
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
