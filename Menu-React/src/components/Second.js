import React, { Component } from 'react';

class Second extends Component {
  render() {
    return (
      <div className="second">
                   <h1 className="h1">WHAT WE DO</h1>
           <h2 className="h2">Legislations</h2>
            <h2 className="h2">Public Interset <br/>Disclosures</h2>
           <h2 className="h2">Counter-terroism</h2>
           <h2 className="h2">Counter proliferation</h2>
            <h1 className="his"> HISTORY</h1>
                       <img className="hisimg" src={require('./impage/images/NS2-Detailed-menu_03.jpg')} alt="hisimg"></img>

           </div>
    );
  }
}

export default Second;
