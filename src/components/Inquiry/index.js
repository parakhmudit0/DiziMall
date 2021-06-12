
import React, { Component, Fragment } from 'react';
import '../../assets/css/style.css';
import finalDiziLogo3 from '../../assets/img/final-dizi-logo3.png'
import Home from './Home';
import About from './About';
import Product from './Product';
import Footer from './Footer'
import Contact from './Contact'

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

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };
    render() {

        return (
            <Fragment>
                {/* <!-- Start Navbar Area --> */}
                <div className="navbar-area navbar-style-two">
                    <div className="dibiz-responsive-nav">
                        <div className="container">
                            <div className="dibiz-responsive-menu">
                                <div className="logo">
                                    <a href="index-3.html">
                                        <img src={finalDiziLogo3} alt="logooooo" style={{ height: 32 }} />
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="dibiz-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <a className="navbar-brand" href="index-3.html">
                                    <img src={finalDiziLogo3} alt="logo" style={{ height: 50 }} />
                                </a>

                                <div className="collapse navbar-collapse mean-menu">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><a href="#home" className="nav-link active">Home </a></li>

                                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>

                                        <li className="nav-item"><a href="#products" className="nav-link">Product</a></li>

                                        <li className="nav-item"><a href="#Contact" className="nav-link">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
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
                    <div className={`go-top ${this.state.backToTop ?' active':''}`} onClick={this.scrollToTop}>
                        <i className='bx bx-up-arrow-alt'></i>
                    </div>
            </Fragment>
        )
    }
}

export default Inquiry;
