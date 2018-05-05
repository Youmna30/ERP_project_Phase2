import React, { Component } from 'react';

class Icons extends Component {
  render() {
    return (
      <div className="icons">
                        <img className="m" src={require('./impage/NS2-Detailed-menu2_06.jpg')} alt="m" ></img>
                        <img className="s" src={require('./images/NS2-Detailed-menu2_09.png')} alt="s" ></img>
                        <img className="en" src={require('./images/NS2-Detailed-menu2_11.png')}  alt="en" ></img>
                        <img className="x" src={require('./impage/NS2-Detailed-menu2_10.jpg')} alt="x" ></img>
                    </div>
    );
  }
}

export default Icons;
