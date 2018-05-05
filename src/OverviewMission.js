//Yomna Mansour
import React, {Component} from 'react';
//import './Style.css';
import SmallContainer from './SmallContainer';
import HistoryContainer from './HistoryContainer';
import Video from './Video';

export default class OverviewMission extends Component{
    render(){
        return(
            <div id="overview-mission">
                <div className="test">
                    <SmallContainer/>
                    <Video/>
                    <HistoryContainer/>
                    <div id="needed"><p></p></div>
                </div>
                
            </div>
        );
    }
}