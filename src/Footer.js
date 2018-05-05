//Yomna Mansour
import React, {Component} from 'react';
//import styles from './Style.css';
import FooterParent from './FooterParent';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="test">
                    <FooterParent/>
                </div>
            </div>
        );
    }
}