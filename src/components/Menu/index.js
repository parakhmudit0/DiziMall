
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

class Inquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backToTop: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisible);
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
    onMenuClick = (view) =>{
        document.getElementById(view).scrollIntoView();
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    render() {

        return (
            <Fragment>
                {/* <!-- Start Navbar Area --> */}
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
                    <Home />
                    <About />
                    <Product />
                    <Contact />
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
