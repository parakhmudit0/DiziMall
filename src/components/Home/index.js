import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

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
import {getAllClient,sendContact} from '../../actions/userAction';
// import WorkingProcess from './WorkingProcess';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backToTop: false,
            selectedMenu:'home'
        }
    }
    componentDidMount() {
        this.props.getClients();
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

    onSendBtnClick = (data)=>{
        return sendContact(data).then(res=>{
            alert('send');
            return res;
        })
    }

    render() {
        return (
            <Fragment>
                <Header history={this.props.history } onMenuClick={this.onMenuClick.bind(this)} />  
                <div style={{ backgroundColor: "#e6e7ee" }}>
                    <Home />
                    <About />
                    <Services />
                    <Portfolio clientData={this.props.clientData} />
                    {/* <WorkingProcess /> */}
                    <Contact />
                    <ContactForm onSendBtnClick={this.onSendBtnClick.bind(this)} />
                </div>
                <Footer />
                <div className={`go-top ${this.state.backToTop ? ' active' : ''}`} onClick={this.scrollToTop}>
                    <BiUpArrowAlt />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        loading: _.get(state, ['user', 'clientLoading'], false),
        clientData: _.get(state, ['user', 'clientData','client'], []),
        error: _.get(state, ['user', 'clientError'], null),
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch,
    getClients: () => dispatch(getAllClient()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);