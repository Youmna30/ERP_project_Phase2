//Yomna Mansour
import React, {Component} from 'react';

const cstyle1={height:'100px',background: '#ffffff'};
const cstyle2={background: '#ffffff', padding: '10%',marginTop: '5%',marginBottom: '5%'};
const cstyle3={marginLeft:'1%'};
const extraStyle={background: '#ececed', width: '100%',maxWidth: '1920px',margin: 'auto'};

export default class Content extends Component{
    render(){
        return(
            <div style={extraStyle}>
                <div className="container">
                    <div className="row"></div>
                    <div className="row " style={cstyle2}>
                        <div className="title" style={cstyle3}>
                            History
                        </div>
                        <br/>
                        <p className="content">
                            or over twenty years, the existence of ASIS remained a secret, even from members of the Australian Government. The Service was first referred to in Parliament in 1975 and was not publicly acknowledged until 1977. The then Prime Minister, Malcolm Fraser, informed Parliament that "ASIS's capacity to serve Australia's national interest will continue to depend on its activities being fully protected by secrecy". This statement has been reaffirmed by successive Governments. Today, ASIS is a part of the Foreign Affairs portfolio and is responsible to the Minister for Foreign Affairs.
                            <br/>
                            Based on a recommendation by a Commission of Inquiry in 1995, the Intelligence Services Act 2001 ('the Act') came into being in 2001. It provides a legislative framework for ASIS and made public for the first time, our functions and limits.
                            <br/>
                            According to the Act, our primary role is to produce secret intelligence from human sources overseas. Additional tasks can be added to the mandate, as directed by the Government.
                        </p>
                    </div>
                    <div className="row"></div>
            </div>
        </div>
        );
    }
}