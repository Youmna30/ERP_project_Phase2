//Yomna Mansour
import React, {Component} from 'react';
import './Style.css';
import MainContainer from './MainContainer';
import OverviewMission from './OverviewMission';
import DirectortSpeech from './DirectorySpeech';
import Footer from './Footer';

import {BrowserRouter, Route,IndexRouter} from 'react-router-dom';

export default class Root extends Component{
    render(){
        return(
            <div>
                
                <MainContainer/>
                        
                    
                <OverviewMission/>
                <DirectortSpeech/>
                <Footer/>
            </div>
        );
    }
}