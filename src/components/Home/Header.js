import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/img/final-dizi-logo3.png';


class Header extends Component {


    render() {
        return (
                <div className="navbar-area navbar-style-two is-sticky">
                    <div className="dibiz-nav">
                        <div className="container">
                        <Navbar expand="md">
                                <Navbar.Brand href="#home">
                                    <img src={Logo} alt="logo" style={{ height: 50 }} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Nav.Item>
                                            <span onClick={()=>this.props.onMenuClick('home')} className="nav-link">Home </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <span onClick={()=>this.props.onMenuClick('about')} className="nav-link">About </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <span onClick={()=>this.props.onMenuClick('Services')} className="nav-link">Services </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <span onClick={()=>this.props.onMenuClick('Contact')} className="nav-link">Contact </span>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <span className="nav-link" onClick={()=>this.props.history.push('/inquiry')}>Inquiry </span>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Header