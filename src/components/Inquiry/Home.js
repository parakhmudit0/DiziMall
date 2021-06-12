
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { FaChevronLeft,FaChevronRight} from 'react-icons/fa';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import taanveeBanner from '../../assets/img/client/tanvee-banner.png'
import miBAnner from '../../assets/img/client/mi-banner.png';
import back from '../../assets/back.svg';

import '../../assets/css/style.css';
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
                    autoPlay
                    animateOut="fadeOut"
                    animateIn="fadeIn"
                    navText={[
                       "<i class='bx bx-chevron-left' />",
                       "<i class='bx bx-chevron-right' />"
                    ]}
                    >
                    <div className="banner-section" >
                        <div className="container-fluid p-0">
                            <div className="home-content">
                                <img src={taanveeBanner} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="banner-section" >
                        <div className="container-fluid p-0">
                            <div className="home-content">
                                <img src={miBAnner} alt="image" />
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                </div>
        )
    }
}

export default Home;
