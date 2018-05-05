import React, { Component } from 'react';
//import logo from './logo.svg';
//import styles from './Style.css';
//import MainContainer from './MainContainer';
//import OverviewMission from './OverviewMission';
//import DirectortSpeech from './DirectorySpeech';
//import Footer from './Footer';
import Root from './Root';
import Search from './Search';
import History from './History';
import MenuSara from './MenuSara';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                        <div>
                            <Route path={"/"} exact component={Root}/>
                            <Route path={"/search"} exact component={Search}/>
                            <Route path={"/menu"} exact component={MenuSara}/>
                            <Route path={"/history"} exact component={History}/>
                            
                        </div>
             </BrowserRouter>
    );
  }
}

export default App;
