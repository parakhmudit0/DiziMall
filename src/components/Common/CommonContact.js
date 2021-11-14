
import React, { Component } from 'react';
import _ from 'lodash';
import {BiMap,BiPhoneCall} from 'react-icons/bi';
import {FaUsers} from 'react-icons/fa';
class Contact extends Component {
  render() {

    return (
        <section className="contact-info-area pt-100 pb-70" id="Contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="contact-info-box">
                        <div className="back-icon">
                        <BiMap />
                        </div>
                        <div className="icon">
                            <BiMap />
                        </div>
                        <h3>Our Address</h3>
                        <p>{_.get(this.props,['address'],'')}</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="contact-info-box">
                        <div className="back-icon">
                           <BiPhoneCall />
                        </div>
                        <div className="icon">
                            <BiPhoneCall />
                        </div>
                        <h3>Contact</h3>
                        <p>Mobile: <a href={`tel:+${_.get(this.props,['mobileNumber'],'')}`}>{_.get(this.props,['mobileNumber'],'')}</a></p>
                        <p>E-mail: <a href={`mailto:${_.get(this.props,['email'],'')}`}>{_.get(this.props,['email'],'')}</a></p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="contact-info-box">
                        <div className="back-icon">
                           <FaUsers />
                        </div>
                        <div className="icon">
                            <FaUsers />
                        </div>
                        <h3>Social Media</h3>
                        <div className="single-footer-widget">
                            <ul className="social-link">
                                <li><a href={_.get(this.props,['facebookLink'],'')} className="d-block" target="_blank" rel="noreferrer">
                                    <i className="fa fa-facebook"></i>
                                    </a></li>
                                <li><a href={_.get(this.props,['instagramLink'],'')} className="d-block" target="_blank" rel="noreferrer">
                                <i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default Contact;
