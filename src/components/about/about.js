import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
          
      {/* About Section */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p className="text-justify">
            I have completed B.Sc. (Engg.) degree in ICT from the Department of ICT, MBSTU in 2018. 
            To pursue a challenging career and be a part of a progressive organization that gives a 
            scope to enhance my knowledge and utilizing my skills towards the growth of the organization.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2 >Contact Details</h2>
                <p className="address">
                  <span>Md. Tajul Islam</span><br />
                  <span>Al-Marwah Tower<br />
                  New Shohid Lane, Akbershah
                  </span><br />
                  <span>Chattogram</span><br />
                  <span>tajulmbstu@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}