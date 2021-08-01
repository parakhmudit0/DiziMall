import React, { Component,Fragment } from 'react';
import {BiMap,BiPhoneCall} from 'react-icons/bi';
import {FaUsers} from 'react-icons/fa';

class Contact extends Component {
    render() {
        return (
            <section className="contact-info-area pt-100 pb-70" id="Contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-box">
                                        <div className="back-icon">
                                        <BiMap />
                                        </div>
                                        <div className="icon">
                                        <BiMap />
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>New Line Gangashahar, Bikaner, Rajasthan</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-box">
                                        <div className="back-icon">
                                        <BiPhoneCall />
                                        </div>
                                        <div className="icon">
                                        <BiPhoneCall />
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+7014025587">7014025587</a></p>
                                        <p>E-mail: <a href="mailto:dhanikshasolution@gmail.com">dhanikshasolution@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="contact-info-box">
                                        <div className="back-icon">
                                        <FaUsers />
                                        </div>
                                        <div className="icon">
                                        <FaUsers />
                                        </div>
                                        <h3>Social Media</h3>
                                        <div className="single-footer-widget">
                                            <ul className="social-link">
                                                <li><a href="https://www.facebook.com/Dhaniksha-Solution-101718748383390/" className="d-block" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="https://instagram.com/dhaniksha_solution?igshid=1tlq1f1i7txjr" className="d-block" target="_blank"><i className="fa fa-instagram"></i></a></li>
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
export default Contact