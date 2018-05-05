import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div className="flogo">
  <img  src={require("./images/logo_2.jpg")} alt="logo2"></img>
</div>
<div className="first">
  <p className="firstContent"> WHO WE ARE </p><br></br>
    <p className="firstcont">

Overview<br></br><br></br>

Mission,values<br></br>
and Ethics<br></br><br></br>

History<br></br><br></br>

Director's speech
    </p>
</div>
<div className="second">
  <p className="firstContent"> WHAT WE DO </p><br></br>
  <p className="firstcont">

legislations <br></br><br></br>

Public Interest<br></br>
Disclosures<br></br><br></br>

Counter-terrorism<br></br><br></br>

Counter proliferation
  </p>
</div>
<div className="second">
  <p className="firstContent"> NEWS </p><br></br>
  <p className="firstContent">

FAQs <br></br><br></br>

CONTACT US <br></br><br></br><br></br>


<a href="#" className="fa fa-facebook"></a><a href="#" className="fa fa-twitter"></a><a href="#" className="fa fa-instagram"></a><a href="#" className="fa fa-google-plus"></a>
  </p>
</div>
      </div>
    );
  }
}

export default Footer;
