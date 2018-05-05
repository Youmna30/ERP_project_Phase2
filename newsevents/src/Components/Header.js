import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
  render() {
    return (
    <div className="Header" style={{backgroundImage: 'url(' + require('./images/ball.png') + ')'}}>
      <img className = "logo" src={require("./images/logo1.png")} alt="logo"></img>
      <img className = "logo1" src={require("./images/logo2.png")} alt="logo"></img>
      <div className="hlinks">
        <a href="#" className="fa fa-envelope-o"></a><a href="#" className="fa fa-search"></a> <span>EN</span> <a href="#" className="fa fa-caret-down"></a><a href="#" className="fa fa-bars"></a>
      </div>
    </div>
    );
  }
}

export default Header;
