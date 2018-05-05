import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';


class PublicationsContent extends Component {
  render() {
    return (
      <div className="PublicationsContent">
      <main>
       <section>
       <div className="publication-content">

                  <article>
                      <h1>PUBLICATION</h1>
                      <p><span>19 July 2012</span></p>
                      <div className="mark">
                      </div>
                      <div className="details">
                          <p>
                              The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads the DGSE to constantly adapt its capabilities to keep up with the ever-change diversity of terrorist operation methods,
                          </p>
                      </div>
                      <div className="download">
                          <i className="fa fa-file-pdf-o icon"></i>
                          <button><a href="#">Download PDF</a></button>
                      </div>
              </article>
          </div>
          <div className="photo">
              <img src={require("./imgs/square.jpg")} width="310" height="255"></img>
          </div>
          </section>
      <section>
          <div className="publication-content">
                  <article>
                      <h1>PUBLICATION</h1>
                      <p><span>19 July 2012</span></p>
                      <div className="mark">
                      </div>
                      <div className="details">
                          <p>
                              The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads the DGSE to constantly adapt its capabilities to keep up with the ever-change diversity of terrorist operation methods,
                          </p>
                      </div>
                      <div className="download">
                          <i className="fa fa-file-pdf-o icon"></i>
                          <button><a href="#">Download PDF</a></button>
                      </div>
              </article>
          </div>
          <div className="photo">
          <img src={require("./imgs/square.jpg")} width="310" height="255"></img>
          </div>
       </section>
      <section>
          <div className="publication-content">
                  <article>
                      <h1>PUBLICATION</h1>
                      <p><span>19 July 2012</span></p>
                      <div className="mark">
                      </div>
                      <div className="details">
                          <p>
                              The challenge represented by the fight against terrorism, considered to be a real strategic threat, leads the DGSE to constantly adapt its capabilities to keep up with the ever-change diversity of terrorist operation methods,
                          </p>
                      </div>
                      <div className="download">
                          <i className="fa fa-file-pdf-o icon"></i>
                          <button><a href="#">Download PDF</a></button>
                      </div>
              </article>
          </div>
          <div className="photo">
          <img src={require("./imgs/square.jpg")} width="310" height="255"></img>
          </div>
       </section>
          <button className="view-more"><a href="#">VIEW MORE</a></button>
      </main>
      </div>

    );
  }
}

export default PublicationsContent;
