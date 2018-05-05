//Yomna Mansour
import React,{ Component } from 'react'
//import './Style.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <header>
                    <img src={require('./imgs/logo.png')}id="logo" alt="Logo"/>
                    <nav id="nav-bar">
                        <ul>
                            <li ><Link to={"/menu"}><img src={require('./images/NS2-home+video_10.jpg')} alt="menu"/></Link></li>
                            <li>
                                <select id="lang">
                                    <option>EN</option>
                                </select>
                            </li>
                            <li id="searchInHeader"><Link to={"/search"}><img src={require('./imgs/search.png')} alt="search"/></Link></li>
                            <li id="mail"><img src={require('./images/NS2-home+video_06.jpg')} alt="mail"/></li>
                            <div className="clear"></div>
                        </ul>
                    </nav>

                </header>
                
        );
    }
}