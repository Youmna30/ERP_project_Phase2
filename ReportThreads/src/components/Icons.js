import React, { Component } from 'react';

class Icons extends Component {
  render() {
    return (
      <div className="icons">
                        <img className="m" src={require('./images/message.png')} alt="m" ></img>
                        <img className="s" src={require('./images/search.png')} alt="s" ></img>
                        <img className="en" src={require('./images/EN.png') } alt="en" ></img>
                        <img className="arrow" src={require('./images/arrow.png') }alt="arrow"></img>
             <img className="menu" src={require('./images/menu.png')}
                 alt="menu"></img>
      </div>
    );
  }
}

export default Icons;
