import React , { Component } from 'react' ;
import "./style.css" ;

import dash from './images/dash.png' ;
import city from './images/city.png' ;

class Middle2 extends Component {
  render() {
    return (
      <div
        className="row "
        style={{
          background: "#ffffff",
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <div
          className="col-7"
          style={{
            padding: "4%",
            paddingLeft: "7%",
            paddingRight: "5%"
          }}
        >
          <div
            className="title"
            style={{
              marginLeft: "-1%"
            }}
          >
            Excellence in Service
          </div>
          <p
            className="content"
            style={{
              width: "100%",
              marginTop: "2%"
            }}
          >
            <img
              src={dash}
              style={{
                marginRight: "3%"
              }}
            />
            The challenge represented by the fight against terrorism, considered
            to be a real strategic threat, leads the DGSE to constantly adapt
            its capabilities to keep up with the ever-changing diversity of
            terrorist operating methods, the extension of Jihad networks, a
            complex and evolving phenomenon and the extent and multiplication of
            terrorist actions.
          </p>
        </div>
        <div
          className="col-5"
          style={{
            padding: "0%",
            backgroundImage: 'url('+{city}+')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right"
          }}
        />
      </div>
    );
  }
}

export default Middle2;
