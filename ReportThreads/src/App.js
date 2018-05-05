import React, { Component } from 'react';
import Header from './components/Header';
import Icons from './components/Icons';
import Logo from './components/Logo';
import Report from './components/Report';
import Black from './components/Black';
import White from './components/White';
import Report1 from './components/Report1';
import Message from './components/Message';
import Email from './components/Email';
import Name from './components/Name';
import Phone from './components/Phone';
import Send from './components/Send';
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
      <Icons />
      <Report />
      </div>

      <Black />
      <White />
      <div className="middle">
      <div className="form">
      <Report1 />
      <Message />
      <Email />
      <Name />
      <Phone />
      <Send />
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
