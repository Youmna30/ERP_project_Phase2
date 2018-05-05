import React, { Component } from 'react';

class Third extends Component {
  render() {
    return (
      <div className="third">
                <h1 className="h1">WHAT WE DO</h1>
                  <h2 className="h2">Legislations</h2>
                   <h2 className="h2">Public Interset <br/>Disclosures</h2>
                  <h2 className="h2">Counter-terroism</h2>
                  <h2 className="h2">Counter proliferation</h2>
                 <h1 className="dir"> DIRECTORS <br/> SPEECH</h1>
                              <img className="dirimg" src={require('./impage/images/NS2-Detailed-menu_05.jpg')} alt="dirimg"></img>

              </div>

    );
  }
}

export default Third;
