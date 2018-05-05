import React, { Component } from 'react';

class Wanted3 extends Component {
  render() {
    return (
      <div>
      <img className="line" src={require('./images/images/NS2-contact-us_07.jpg')} alt="line"></img>


                      <div className="w3">
                      <h1 className="h01">03</h1>
                      <img className="circle" src={require('./images/images/NS2-wanted_03.jpg')} alt="circle"></img>
                      <h1 className="p1">NAME NAME<br/>AGE 28</h1>
                      <p className="p2">Wanted for abuse</p>
                      <h1 className="d1">DETAILS</h1>
                      <p className="p3">primary goal is to obtain and distribute secret<br/>
                      intellgence about the capabilites,intentions<br/>
                      and activities ofindividuals or organisations<br/>
                      outside Australia,which may impact on</p>
                     <button type="button" className="b" >REPORT</button>
                     <p className="p4">View more details</p>
                  </div>
                    <img className="line" src={require('./images/images/NS2-contact-us_07.jpg')} alt="line"></img>
                  </div>
    );
  }
}

export default Wanted3;
