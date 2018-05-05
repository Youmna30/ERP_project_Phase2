//Yomna Mansour
import React,{Component} from 'react';
//import './Style.css';

export default class HistoryContainer extends Component{
    render(){
        return(
            <div className="history-container">
                    <div id="history">
                        <p className="headline">HISTORY</p>
                        <p className="description">Collonel Sheikh Mohammed Abdullah Al Mualla, Director of total quality at Dubai police, said 'The Dubai Police Commander-in-Chief's Award for Innovation and Excellence' commeties have stared evaluating and screening application submited</p>
                        <button className="more">MORE</button>
                         
                    </div>
                    <img src={require('./images/NS2-home+video_50.jpg')} id="img-history"/>
                </div>
        );
    }
}