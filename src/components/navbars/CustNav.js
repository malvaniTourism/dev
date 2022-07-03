import React from "react";
import MyLogo from '../../assets/img/logoMT.png';

const CustNav = () => {

    return (
        <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
            <div className="container nav-container">
                <div className="responsive-mobile-menu">
                    <div className="mobile-logo">
                        <a href="index-2.html">
                            <img src={MyLogo} className='myLogo' alt="logo" />
                        </a>
                    </div>
                    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon">
                            <span className="line" />
                            <span className="line" />
                            <span className="line" />
                        </span>
                    </button>
                    <div className="nav-right-content">
                        <div className="navButtons">
                            <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow">
                                <text className="whiteAlign bold mdText" href="#">Book Now</text>
                                <i className="fa fa-paper-plane" />
                            </div>
                            <div className="search">
                                <i className="ti-search" />
                            </div>
                            <div className="notification">
                                <a className="signUp-btn" href="#">
                                    <i className="fa fa-user-o" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="tp_main_menu">
                    <div className="logo-wrapper desktop-logo">
                        <a href="index-2.html" className="main-logo">
                            <img src={MyLogo} className='myLogo' alt="logo" />
                        </a>
                        <a href="index-2.html" className="sticky-logo">
                            <img src={MyLogo} className='myLogo' alt="logo" />
                        </a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="menu-item-has-children">
                            <a href="#">Home</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#/aboutus">About Us</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Pages</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Blog</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#/contactus">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-right-content">
                    <div className="navButtons">
                        <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow">
                            <text className="whiteAlign bold mdText" href="#">Book Now</text>
                            <i className="fa fa-paper-plane" />
                        </div>
                        <div className="search">
                            <i className="ti-search" />
                        </div>
                        <div className="notification">
                            <a className="signUp-btn" href="#">
                                <i className="fa fa-user-o" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default CustNav;