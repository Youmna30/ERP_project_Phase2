import React, { Component } from 'react';

class Other extends Component {
  render() {
    return (
      <div className="other">
                       <ul>
                           <li>NEWS</li>
                           <li>FAQs</li>
                           <li>CONTACT US</li>
                           <li className="social-media">
                               <img src={require('./impage/NS2-Detailed-menu2_43.jpg')}></img>
                               <img src={require('./impage/NS2-Detailed-menu2_45.jpg')}></img>
                               <img src={require('./impage/NS2-Detailed-menu2_46.jpg')}></img>
                               <img src={require('./impage/NS2-Detailed-menu2_47.jpg')}></img>
                           </li>
                       </ul>
                   </div>
    );
  }
}

export default Other;
