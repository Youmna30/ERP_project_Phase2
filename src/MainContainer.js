//Yomna Mansour
import React, {Component} from 'react';
import Header from './Header';
import MainHeader from './MainHeader';
import Dots from './Dots';
import Sections from './Sections'
import SiteInfo from './SiteInfo'
//import './Style.css';

export default class MainContainer extends Component{
    render(){
        return(
            <div className="Main-container">
                    <div className="test">
                          <Header/>
                          <MainHeader/>
                          <Dots/>
                          <Sections/>
                          <SiteInfo/>
                    </div>
                </div>
              );
    }
}