import React, { Component,Fragment } from 'react';
import ContactImg from '../../assets/img/contact.png';

class ContactForm extends Component {
    render() {
        return (
            <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Get in Touch</span>
                    <h2>Ready to Get Started?<span className="overlay"></span></h2>
                    <p>Your email address will not be published. Required fields are marked *</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image" data-tilt="">
                            <img src={ContactImg} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <form className="" method="post" action="{{url('/contact-us')}}" id="contact_form">

                                <input type="hidden" name="supplier_id" className="form-control" value="{{$user_id}}" />
                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label htmlFor="inputPassword2" className="contact-name">Name</label>
                                            <input type="text"  name="name" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label htmlFor="inputPassword2" className="contact-name">Email</label>
                                            <input type="text"  name="email" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label htmlFor="inputPassword2" className="contact-name">Contact Number</label>
                                            <input  type="text" name="phone" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label htmlFor="inputPassword2" className="contact-name">Message</label>
                                            <textarea type="text"  rows="4" className="form-control" name="message" > </textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <button type="submit" name="submit" id="it" className="btn default-btn btn-block" style={{marginTop:20}}>
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        )
    }

}
export default ContactForm