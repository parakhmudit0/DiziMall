import React, { Component,Fragment } from 'react';
import AboutImg2 from '../../assets/img/about-img2.png';
import {FaRocket} from 'react-icons/fa'
class About extends Component {
    render() {
        return (
            <section className="about-area ptb-70" id="about">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={AboutImg2} alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="about-content">
                                        <div className="text">
                                            <h2>About Us</h2>
                                            <p> Hello and Welcome to <span className="color-blue">'Apna Dizi Mall'</span>. We are so glad you are here
                                                We are here with a simple solution for all small businesses in the city: <br />
                                                How do I extend my business? <br />
                                                or <br />
                                                How do I reach out to more customers? <br />
                                                Simple answer is Go online!  That’s where your customers are spending a whole lot of their time. <br />

                                            </p>

                                            <h2> With us you can </h2>
                                            <ul className="features-list">
                                                <li><i className="fas fa-rocket"></i> List all your products and services at one place</li>
                                                <li><i className="fas fa-rocket"></i> Have your own Domain name and increase brand value!</li>
                                                <li><i className="fas fa-rocket"></i> Establish online presence, increase Brand awareness by being social.</li>
                                                <li><i className="fas fa-rocket"></i> Extend your reach to more number of Mobile users</li>
                                                <li><i className="fas fa-rocket"></i> Get queries directly on WhatsApp. (Yes, you can do that!)</li>
                                                <li><i className="fas fa-rocket"></i> Last but not the least, Keeps customers coming back for more</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }

}
export default About