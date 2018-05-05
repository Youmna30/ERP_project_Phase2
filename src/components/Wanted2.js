import React, { Component } from 'react';

class Wanted2 extends Component {
  render() {
    return (
      <div className="row1 " >

                  <div className="col1" >

                      <h1 className="title1" >

                          functions

                      </h1>

                      <br/>

                      <p className="content">

                          Our functions, as set out in the Intelligence Services Act 2001, are to:
                          <br/><br/>

                      </p>

                      <br/>

                      <p className="content" >

                          <img className="dash" src={require('./images/dash.png')}/>

                      collect foreign intelligence, not available by
                      <br/>other means, which may impact on Australias
                      <br/> interests;
                       <br/>
                      </p>



                      <p className="content" >

                          <img className="dash" src={require('./images/dash.png')}/>

                          distribute that intelligence to the
                          <br/> Government, including key policy
                          <br/> departments and agencies;<br/>

                      </p>

                      <p className="content">

                          <img className="dash" src={require('./images/dash.png')}/>

                          undertake counter-intelligence activities
                          <br/> which protect Australias interests and
                          <br/> initiatives; and,<br/>

                      </p>

                      <p className="content" >

                          <img  className="dash" src={require('./images/dash.png')}/>

                          engage other intelligence and security
                          <br/> services overseas in Australias national
                          <br/>interests.

                      </p>

                  </div></div>

    );
  }
}

export default Wanted2;
