import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';


class SliderContainer extends Component {
  render() {
    return (
      <div className="SliderContainer">
      <div className="photos">
            <div className="div1" style={{backgroundImage: 'url(' + require('./imgs/11.png') + ')'}}>
            </div>
            <div className="div2" style={{backgroundImage: 'url(' + require('./imgs/22.png') + ')'}}>
                 <div className="bar">
                    <p>The Australian Secret Intelligence Service (ASIS) is Australia's overseas secret HUMINT (human</p>
                </div>
                <div className="buttons">
                    <a href="#"><i className="fa fa-angle-left fa-2x icon"></i></a>
                    <a href="#"><i className="fa fa-angle-right fa-2x icon"></i></a>
                 </div>
            </div>
            <div className="div3" style={{backgroundImage: 'url(' + require('./imgs/33.png') + ')'}}>
            </div>
     </div>
            <div className="fixed-menue">
                <ul>
                    <li><a>WHO WE ARE</a></li>
                    <li><a>WHAT WE DO</a></li>
                    <li><a>NEWS</a></li>
                </ul>
           </div>
      </div>
    );
  }
}

export default SliderContainer;
