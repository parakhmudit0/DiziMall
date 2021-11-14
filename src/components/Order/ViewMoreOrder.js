
import React, { Component } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import _ from 'lodash';

class ViewMoreOrder extends Component {

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
                                                <div className="price">
                                                    <span className="old-price">{`$${_.get(product, 'product_mrp')}`}</span>
                                                    <span className="new-price">{`$${_.get(product, 'product_mrp')}`}</span>
                                                </div>
                                                <div className="products-add-to-cart">
                                                    <button type="submit" onClick={() => this.props.ViewMoreOrder(_.get(product, 'product_unique_id', ''))} className="default-btn">Add To Cart</button>
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

export default ViewMoreOrder;
