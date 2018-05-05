import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div className="logo-container">
                <img src={require("./imgs/transparent-logo.png")}></img>
            </div>
            <div className="footer-menues">
                <div className="footer-menue">
                    <ul>
                        <li><span>WHO WE ARE</span></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Mission,values<br></br>and Ethics</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Director's speech</a></li>
                    </ul>
                </div>

                <div className="footer-menue">
                     <ul>
                        <li><span>WHAT WE DO</span></li>
                        <li><a href="#">Legislations</a></li>
                        <li><a href="#">Public interest <br></br>Discoluoser</a></li>
                        <li><a href="#">Counter-terrorism</a></li>
                        <li><a href="#">Counter proliferetion</a></li>
                    </ul>
                </div>

                <div className="footer-menue">
                    <ul>
                        <li><a href="#"><span>NEWS</span></a></li>
                        <li><a href="#"><span>FAQs</span></a></li>
                        <li><a href="#"><span>CONTACT US</span></a></li>
                    </ul>
                    <div className="social-media">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook-official icon"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter icon"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram icon"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus icon"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Footer;
