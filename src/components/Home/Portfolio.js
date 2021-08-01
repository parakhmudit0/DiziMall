import React, { Component,Fragment } from 'react';
import RakeshLogo from '../../assets/img/client/rakesh-logo.jpg';
import AnkitaLogo from '../../assets/img/client/ankita-logo.png';
import MiLogo from '../../assets/img/client/mi-logo.jpg';
import GoliLogo from '../../assets/img/client/goli-logo.jpg';

class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-area section-title-center pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Case Studies</span>
                    <h2>Check of Our Some Recent Works</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <a href="single-portfolio.html" className="image d-block">
                                <img src={RakeshLogo} alt="" />
                            </a>

                            <div className="content">
                                <h3><a href="single-portfolio.html">Health & Wellness </a></h3>
                                <span>Enquiry Catalog</span>
                                <a href="{{url('enquiry/health-wellness')}}" className="link-btn"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <a href="single-portfolio.html" className="image d-block">
                                <img src={AnkitaLogo} alt="" />
                            </a>

                            <div className="content">
                                <h3><a href="single-portfolio.html"> Ankitaa's Makeup Studio</a></h3>
                                <span>Enquiry Catalog</span>
                                <a href="{{url('enquiry/ankitaasmakeupstudio')}}" className="link-btn"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <a href="single-portfolio.html" className="image d-block">
                                <img src={MiLogo} />
                            </a>

                            <div className="content">
                                <h3><a href="single-portfolio.html">Movin'on</a></h3>
                                <span>Enquiry Catalog</span>
                                <a href="http://apnadizimall.com/enquiry/movin'on" className="link-btn"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <a href="single-portfolio.html" className="image d-block">
                                <img src={GoliLogo} alt="" />
                            </a>

                            <div className="content">
                                <h3><a href="single-portfolio.html">Goli Vada Pav</a></h3>
                                <span>Order Catalog</span>
                                <a href="{{url('order/golivadapav')}}" className="link-btn"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        )
    }

}
export default Portfolio