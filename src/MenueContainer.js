//Yomna Mansour
import React, {Component} from 'react';
import Menu2 from './Menu2';
import WWA from './WWA';
const mstyle1={height:'100px',background: '#ffffff'};

export default class MenuContainer extends Component{
    render(){
        return(
            <div style={mstyle1}>
                <Menu2/>
                <WWA/>
            </div>
        );
    }
}