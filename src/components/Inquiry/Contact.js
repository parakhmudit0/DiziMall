
import React, { Component } from 'react';
class Contact extends Component {
  render() {

    return (
        <section className="contact-info-area pt-100 pb-70" id="Contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="contact-info-box">
                        <div className="back-icon">
                            <i className="bx bx-map"></i>
                        </div>
                        <div className="icon">
                            <i className="bx bx-map"></i>
                        </div>
                        <h3>Our Address</h3>
                        <p>New Line Gangashahar, Bikaner, Rajasthan</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="contact-info-box">
                        <div className="back-icon">
                            <i className="bx bx-phone-call"></i>
                        </div>
                        <div className="icon">
                            <i className="bx bx-phone-call"></i>
                        </div>
                        <h3>Contact</h3>
                        <p>Mobile: <a href="tel:+7014025587">7014025587</a></p>
                        <p>E-mail: <a href="mailto:dhanikshasolution@gmail.com">dhanikshasolution@gmail.com</a></p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="contact-info-box">
                        <div className="back-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Social Media</h3>
                        <div className="single-footer-widget">
                            <ul className="social-link">
                                <li><a href="https://www.facebook.com/Dhaniksha-Solution-101718748383390/" className="d-block" target="_blank"><i className="bx bxl-facebook"></i></a></li>
                                <li><a href="https://instagram.com/dhaniksha_solution?igshid=1tlq1f1i7txjr" className="d-block" target="_blank"><i className="bx bxl-instagram"></i></a></li>
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

export default Contact;
