import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{backgroundImage: 'url(' + require('./imgs/ball.png') + ')'}}>
        <div className="header-container">
            <div className="logo-container">
                <img src={require("./imgs/headerlogo3.png")}></img>
            </div>
            <nav>
                <div className="nav-menue">
                    <ul>
                        <li><a href="#"><i className="fa fa-envelope-o icon"></i></a></li>
                        <li><a href="#"><i className="fa fa-search icon"></i></a></li>
                        <li><a href="#">EN</a></li>
                        <li><a href="#"><i className="fa fa-bars icon"></i></a></li>
                    </ul>
                </div>
            </nav>
         </div>
      </div>
    );
  }
}

export default Header;
