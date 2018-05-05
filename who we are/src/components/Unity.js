import React, { Component } from 'react';

class Unity extends Component {
  render() {
    return (
      <div className="row " style={{marginTop: '2%' ,marginBottom: '1%',marginLeft:'37cm',width:'20cm',height:'17cm'}}>

                         <div className="col" style={{background: '#ffffff',padding:' 4%', marginRight:'1%'}}>

                             <div className="title" >

                                 Courage, Unity and Loyalty

                             </div>

                             <br/><br/><br/>



                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%'}}/>

                            We embrace diversity and use it to champion <br/>new ideas.

                             </p>

                             <br/><br/><br/>

                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%'}}/>

                                 We are forward thinkers, optimistic about the <br/>future and undaunted by change.

                             </p>
                              <br/><br/>
                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%'} }/>

                                Whatever the problem or issue, we will find a<br/> solution.

                             </p>
                            <br/><br/><br/>
                             <p className="content" style={{width: '100%'}}>

                                 <img src={require('./images/dash.png')} style={{marginRight: '5%' }}/>

                                  We believe in the application of intelligence<br/> and reason to improve the way we do our <br/>work.

                             </p>

                         </div>
                         </div>
    );
  }
}

export default Unity;
