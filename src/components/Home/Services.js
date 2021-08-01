import React, { Component,Fragment } from 'react';

class Services extends Component {
    render() {
        return (
            <section className="services-area bg-f9f9f9 pt-100 pb-70" id="Services">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Let’s Check Our Services</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="fab fa-whatsapp"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="http://apnadizimall.com/enquiry/dhaniksha-solution">Enquiry Catalog</a></h3>
                            <p>The Enquiry Catalog gives the Customer a chance to choose and find out the product of their choice. In this catalog, the customer directly connects to the seller via Whatsapp!</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="fas fa-bars"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="http://apnadizimall.com/menu/dhaniksha-solution">Menu Catalog</a></h3>
                            <p>The menu catalog specially designed for hotels, restaurants, fast food corner, fast food truck or anyone who want to display their products with help of amazing UI</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="fas fa-shopping-cart"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="http://apnadizimall.com/order/dhaniksha-solution">Order Catalog</a></h3>
                            <p>The menu catalog specially designed for hotels, restaurants, fast food corner, fast food truck or anyone who want to display their products with help of amazing UI</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }

}
export default Services