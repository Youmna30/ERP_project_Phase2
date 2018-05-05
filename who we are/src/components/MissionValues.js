import React, { Component } from 'react';
const style1={background:' #ffffff', padding: '4%',marginTop:'2%',
marginBottom: '2%',width:'44cm',height:'10cm',marginLeft:'11cm'
,marginRigth:'11cm' };
class MissionValues extends Component {
  render() {
    return (
                      <div className="row " style={style1}>

                          <div className="title">

                              Mission and Values

                          </div>


                          <br/>

                          <p className="content">

                              The Australian Secret Intelligence Service (ASIS) is Australias overseas secret HUMINT (human intelligence)
                              <br/>collection agency. Our mission is to protect and promote Australias vital interests through the provision of
                              <br/> unique foreign intelligence services as directed by the Australian Government.

                          </p>

                          <br/>

                          <p className="content">

                              ASIS has a distinctive culture and esprit de corps and we embrace the Australian Public Service (APS) Values,
                              <br/> together with a number of ASIS-specific values. In ASIS, we value diversity, embrace change and encourage new
                              <br/> and innovative ideas. We have a strong sense of national pride and loyalty to the Service and to each other.<br/>

      Our core values are:<br/>

                          </p>



                      </div>


    );
  }
}

export default MissionValues;
