
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BiRightArrowAlt } from 'react-icons/bi'
import _ from 'lodash';

class Product extends Component {

    getProductList = () => {
        const products = _.get(this.props, ['products']);
        let result = _.groupBy(products, a => _.get(a, ['category_name'], ''));
        return result;
    }

    renderProduct = () => {
        const productList = this.getProductList();
        const keys = Object.keys(productList);
        return _.map(keys, key => {
            const prdctObj = productList[key];
            const threePrdctObj = _.slice(prdctObj,0,4);
            return <section id={key} className="portfolio-area section-title-center bg-ffffff pt-50 pb-30">
                <div className="container">
                    <div className="product-title">
                        <h2>{key} <span className="sub-title"><span className="view-more" onClick={() => this.props.changeViewMore(key)}> (view more) </span></span></h2>
                    </div>
                    <div className="row">
                        {_.map(threePrdctObj, obj => {
                            return <div className="col-lg-3 col-md-6 col-12">
                                <div className="row align-items-center product-box">
                                    <div className="col-lg-12 col-4">
                                        <div className="products-details-image">
                                            <span>
                                                <img src={_.get(obj, 'product_image_url')} alt="prd" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-8 pl-0">
                                        <div className="products-details-desc">
                                            <h3>{_.get(obj, 'name', '')}</h3>
                                            <span className="description">{_.get(obj,'description','')}  </span>
                                            <div className="price">
                                                <span className="old-price">{`$${_.get(obj, 'product_mrp')}`}</span>&nbsp;
                                                <span className="new-price">{`$${_.get(obj, 'product_mrp')}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>

                </div>
            </section>
        })
    }

    redirectToProduct = (view) => {
        document.getElementById(view).scrollIntoView({ behavior: 'smooth' });
    }


    render() {
        const { categories } = this.props;
        return (
            <div id="products">
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
                            loop={false}
                            nav={false}
                            dots={false}
                            autoplayHoverPause
                            autoplay
                            animateOut="fadeOut"
                            animateIn="fadeIn"
                        >
                            {_.map(categories, category => {
                                return <div className="single-portfolio-item">
                                    <span className="image d-block">
                                        <img src={`https://apnadizimall.com/public/uploads/categorys/${_.get(category,'category_image_url','')}`} alt="link" />

                                    </span>

                                    <div className="content">
                                        <h3><span className="category-name" >{_.get(category, 'category_name')}</span></h3>
                                        <span className="link-btn" onClick={() => this.redirectToProduct(_.get(category, 'category_name'))} >
                                            <BiRightArrowAlt /></span>
                                    </div>
                                </div>
                            })}


                        </OwlCarousel>
                    </div>
                </section>

                {this.renderProduct()}

            </div>
        )
    }
}

export default Product;
