import React, { Component } from 'react';

class First extends Component {
  render() {
    return (
      <div className="first">
             <h1 className="h1">WHO WE ARE</h1>
             <h2 className="h2">Overview</h2>
              <h2 className="h2">Mission, Values <br/>and Ethics</h2>
             <h2 className="h2">History</h2>
             <h2 className="h2">Director’s speech</h2>
             <h3 className="h3"> MISSION& <br/> VALUES</h3>
             <img className="misimg" src={require('./impage/images/NS2-Detailed-menu_08.jpg')} alt="misimg">
         </img>

         </div>
    );
  }
}

export default First;
