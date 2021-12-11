import React, { Component } from 'react';
import ContactImg from '../../assets/img/contact.png';
import _ from 'lodash';

const defaultState ={
    name:'',
    email:'',
    phone:'',
    message:''
}

class ContactForm extends Component {

    state={
        ...defaultState
    }

    isbtnDisabled = ()=>{
        const {name,email,phone,message} = this.state;
        let error = false;
        const isBlank = data => _.isNil(data) || _.isEmpty(data);
        if(isBlank(name)||isBlank(email)||isBlank(phone)||isBlank(message)) error = true;
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) error=true;
        if(!(/^\d{10}$/.test(phone))) error =true;
        return error;
    }

    handleChange=(key,evt)=>{
        this.setState({
            [key]:evt.target.value
        })
    }
    
    

    onSubmit=()=>{
       this.props.onSendBtnClick(this.state).then(res=>{
        this.setState({...defaultState});
        alert('Success');
        return res;
       })
       .catch(err=>{
        this.setState({...defaultState});
        throw err;
       })
       
        
    }

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
                            <form className="" id="contact_form">
                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label className="contact-name required-field">Name</label>
                                            <input 
                                            type="text" 
                                            name="name" 
                                            onChange={(evt)=>this.handleChange('name',evt)}
                                            value={this.state.name}
                                            className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label className="contact-name required-field">Email</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                onChange={(evt)=>this.handleChange('email',evt)}
                                                value={this.state.email} 
                                                className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label className="contact-name required-field">Contact Number</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                onChange={(evt)=>this.handleChange('phone',evt)}
                                                value={this.state.phone} 
                                                className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <label className="contact-name required-field">Message</label>
                                            <textarea 
                                                type="text" 
                                                rows="4"
                                                onChange={(evt)=>this.handleChange('message',evt)}
                                                value={this.state.message} 
                                                className="form-control" 
                                                name="message" > </textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-xl-12">
                                        <div className="form-group">
                                            <button type="button" onClick={()=>this.onSubmit()} disabled={this.isbtnDisabled()} className="btn default-btn btn-block" style={{marginTop:20}}>
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