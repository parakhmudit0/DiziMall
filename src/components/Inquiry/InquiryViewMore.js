
import React, { Component } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import _ from 'lodash';
import Product from './InquiryProduct';

class ViewMore extends Component {

    productList = () => {
        const products = _.get(this.props, 'products');
        const isShowViewMore = _.get(this.props, 'isShowViewMore');
        return _.filter(products, obj => obj.category_name === isShowViewMore)
    }

    render() {
        const { isShowViewMore } = this.props;
        const productList = this.productList();


        return (
            <div>
                <section className="portfolio-area section-title-center bg-f9f9f9 pt-100 pb-70">
                    <div className="container">

                        <div className="product-title">
                            <h2>{isShowViewMore} <span className="sub-title back">
                                <span onClick={() => this.props.changeViewMoreToNormal(isShowViewMore)}>
                                    <BiLeftArrowAlt /> Back
                                </span></span></h2>
                        </div>

                        <div className="row">
                            {_.map(productList, product => {

                                return <div className="col-lg-3 col-md-6 col-12">
                                    <div className="row align-items-center product-box">
                                        <div className="col-lg-12 col-4">
                                            <div className="products-details-image">
                                                <span >
                                                    <img src={_.get(product, 'product_image_url')} alt="contact" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-8 pl-0">
                                            <div className="products-details-desc">
                                                <h3>{_.get(product, 'name')}</h3>
                                            <span className="description">{_.get(product,'description','')}  </span>
                                                <div className="price">
                                                    <span className="old-price">{`$${_.get(product, 'product_mrp')}`}</span>&nbsp;
                                                    <span className="new-price">{`$${_.get(product, 'product_mrp')}`}</span>
                                                </div>
                                                <div className="products-add-to-cart">
                                                    <button type="submit" onClick={() => this.props.redirectToWhatsapp(_.get(product, 'name', ''))} className="default-btn">Inquiry</button>
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
