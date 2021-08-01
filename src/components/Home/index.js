import React, { Component, Fragment } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import WOW from 'wowjs';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ContactForm from './ConatctForm';
import WorkingProcess from './WorkingProcess';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backToTop: false,
            selectedMenu:'home'
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisible);
        new WOW.WOW({
            mobile: false
        }).init();
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
                <Header history={this.props.history } onMenuClick={this.onMenuClick.bind(this)} />  
                <div style={{ backgroundColor: "#e6e7ee" }}>
                    <Home />
                    <About />
                    <Services />
                    <Portfolio />
                    <WorkingProcess />
                    <Contact />
                    <ContactForm />
                </div>
                <Footer />
                <div className={`go-top ${this.state.backToTop ? ' active' : ''}`} onClick={this.scrollToTop}>
                    <BiUpArrowAlt />
                </div>
            </Fragment>
        )
    }
}

export default HomeContainer