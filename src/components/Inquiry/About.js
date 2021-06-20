
import React, { Component } from 'react';
import aboutimg2 from '../../assets/img/about-img2.png'
class About extends Component {
  render() {
    return (
            <section className="about-area ptb-70 bg-f9f9f9" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src={aboutimg2} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="text">
                                    {/* <!-- <span className="sub-title"></span> --> */}
                                    <h2>About Us</h2>
                                    <p> Hello and Welcome to <span className="color-blue">'Apna Dizi Mall'</span>. We are so glad you are here
                                        We are here with a simple solution for all small businesses in the city: <br/>
                                        How do I extend my business? <br/>
                                        or <br/>
                                        How do I reach out to more customers? <br/>
                                        Simple answer is Go online!  That’s where your customers are spending a whole lot of their time. <br/>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
  }
}

export default About;
