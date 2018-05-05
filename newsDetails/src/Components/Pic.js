import React, { Component } from 'react';

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
         <a href="#" class="menucomp"> WHO WE ARE </a>
         <a href="#" class="menucomp"> WHAT WE DO </a>
         <div className="dropdown">
           <a href="#" class="menucomp"> NEWS </a>
           <div className="dropdownlist">
             <a href="#" class="dropcont"  > PUBLICATIONS </a>
             <a href="#" class="dropevent"> EVENTS </a>
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
