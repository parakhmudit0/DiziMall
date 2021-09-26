
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import _ from 'lodash';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Home extends Component {

    redirectToLink = (url)=>{
        window.open(url,'_blank');
    }

    render() {
        const {advertisement} =this.props;
        return (
            <div id="home">
                <OwlCarousel items={1}
                    className="owl-theme home-slides-two"
                    loop
                    nav
                    dots={false}
                    autoplayHoverPause
                    autoplay={true}
                    animateOut="fadeOut"
                    animateIn="fadeIn"
                    navText={[
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M15 4l-8 8l8 8" stroke="#9b9dac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M8 4l8 8l-8 8" stroke="#9b9dac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
                    ]}
                    >
                        {advertisement.map(adv=>{
                        return <div className="banner-section" onClick={()=>this.redirectToLink(_.get(adv,'redirect_url',''))} >
                        <div className="container-fluid p-0">
                            <div className="home-content">
                                <img src={_.get(adv,'image_url','')} alt="tanvee banner" />
                            </div>
                        </div>
                    </div>
                        })}
                </OwlCarousel>
                </div>
        )
    }
}

export default Home;
