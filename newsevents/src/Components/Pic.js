import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Pic extends Component {
  render() {
    return (
      <div className="Pic">
      <div className="img1">
  <img  src={require("./images/Headerlogo1.png")} alt="headerlogo"></img>
</div>
<div className="img2">
  <img  src={require("./images/headerlog2.png")} alt="headerlogo"></img>
    <div className="redbar">
      <a href="#" className="	fa fa-angle-right"></a><a href="#" className="fa fa-angle-left"></a>
    </div>
    <div className= "bar">
      <p> The Australian Secret Intelligence Service (ASIS) is Australia's overseas secret HUMINT (human</p>
    </div>

    <div className="menu">
      <a href="#" className="menucompwho"> WHO WE ARE </a>
      <a href="#" className="menucomp"> WHAT WE DO </a>
      <div className="dropdown">
        <a href="#" className="menucomp"> NEWS </a>
        <div className="dropdownlist">
          <a href="#" className="dropcont"  > PUBLICATIONS </a>
          <a href="#" className="dropevent"> EVENTS </a>
        </div>
      </div>
    </div>
    </div>
		<div className="img3">
			<img  src={require("./images/headerlogo.png")} alt="headerlogo"></img>
		</div>
      </div>
    );
  }
}

export default Pic;
