import React, { Component } from 'react';
import Header from './components/Header';
import Icons from './components/Icons';
import Logo from './components/Logo';
import Mission from './components/Mission';
import Black from './components/Black';
import White from './components/White';
import MissionValues from './components/MissionValues';
import Service from './components/Service';
import Innovation from './components/Innovation';
import Trust from './components/Trust';
import Unity from './components/Unity';
import Flogo from './components/Flogo';
import Who from './components/Who';
import What from './components/What';
import Other from './components/Other';
import './App.css'
const style1={background:' #ffffff', padding: '4%',marginTop:'5%',marginBottom: '5%' };
class App extends Component {
  render() {
    return (
      <div>
      <div className="header" style={{  backgroundImage: 'url(' + require('./images/headerb.png') + ')' }}>

      <Logo />
      <Icons />
      <Mission />
      </div>

      <Black />
      <White />
      <div className="middle">
      <MissionValues />
      <Service />
      <Innovation />
      <Trust />
      <Unity />
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
