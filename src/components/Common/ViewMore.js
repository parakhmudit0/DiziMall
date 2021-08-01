
import React, { Component } from 'react';
import choco_x_tasty from '../../assets/img/category/CHOCO-X-TASY.jpg';
import  Contact from '../../assets/img/contact.png';
import C01 from '../../assets/img/category/01.jpg'
import {BiRightArrowAlt} from 'react-icons/bi';
import _ from 'lodash';

class ViewMore extends Component {
    
    render() {

        return (
<div>
            <section className="portfolio-area section-title-center bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="product-title pb-50">
                        <h2>Brand Name <span className="sub-title back">
                            <a href="menu.html"> 
                                <i className="bx bx-left-arrow-alt"></i> Back 
                            </a></span>
                        </h2>
                    </div>

                    <div className="product-title">
                        <h2>Health <span className="sub-title"></span></h2>
                    </div>

                    <div className="row">
                        {_.map(_.range(10),a=>{
                        
                       return <div className="col-lg-3 col-md-6 col-12">
                            <div className="row align-items-center product-box">
                                <div className="col-lg-12 col-4">
                                    <div className="products-details-image">
                                        <a href="assets/img/contact.png" data-fancybox="gallery">
                                            <img src="assets/img/contact.png" alt="contact" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-8 pl-0">
                                    <div className="products-details-desc">
                                        <h3>Motivational Book Cover</h3>
                                        <div className="price">
                                            <span className="old-price">$210</span>
                                            <span className="new-price">$200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    }



                    </div>
                </div>
            </section>
            
        </div>
        )
    }
}

export default ViewMore;
