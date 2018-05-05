//Yomna Mansour
import React, {Component} from 'react';

const style1={padding: '0%'};
const style2={position: 'absolute',marginLeft: '17%',marginTop: '-73px' };
export default class Menu2 extends Component{
    render(){
        return(
            <div className="container" style={style1}>
                <div className="row align-items-end txt2" >

                    <div className="col-3">
                        Overview
                        <br/>
                        <img src={require('./images/uparrow.png')} style={style2} />
                    </div>
                    <div className="col-4">
                        Mission, Values and Ethics
                    </div>
                    <div className="col-2 red-txt">
                        History
                    </div>
                    <div className="col-3">
                        Director’s speech
                    </div>
                </div>
            </div>
        );
    }
}