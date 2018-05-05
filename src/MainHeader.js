//Yomna Mansour
import React, {Component} from 'react'
//import './Style.css';

export default class MainHeader extends Component{
    render(){
        return (
            <div className="Main-Header">
                    <div className="text">
                        <h1>A GLOBAL<br/> FOCUS</h1>
                        <h4>INTERNATIONAL WORK FOR A NATIONAL PURPOSE</h4>
                    </div>
                    <button className="know-more">I WANT TO KNOW MORE </button>
                </div>
        );
    }
}