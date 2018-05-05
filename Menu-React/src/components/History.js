import React, { Component } from 'react';

class History extends Component {
  render() {
    return (
      <div className="history">

              <h1 className="h1">HISTORY</h1>
              <h2 className="h2"><p>primary goal is to obtain and distribute <br/>
              secret intelligence about the capabilities,<br/>
              intentions and activites of individuals or <br/>
              organisations outside Australia , which <br/>
              may impact on Australias intersets ans <br/>
              the well-being of its citizens.<br/></p></h2>
              <h3 className="h3"><a href="#">MORE</a></h3>
              <img className="pic" src={require('./impage/NS2-Detailed-menu2_30.png')} alt="pic"/>
          </div>
    );
  }
}

export default History;
