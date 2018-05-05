//Sara Tarek
import React, {Component} from 'react';
import Header from './Header';
/*import IconComponent from './IconComponent';
import LogoComponent from './LogoComponent';
import NavComponent from './NavComponent';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import OverviewComponent from './OverviewComponent';
import MissionComponent from './MissionComponent';
import HistoryComponent from './HistoryComponent';
import TextComponent from './TextComponent';
import FlogoComponent from './FlogoComponent';
import WhoComponent from './WhoComponent';
import WhatComponent from './WhatComponent';
import OtherComponent from './OtherComponent';
import Footer from './Footer';
import './menucssreact.css';*/
import MenuHeader from './MenuHeader';
import OverviewMission from './OverviewMission';
import DirectortSpeech from './DirectorySpeech';
import Footer from './Footer';
import './Style.css';

export default class MenuSara extends Component{
    render(){
        return(
            <div>
                <MenuHeader/>
                <OverviewMission/>
                <DirectortSpeech/>
                <Footer/>
                
            </div>
            
        );
    }
}