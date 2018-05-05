import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const backStyle={backgroundImage:'url(' + require('./imgs/29939780_1768013479929420_1524403839_n.png')+')', backgroundPosition: 'left top',backgroundRepeat: 'no-repeat'}

export default class MenuHeader extends Component{
    render(){
        return(
            <div className="Main-container2" style={backStyle}>
            <div className="test">
                <header>
                        <img src={require('./imgs/logo.png')}id="logo" alt="Logo"/>
                        <nav id="nav-bar">
                            <ul>

                                <li ><Link to={"/"}><img className="x" src={require('./images/NS2-Detailed-menu2_10.jpg')} alt="x" /></Link></li>
                                <li>
                                    <select id="lang">
                                        <option>EN</option>
                                    </select>
                                </li>
                                <li id="searchInHeader"><Link to={"/search"}><img src={require('./imgs/search.png')} alt="search"/></Link></li>
                                <li id="mail"><img src={require('./images/NS2-home+video_06.jpg')} alt="mail"/></li>
                                <li><Link  to={"/"} style={{color:'white', textDecoration:'none'}}>REPORT A THREAT </Link></li>
                                <li><Link to={"/"} style={{color:'white', textDecoration:'none'}}> INTELLIGENCE EXPLAINED </Link></li>
                                <li><Link to={"/"} style={{color:'white', textDecoration:'none'}}> WANTED </Link></li>
                                <div className="clear"></div>
                            </ul>
                        </nav>

                    </header>
                    <div id="inMenu">
                        <div className="first">

                            <h2 className="h1">WHO WE ARE</h2> 
                            <h4 className="h2" style={{color:'#ececed'}}>Overview</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Mission, Values <br/>and Ethics</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>History</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Director’s speech</h4>

                        </div>
                        <div className="second"> 
                            <h2 className="h1">WHAT WE DO</h2> 
                            <h4 className="h2" style={{color:'#ececed'}}>Legislations</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Public Interset <br/>Disclosures</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Counter-terroism</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Counter proliferation</h4>
                        </div>


                       <div className="third">
                            <h2 className="h1">WHAT WE DO</h2> 
                            <h4 className="h2" style={{color:'#ececed'}}>Legislations</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Public Interset <br/>Disclosures</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Counter-terroism</h4>
                            <h4 className="h2" style={{color:'#ececed'}}>Counter proliferation</h4>
                        </div>
                    </div>
            </div>
        </div>

        );
    }
}