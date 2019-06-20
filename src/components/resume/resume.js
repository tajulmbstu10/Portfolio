import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        let mbstu = <p>
        Mawlana Bhashani Science and Technology University (MBSTU) is the 13th government-financed public 
        university and 2nd science and technology specialized public university in Bangladesh specializing 
        in science, technology, and business. MBSTU campus is situated at Santosh, which is in the 
        southwestern part of Tangail, Bangladesh. Here Information and Communication Technology is one of the top 
        department of this university. And I have completed my B.Sc(Engg.) in ICT from MBSTU in 2018. 
        </p>
        let ghmmc = <p>
        Government Hazi Muhammad Mohsin College is a renowned government college in Chittagong, 
        Bangladesh and one of the oldest colleges in Bangladesh. I have completed my HSC (Higher
         Secondery School Certificate) with Science from this college under Chittagong Board in 2012.
         </p>
         let bbchs = <p>
         Bangladesh Bank Colony High School is a secondary school in Chittagong, Bangladesh.
          It is situated into Bangladesh Bank Colony under Double Mooring Thana at Agrabad. 
          I have completed my SSC (Secondery School Certificate) with Science from this School
           under Chittagong Board in 2010.
         </p>
        return (
            <React.Fragment>
               {/* Resume part */}

                <section id="resume">
                    {/* Education
      ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Mawlana Bhashani Science and Technology University</h3>
                                    <p className="info">B.Sc(Engg.) in ICT <span>•</span> <em className="date">2013-2016</em></p>
                                    {mbstu}
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Haji Muhammad Mohsin College</h3>
                                    <p className="info"> HSC <span>•</span> <em className="date">2012</em></p>
                                    {ghmmc}

                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Bangladesh Bank Coloney High School</h3>
                                    <p className="info">SSC<span>•</span> <em className="date">2010</em></p>
                                    {bbchs}
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                  
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>Here, some of my skills shown below:
            </p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand JavaScript" /><em>JavaScript</em></li>
                                    <li><span className="bar-expand NodeJS" /><em>NodeJS (Rest API)</em></li>
                                    <li><span className="bar-expand React" /><em>React</em></li>
                                    <li><span className="bar-expand MongoDB" /><em>MongoDB</em></li>
                                    <li><span className="bar-expand Java" /><em>Java</em></li>
                                    <li><span className="bar-expand PHP" /><em>PHP</em></li>
                                    <li><span className="bar-expand css" /><em>CSS3</em></li>
                                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                    <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                                    <li><span className="bar-expand Java" /><em>MySql</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}
