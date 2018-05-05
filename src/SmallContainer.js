//Yomna Mansour
import React, {Component} from 'react';
//import './Style.css'

export default class SmallContainer extends Component{
    render(){
        return(
            <div className="small-container">
                    <div id="overview">
                        <p className="headline">OVERVIEW</p>
                        <p className="description">Primary goal is to obtain and distribute secrete intelligence about capabilities, intensions and activities of individualsor organisations outside Australia's  interests and the well-being of its citizens.</p>
                        <button className="more">MORE</button>
                    </div>
                    <div id="mission">
                        <p className="headline">MISSION, VALUES & ETHICS</p>
                        <p className="description">The Ausralian Secrete intelligence service (ASIS) is Asustralia's overseas secret HUMINT (human intelligence)collection agency> Our mission is to protect and promote Australia's vital intersts through the provision of unique foreign intelligence services as directed by the Autralian Government.</p>
                        <button className="more">MORE</button>
                    </div>
                </div>
        );
    }
} 