
import React, { Component } from 'react';
import finalDiziLogo3 from '../../assets/img/final-dizi-logo3.png'
import miBAnner from '../../assets/img/client/mi-banner.png'
import tanveeeBanner from '../../assets/img/client/tanvee-banner.png'
import aboutimg2 from '../../assets/img/about-img2.png'
import finalDiziLogoWhite from '../../assets/img/final-dizi-logo-white.png';
import '../../assets/css/style.css';
class Footer extends Component {
  render() {

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="index-3.html" className="logo">
                                <img src={finalDiziLogoWhite} alt="logo" style={{height:60}}  />
                            </a>
                            <p>APANA DIZI MALL The name tells us all about who we are and what our mission is. 
                                We are a digital catalog manufacturer providing services to those who want to be digital but with a 
                                low budget</p>

                            <ul className="social-link">
                                <li><a href="https://www.facebook.com/Dhaniksha-Solution-101718748383390/" className="d-block" target="_blank"><i className="bx bxl-facebook"></i></a></li>
                                <li><a href="https://instagram.com/dhaniksha_solution?igshid=1tlq1f1i7txjr" className="d-block" target="_blank"><i className="bx bxl-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#Services">Services</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li><i className='bx bx-map'></i>New Line Gangashahar, Bikaner, Rajasthan</li>
                                <li><i className='bx bx-phone-call'></i><a href="tel:+7014025587">7014025587</a></li>
                                <li><i className='bx bx-envelope'></i><a href="mailto:dhanikshasolution@gmail.com">dhanikshasolution@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <p><i className='bx bx-copyright'></i>2020 <strong>Apna Dizi Mall</strong> is Proudly Powered by <a target="_blank" href="https://envytheme.com/">Dhaniksha Solution</a></p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer;
