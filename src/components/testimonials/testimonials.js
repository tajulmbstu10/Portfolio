import React, { Component } from 'react';
export default class Testimonials extends Component {
    render() {
        let testimonialone = <p>This  is  to  certify  that Md. Tajul Islam has completed 
                                Top-up IT Training, in the month of September 2017 conducted 
                                by Ernst and Young LLP, India under Leveraging ICT for Growth,
                                employment and Governance (LICT) Project of Bangladesh Computer 
                                Council (BCC), ICT Division, People's Republic of Java Bangladesh 
                                on  Java under NASSCOM IT-ITES Sector Skill Council (SSC) Certification. 
                                The program is certified by George Washington University, USA.
                            </p>
        let cite1           = <cite>Project Director
                                <div>Leveraging ICT for Growth </div>
                                <div>Employment and Governance project</div>
                             </cite>                    
       
       let testimonialtwo = <p>This is certify that Md. Tajul Islam of Governnment Hazi Mohammad 
                                Mohsin College, participated in the Preliminary Round of "4th 
                                Bangladesh Chemistry Olympiad" Organized bu Bangladesh Chemical
                                Socity on June 10, 2011.</p>  
        
        let cite2           = <cite>Prof. Dr. Md. Monimul Haque
                                <div>Convener </div>
                                <div>4th Bangladesh Chemistry Olympiad</div>   
                            </cite>                                  
        
        
        let testimonialthree= <p>Scout Md. Tajul Islam from Bangladesh Bank Coloney Scout Group, 
                                Chattogram successfully participated in the COMDECA held on 03-07
                                March 2007 at Cox's Bazar. </p> 
        
        let cite3           = <cite>Mihir kanti Mozumder
                                <div>Chairman </div>
                                <div>COMDECA Organizing Commitee</div>   
                            </cite>                           
        let testimonialfour= <p> সানন্দে ঘোষণা করা যাচ্ছে যে, বাংলাদেশ ব্যাংক কলোনি হাই স্কুলের নবম-(ক) শ্রেণির 
                                মোঃ তাজুল ইসলাম ২৭-০২-০৮ ইং তারিখে অনুষ্ঠিত স্কুলের ২০০৮ সনের বার্ষিক ক্রীড়া প্রতিযোগিতায় 
                                তিন পায়ে দৌড়ে প্রথম স্থান অধিকারের গর্ব অর্জন করে। <div>আমরা তাহার সার্বিক সাফল্য কামনা করছি। </div>
                            </p>
        let cite4           = <cite>নাসির উদ্দিন আহমদ 
                                <div>  প্রধান শিক্ষক </div>
                                <div>বাংলাদেশ ব্যাংক কলোনি হাই স্কুল</div>   
                                <div>আগ্রাবাদ, চট্টগ্রাম</div>
                                </cite>    
        let testimonialfive= <p>Md. Tajul Islam, Successfully participated in the 6th National Cub Camporee held 
                                at the National Scout Training Centre, Mouchak, Gazipur From 25 to 30 December,2004.
                             </p>      
        let cite5           = <cite>Chairman
                                <div> Camporee Organizing Committee </div>
                                </cite>                    
        return (
            <React.Fragment>
                {/* Testimonials section */}
                
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>User Testimonials</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        {/* 1st slide */}
                                        <li>
                                            <blockquote>
                                                {testimonialone}
                                                {cite1}
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        {/* 2nd slide */}
                                        <li>
                                            <blockquote>
                                                {testimonialtwo}
                                                {cite2}
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        {/* 3rd slide */}
                                        <li>
                                            <blockquote>
                                                {testimonialthree}
                                                {cite3}
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        {/* 4th slide */}
                                        <li>
                                            <blockquote>
                                                {testimonialfour}
                                                {cite4 }
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        {/* 5th slide */}
                                        <li>
                                            <blockquote>
                                                {testimonialfive}
                                                {cite5 }
                                            </blockquote>
                                        </li> {/* slide ends */}
                                    </ul>
                                </div> {/* div.flexslider ends */}
                            </div> {/* div.flex-container ends */}
                        </div> {/* row ends */}
                    </div>  {/* text-container ends */}
                </section>
            </React.Fragment>
        );
    }
}