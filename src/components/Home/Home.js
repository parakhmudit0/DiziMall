import React, { Component,Fragment } from 'react';
import Banner2 from '../../assets/img/banner2.png';


class Home extends Component {
    render() {
        return (
            <div className="digital-agency-banner" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-content">
                            <span className="sub-title wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1000ms">Digital Catalog</span>
                            <h1 className="wow fadeInLeft" data-wow-delay="10ms" data-wow-duration="1000ms">Digital Catalog with Excellence Service</h1>
                            <p className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">We have providing services to those who want to be digital but within a pocket-friendlly budget.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="banner-image">
                            <img src={Banner2} alt="" className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}
export default Home