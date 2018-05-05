//Yomna Mansour
import React, {Component} from 'react';
//import styles from './Style.css';

export default class FooterParent extends Component{
    render(){
        return(
            <div className="footer-parent">
                <div className="footer-logo-div">
                        <img src={require('./imgs/logo.png')} id="footer-logo"/>
                </div>
            
                <div className="footer-after-logo">
                        <div id="who-we-are">

                            <ul>
                                <li>WHO WE ARE</li>
                                <li>Overview</li>
                                <li>Mission, Vales And Ethics</li>
                                <li>History</li>
                                <li>Director's Speech</li>
                            </ul>
                        </div>
                        <div id="what-we-do">
                            <ul>
                                <li>WHAT WE DO</li>
                                <li>Legislation</li>
                                <li>Public Interest Disclosure</li>
                                <li>Counter Terrorism</li>
                                <li>Counter Proliferation</li>
                            </ul>
                        </div>
                        <div id="other">
                            <ul>
                                <li>NEWS</li>
                                <li>FAQs</li>
                                <li>CONTACT US</li>
                                <li id="social-media">
                                    <img src={require('./imgs/fb.png')}/>
                                    <img src={require('./imgs/twitter.png')}/>
                                    <img src={require('./imgs/instagram.png')}/>
                                    <img src={require('./imgs/google-plus-icon.png')}/>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        );
    }
}