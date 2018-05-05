//Yomna Mansour
import React, {Component} from 'react';

export default class Video extends Component{
    render(){
        return(
            <div id="video">
                    
                    <video src={require('./videos/01_01-Welcome.mp4')} >some word</video>
                    <p>The Ausralian Secrete intelligence service (ASIS) is Asustralia's overseas secret HUMINT (human intelligence)collection agency</p>
                    <button id="play" onclick="this.play()"></button>
                </div>
        );
    }
}