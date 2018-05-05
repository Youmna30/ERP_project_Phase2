//Yomna Mansour
import React, {Component} from 'react';
//import './Style.css';
import {Link} from 'react-router-dom';

export default class SiteInfo extends Component{
    render(){
        return(
            <div id="site-info">
                    <ul>
                        <li>MISSION, VALUES AND ETHICS</li>
                        <li><Link to={"/history"} style={{color:'black', textDecoration:'none'}}>HISTORY</Link></li>
                        <li>DIRECTOR'S SPEECH</li>
                        <li>FAQ</li>
                    </ul>
            </div>
        );
    }
}