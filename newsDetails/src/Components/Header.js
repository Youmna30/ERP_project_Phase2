import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{backgroundImage: 'url(' + require('./images/ball.png') + ')'}}>
        <div className = "logo">
            <img  src={require("./images/logo1.png")} alt="logo" ></img>
        </div>
        <div className = "logo1">
            <img  src={require("./images/logo2.png")} alt="logo"></img>
        </div>
        <div className="hlinks">
          <a href="#" className="fa fa-envelope-o"></a><a href="#" className="fa fa-search"></a> <span>EN</span> <a href="#" className="fa fa-caret-down"></a><a href="#" className="fa fa-bars"></a>
        </div>

      </div>
    );
  }
}

export default Header;