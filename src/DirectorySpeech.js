//Yomna Mansour
import React, {Component} from 'react';
//import './Style.css';

export default class DirectorySpeech extends Component{
    render(){
        return(
            <div id="directors-speech">
            <div className="test">
                <div className="info">
                        <div className="circle-parent"></div>
                        <p id="name">Name </p>
                        <p id="title">title </p>
                    </div>
                <div className="test-dir-speech">
                    <p id="dir-headline">DIRCTIR'S SPEECH</p>
                    <p id="dir-paragraph1">Dirctor-General Nick Wraner gave the first ever public speech about ASIS on 19 July 2012 as a part of the Lowy Institute's Distingueshed Speakers serires.</p>
                    <p id="dir-paragraph2">Collonel Sheikh Mohammed Abdullah Al Mualla, Director of total quality at Dubai police, said 'The Dubai Police Commander-in-Chief's Award for Innovation and Excellence' commeties have stared evaluating and screening application submited</p>
                    <button className="more">MORE</button>
                </div>
                    
                
                </div>
        </div>
        );
    }
}