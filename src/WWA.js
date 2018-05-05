//Yomna Mansour
import React,{Component} from 'react';
const wstyle1={padding: '0%'};
const wstyle2={width: '100%', margin: '0%'};

export default class WWA extends Component{
    render(){
        return(
            <div className="container" style={wstyle1}  >
                <div className="nav">
                <div className="row align-items-center " style={wstyle2} >
                    <div className="col-4 txt red-txt">
                        WHO WE ARE
                    </div>
                    <div className="col-4 txt">
                        WHAT WE DO
                    </div>
                    <div className="col-4 txt">
                        NEWS
                    </div>
                </div>
            </div>
            </div>
        );
    }
}