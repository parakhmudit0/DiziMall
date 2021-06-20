
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import taanveeBanner from '../../assets/img/client/tanvee-banner.png'
import miBAnner from '../../assets/img/client/mi-banner.png';
class Home extends Component {
    render() {
        return (
            <div id="home">
                <OwlCarousel items={1}
                    className="owl-theme home-slides-two"
                    loop
                    nav
                    dots={false}
                    autoHeight= {true}
                    autoplayHoverPause
                    autoplay={true}
                    animateOut="fadeOut"
                    animateIn="fadeIn"
                    navText={[
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M15 4l-8 8l8 8" stroke="#9b9dac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M8 4l8 8l-8 8" stroke="#9b9dac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
                    ]}
                    >
                    <div className="banner-section" >
                        <div className="container-fluid p-0">
                            <div className="home-content">
                                <img src={taanveeBanner} alt="tanvee banner" />
                            </div>
                        </div>
                    </div>
                    <div className="banner-section" >
                        <div className="container-fluid p-0">
                            <div className="home-content">
                                <img src={miBAnner} alt="mi banner" />
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                </div>
        )
    }
}

export default Home;
