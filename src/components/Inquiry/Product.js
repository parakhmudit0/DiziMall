
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import choco_x_tasty from '../../assets/img/category/CHOCO-X-TASY.jpg';
import  Contact from '../../assets/img/contact.png';
import C01 from '../../assets/img/category/01.jpg'
import {BiRightArrowAlt} from 'react-icons/bi'

class Product extends Component {
    render() {

        return (
            <div id="products">
                <section className="portfolio-area bg-ffffff pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Brands</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <OwlCarousel
                            margin={30}
                            responsive={{
                                0: {
                                    items: 2,
                                },
                                576: {
                                    items: 2,
                                },
                                768: {
                                    items: 3,
                                },
                                992: {
                                    items: 4,
                                },
                                1200: {
                                    items: 6,
                                }
                            }}
                            className="portfolio-slides owl-carousel owl-theme"
                            loop
                            nav={false}
                            dots={false}
                            autoHeight={true}
                            autoplayHoverPause
                            autoplay
                            animateOut="fadeOut"
                            animateIn="fadeIn"
                            navText={[
                                "<i class='bx bx-chevron-left' />",
                                "<i class='bx bx-chevron-right' />"
                            ]}
                        >
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={C01} alt="c01" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Brand Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt />
                                    </a>
                                </div>
                            </div>
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={choco_x_tasty} alt="choco" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Brand Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt /></a>
                                </div>
                            </div>
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={choco_x_tasty} alt="link" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Brand Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt /></a>
                                </div>
                            </div>
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={choco_x_tasty} alt="link" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Brand Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt /></a>
                                </div>
                            </div>
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={choco_x_tasty} alt="link" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Brand Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt /></a>
                                </div>
                            </div>
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={choco_x_tasty} alt="link" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Brand Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt /></a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>

                <section className="portfolio-area bg-f9f9f9 pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Categories</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <OwlCarousel
                            margin={30}
                            responsive={{
                                0: {
                                    items: 2,
                                },
                                576: {
                                    items: 2,
                                },
                                768: {
                                    items: 3,
                                },
                                992: {
                                    items: 4,
                                },
                                1200: {
                                    items: 6,
                                }
                            }}
                            className="portfolio-slides owl-carousel owl-theme"
                            loop
                            nav={false}
                            dots={false}
                            autoHeight={true}
                            autoplayHoverPause
                            autoplay
                            animateOut="fadeOut"
                            animateIn="fadeIn"
                        >
                            <div className="single-portfolio-item">
                                <a href="category.html" className="image d-block">
                                    <img src={choco_x_tasty} alt="link" />
                                </a>

                                <div className="content">
                                    <h3><a className="category-name" href="category.html">Category Name</a></h3>
                                    <a href="category.html" className="link-btn">
                                        <BiRightArrowAlt /></a>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </section>


                <section className="portfolio-area section-title-center bg-ffffff pt-100 pb-70">
                    <div className="container">
                        <div className="product-title">
                            <h2>Health <span className="sub-title"><a href=""> (view more) </a></span></h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="row align-items-center product-box">
                                    <div className="col-lg-12 col-4">
                                        <div className="products-details-image">
                                            <a href="#" data-fancybox="gallery">
                                                <img src={Contact} alt="image" />
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
                                            <div className="products-add-to-cart">
                                                <button type="submit" className="default-btn">Inquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="row align-items-center product-box">
                                    <div className="col-lg-12 col-4">
                                        <div className="products-details-image">
                                            <a href="#" data-fancybox="gallery">
                                                <img src={Contact} alt="image" />
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
                                            <div className="products-add-to-cart">
                                                <button type="submit" className="default-btn">Inquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>


                <section className="portfolio-area section-title-center bg-ffffff pt-100 pb-70">
                    <div className="container">
                        <div className="product-title">
                            <h2>Health <span className="sub-title"><a href=""> (view more) </a></span></h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="row align-items-center product-box">
                                    <div className="col-lg-12 col-4">
                                        <div className="products-details-image">
                                            <a href="#" data-fancybox="gallery">
                                                <img src={Contact} alt="image" />
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
                                            <div className="products-add-to-cart">
                                                <button type="submit" className="default-btn">Inquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="row align-items-center product-box">
                                    <div className="col-lg-12 col-4">
                                        <div className="products-details-image">
                                            <a href="#" data-fancybox="gallery">
                                                <img src={Contact} alt="image" />
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
                                            <div className="products-add-to-cart">
                                                <button type="submit" className="default-btn">Inquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="row align-items-center product-box">
                                    <div className="col-lg-12 col-4">
                                        <div className="products-details-image">
                                            <a href="#" data-fancybox="gallery">
                                                <img src={Contact} alt="link" />
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
                                            <div className="products-add-to-cart">
                                                <button type="submit" className="default-btn">Inquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Product;
