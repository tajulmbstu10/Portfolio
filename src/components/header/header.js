import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        let me = <p3>Have sound knowledge and experience with Java, PHP, JavaScript, HTML5, 
            CSS3, C, MySql and Oracle database. Also worked with React.js, Bootstrap, SASS, 
            LESS and Stylus.</p3>;
        return (
            <React.Fragment>
                {/*generated code*/}

                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I am {resumeData.name}</h1>
                            <h3>{resumeData.role}{resumeData.roleDescription}
                            </h3>
                            <hr />
                            <h3>{me} <p3>Let's</p3> <a className="smoothscroll" href="#about">start scrolling </a>
                            <p3>and learn more </p3><a className="smoothscroll" href="#about">about me</a>. 
                            </h3>
                            <hr />
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                                <li><a href="#"><i className="fa fa-skype" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}