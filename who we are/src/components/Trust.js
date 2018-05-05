import React, { Component } from 'react';

class Trust extends Component {
  render() {
    return (
      <div className="row " style={{marginTop: '1%' ,marginBottom: '1%',marginLeft:'11cm',width:'21cm',height:'17cm',float:'left'}}>

                         <div className="col" style={{background: '#ffffff',padding:' 4%', marginRight:'1%',float:'left'}}>

                             <div className="title" >

                                 Trust and Responsibility

                             </div>

                             <br/><br/><br/>



                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%'}}/>

                             We strive for excellence in all that we do.

                             </p>

                             <br/><br/><br/>

                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%'}}/>

                                  We are responsive and dedicated to
                                  <br/>
                                  achieving results that make a difference to
                                  <br/>Australia and its people.

                             </p>
                              <br/><br/>
                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%'} }/>

                                We believe that the principles of security are
                                <br/>fundamental to everything we do.

                             </p>
                            <br/><br/><br/>
                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%' }}/>

                                 We are proud of our achievements.

                             </p>

                         </div>
                         </div>

    );
  }
}

export default Trust;
