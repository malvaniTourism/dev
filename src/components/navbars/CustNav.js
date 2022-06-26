import React from "react";
import MyLogo from '../../assets/img/sticky-logo.png';

const CustNav = () => {

    return (
        <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
            <div className="container nav-container">
                <div className="responsive-mobile-menu">
                    <div className="mobile-logo">
                        <a href="index-2.html">
                            <img src={MyLogo} alt="logo" />
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
                        <ul className="pl-0">
                            <li className="top-bar-btn-booking alignCenter mx-auto bkNow">
                                <a className="btn btn-yellow" href="tour-details.html">Book Now <i className="fa fa-paper-plane" /></a>
                            </li>
                            <li className="search">
                                <i className="ti-search" />
                            </li>
                            <li className="notification">
                                <a className="signUp-btn" href="#">
                                    <i className="fa fa-user-o" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="tp_main_menu">
                    <div className="logo-wrapper desktop-logo">
                        <a href="index-2.html" className="main-logo">
                            <img src="assets/img/logo.png" alt="logo" />
                        </a>
                        <a href="index-2.html" className="sticky-logo">
                            <img src={MyLogo} alt="logo" />
                        </a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="menu-item-has-children">
                            <a href="#">Home</a>
                            <ul className="sub-menu">
                                <li><a href="index-2.html">Home 01</a></li>
                                <li><a href="home02.html">Home 02</a></li>
                                <li><a href="home03.html">Home 03</a></li>
                                <li><a href="home04.html">Home 04</a></li>
                                <li><a href="home05.html">Home 05</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/aboutus">About Us</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Pages</a>
                            <ul className="sub-menu">
                                <li><a href="tour-list.html">Tours List</a></li>
                                <li><a href="tour-list02.html">Tours List 02</a></li>
                                <li><a href="tour-list03.html">Tours List 03</a></li>
                                <li><a href="tour-details.html">Tours Details</a></li>
                                <li><a href="destination-list.html">Destination List</a></li>
                                <li><a href="destination-list02.html">Destination List 2</a></li>
                                <li><a href="destination-details.html">Destination Details</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="gallery-details.html">Gallery Details</a></li>
                                <li><a href="comming-soon.html">Comming soon</a></li>
                                <li><a href="404.html">404</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="user-profile.html">User Profile</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Blog</a>
                            <ul className="sub-menu">
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog02.html">Blog 02</a></li>
                                <li><a href="blog03.html">Blog 03</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                                <li><a href="blog-details02.html">Blog Details 02</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/contactus">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-right-content">
                    <div className="Row alignCenter">
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