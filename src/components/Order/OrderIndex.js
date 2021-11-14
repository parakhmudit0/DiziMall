
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getUserDetail } from '../../actions/userAction';
import Advertisments from '../Common/CommonAdvertisments';
import About from '../Common/CommonAbout';
import Product from './OrderProduct';
import Footer from '../Common/CommonFooter';
import Contact from '../Common/CommonContact';
import { BiUpArrowAlt } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ViewMoreOrder from './ViewMoreOrder';
import storage from '../../services/storage';


class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backToTop: false,
            isShowViewMore: false,
            cartItems: {}
        }
        this.changeViewMore = this.changeViewMore.bind(this);
    }
    componentDidMount() {
        this.props.getDetail();
        window.addEventListener('scroll', this.toggleVisible);
    }

    addToCart = (id) => {
        let tempCartItems = [];
        let cartItems = storage.get('CART_DATA');
        if (cartItems) {
            tempCartItems = [...cartItems];
            const index = tempCartItems.findIndex(a => a.id === id);
            const selectedItem = tempCartItems[index];
            if (index !== -1) {
                tempCartItems[index]['qty'] = selectedItem['qty'] + 1;
            }
            else {
                tempCartItems.push({ id, qty: 1 });
            }
        }
        else {
            tempCartItems.push({ id, qty: 1 });
        }
        storage.remove('CART_DATA');
        storage.set('CART_DATA', tempCartItems);
    }

    removeFromCart = (id) => {
        let tempCartItems = [];
        let cartItems = storage.get('CART_DATA');
        if (cartItems) {
            tempCartItems = [...cartItems];
            const index = tempCartItems.findIndex(a => a.id === id);
            const selectedItem = tempCartItems[index];
            if (selectedItem) {
                if (selectedItem.qty === 1)
                    tempCartItems.splice(index, 1);
                else
                    tempCartItems[index]['qty'] = selectedItem['qty'] - 1;
            }

        }
        storage.remove('CART_DATA');
        storage.set('CART_DATA', tempCartItems);
    }

    totalCartItems = () => {
        const cartItems = storage.get('CART_DATA');
        return cartItems ? cartItems.length : 0;
    }

    changeViewMore = (categoryName) => {
        this.setState({ isShowViewMore: categoryName }, () => {
            this.scrollToTop();
        })
    }

    changeViewMoreToNormal = (view) => {
        this.setState({ isShowViewMore: false }, () => {
            document.getElementById(view).scrollIntoView();
        })
    }


    onMenuClick = (view) => {
        document.getElementById(view).scrollIntoView();
    }

    toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600) {
            this.setState({ backToTop: true })
        }
        else if (scrolled <= 600) {
            this.setState({ backToTop: false })
        }
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    render() {
        const { data } = this.props;
        return (
            !_.isEmpty(data) ?
                <Fragment>
                    <div className="navbar-area navbar-style-two">
                        <div className="dibiz-nav">
                            <div className="container">
                                <Navbar expand="md">
                                    <Navbar.Brand >
                                        <img src={_.get(data, ['client', '0', 'profile_image'], '')} alt="logo" style={{ height: 50 }} />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav>
                                            <Nav.Item>
                                                <span onClick={() => this.onMenuClick('home')} className="nav-link active">Home </span>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <span onClick={() => this.onMenuClick('about')} className="nav-link">About </span>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <span onClick={() => this.onMenuClick('products')} className="nav-link">Product </span>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <span onClick={() => this.onMenuClick('Contact')} className="nav-link">Contact </span>
                                            </Nav.Item>
                                        </Nav>
                                    </Navbar.Collapse>
                                    <div className="others-option d-flex align-items-center">
                                        <div className="option-item">
                                            <div className="cart-btn">
                                                <span className="cart-btn-span">
                                                    <AiOutlineShoppingCart />
                                                    <span>{this.totalCartItems()}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Navbar>

                            </div>
                        </div>

                    </div>
                    <div>
                        {this.state.isShowViewMore &&
                            <ViewMoreOrder
                                categories={_.get(data, ['category'], [])}
                                products={_.get(data, ['product'])}
                                changeViewMore={this.changeViewMore}
                                isShowViewMore={this.state.isShowViewMore}
                                changeViewMoreToNormal={this.changeViewMoreToNormal.bind(this)}
                                addToCart={this.addToCart.bind(this)}
                            />
                        }
                        {!this.state.isShowViewMore &&
                            <Fragment>
                                <Advertisments
                                    advertisement={_.get(data, ['advertisement'], [])}
                                />

                                <About
                                    banner={_.get(data, ['client', '0', 'banner'], '')}
                                    text={_.get(data, ['client', '0', 'about'], '')}
                                />

                                <Product
                                    categories={_.get(data, ['category'], [])}
                                    products={_.get(data, ['product'])}
                                    changeViewMore={this.changeViewMore}
                                    addToCart={this.addToCart.bind(this)}

                                />

                                <Contact
                                    address={_.get(data, ['client', '0', 'address'], '')}
                                    mobileNumber={_.get(data, ['client', '0', 'mobile_number'], '')}
                                    email={_.get(data, ['client', '0', 'email'], '')}
                                    facebookLink={_.get(data, ['client', '0', 'facebook_link'], '')}
                                    instagramLink={_.get(data, ['client', '0', 'instagram_link'], '')}
                                />
                            </Fragment>
                        }
                    </div>
                    <Footer
                        onMenuClick={this.onMenuClick.bind(this)}
                    />
                    <div className={`go-top ${this.state.backToTop ? ' active' : ''}`} onClick={this.scrollToTop}>
                        <BiUpArrowAlt />
                    </div>
                </Fragment> :
                <div />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        loading: _.get(state, ['user', 'loading'], false),
        data: _.get(state, ['user', 'data'], {}),
        error: _.get(state, ['user', 'error'], null),
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch,
    getDetail: () => dispatch(getUserDetail()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Inquiry);
