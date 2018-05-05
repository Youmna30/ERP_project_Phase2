//Yomna Mansour
import React, {Component} from 'react';
import './search.css';
import {Link} from 'react-router-dom';

export default class Search extends Component{
    render(){
        return(
            <div>
                <div id="Main-container-search" >
                <div className="test-search">
                    <header>
                        <img src={require('./imgs/logo.png')} id="logo-search" alt="Logo"/>

                    </header>
                    <Link to={"/"}><div id="close"></div></Link>
                        <input type="search" id="search" name="search" placeholder="SEARCH"/>

                    </div>
                </div>
                <div id="result"></div>
            </div>
        );
    }
}

