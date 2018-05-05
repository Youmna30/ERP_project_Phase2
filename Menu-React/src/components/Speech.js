import React, { Component } from 'react';

class Speech extends Component {
  render() {
    return (
      <div className="test">   <p className="dir-headline">DIRCTIRS SPEECH</p>
                  <p className="dir-paragraph1">Dirctor-General Nick Wraner gave the first ever public speech about ASIS on 19 July 2012 as a part of the Lowy Institutes Distingueshed Speakers serires.</p>
                  <p className="dir-paragraph2">Collonel Sheikh Mohammed Abdullah Al Mualla, Director of total quality at Dubai police, said The Dubai Police Commander-in-Chief's Award for Innovation and Excellence' commeties have stared evaluating and screening application submited</p>
                      <img className="c" src={require('./impage/NS2-Detailed-menu2_36.png')} alt="c"></img>
                  <h3 className="name">Name Name</h3>
                  <h3 className="title">title title title</h3>
                  <h3 className="more"><a href="#">MORE</a></h3>
          </div>
    );
  }
}

export default Speech;
