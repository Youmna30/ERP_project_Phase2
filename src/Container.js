//Yomna Mansour
import React, {Component} from 'react';

const Style1={paddingRight:'0%'};
    const Style2={marginTop: '2%', marginLeft: '5%'};
    const Style3={margin: '4%'};
    const Style4={marginTop: '7%',marginLeft: '2%'};
const Style5={marginTop: '5%', marginRight: '0%', paddingRight: '0%',paddingLeft:'5%'};
export default class Container extends Component{
    
    render(){
        return(
        <header id="history-header">
            <div className="container"  >
                <div className="row justify-content-between" style={Style1}>
                    <div className="col-2" style={Style2}>
                        <img src={require('./images/logo.png')} />
                    </div>
                    <div className="col-3 " style={Style5}>
                        
                            <img src={require('./images/message.png')} style={Style3}/ >
                            <img src={require('./images/search.png')} style={Style3}/ >
                            <img src={require('./images/EN+arrow.png')} style={Style3}/ >
                            <img src={require('./images/menu.png')} style={Style3}/ >
                        
                
                    </div>
                </div>
                <div className="row justify-content-center " style={Style4}>
                    <div className="col-10">
                        <img src={require('./images/history.png')} />
                    </div>
                </div>
            </div>
        </header>
        );
    }
}