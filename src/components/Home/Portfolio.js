import React, { Component } from 'react';
import _ from 'lodash';

class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio-area section-title-center pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Case Studies</span>
                    <h2>Check of Our Some Recent Works</h2>
                </div>

                <div className="row">
                    {_.map(_.get(this.props,'clientData',[]),client=>{
                        return <div key={client.user_name} className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-portfolio-box">
                            <a href={_.get(client,'order_url')} className="image d-block">
                                <img src={_.get(client,'profile_image')} alt="" />
                            </a>

                            <div className="content">
                                <h6><a className="portfolio-name" href={_.get(client,'order_url')}>{_.get(client,'user_name')}</a></h6>
                                <span>{_.get(client,'type')}</span>
                                <a href={_.get(client,'order_url')} className="link-btn"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> 
                    })}
                </div>
            </div>
        </section>

        )
    }

}
export default Portfolio