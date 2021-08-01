
import React, { Component, Fragment } from 'react';
import finalDiziLogo3 from '../../assets/img/final-dizi-logo3.png'
import Home from './Home';
import About from './About';
import Product from './Product';
import Footer from './Footer'
import Contact from './Contact'
import { BiUpArrowAlt } from 'react-icons/bi';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import ViewMore from '../Common/ViewMore';


class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backToTop: false,
            isShowViewMore: false
        }
        this.changeViewMore=this.changeViewMore.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisible);
    }

    changeViewMore = (isShowViewMore) =>{
        this.setState({isShowViewMore})
    }

    onMenuClick = (view) =>{
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

        return (
            <Fragment>
                <div className="navbar-area navbar-style-two">

                    <div className="dibiz-nav">
                        <div className="container">
                            <Navbar expand="md">
                                <Navbar.Brand href="#home">
                                    <img src={finalDiziLogo3} alt="logo" style={{ height: 50 }} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Nav.Item>

                                            <span onClick={()=>this.onMenuClick('home')} className="nav-link active">Home </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <span onClick={()=>this.onMenuClick('about')} className="nav-link">About </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <span onClick={()=>this.onMenuClick('products')} className="nav-link">Product </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <span onClick={()=>this.onMenuClick('Contact')} className="nav-link">Contact </span>

                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </div>
                    </div>


                </div>
                <div>
                    {this.state.isShowViewMore && <ViewMore />}
                    {!this.state.isShowViewMore &&
                        <Fragment>
                            <Home />
                            <About />
                            <Product changeViewMore={this.changeViewMore}/>
                            <Contact />
                        </Fragment>
                    }
                </div>
                <Footer />
                <div className={`go-top ${this.state.backToTop ? ' active' : ''}`} onClick={this.scrollToTop}>
                    <BiUpArrowAlt />
                </div>
            </Fragment>
        )
    }
}

export default Inquiry;
