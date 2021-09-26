
import React, { Component } from 'react';
import _ from 'lodash';

class About extends Component {
    render() {
        return (
            <section className="about-area ptb-70 bg-f9f9f9" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src={_.get(this.props, ['banner'], '')} alt="about" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="text">
                                    <h2>About Us</h2>
                                    <p> {_.get(this.props, ['text'], '')}

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
