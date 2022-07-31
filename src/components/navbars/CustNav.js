import React from "react";
import { Link } from "react-router-dom";
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
                            {/* <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow">
                                <text className="whiteAlign bold mdText" href="#">Book Now</text>
                                <i className="fa fa-paper-plane" />
                            </div> */}
                            {/* <div className="search">
                                <i className="ti-search" />
                            </div> */}
                            <div className="notification profileIcon">
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
                            <a>Service</a>
                            <ul className="sub-menu">
                                <li>
                                    <Link to={'/list'} state={{ page: 'Hotels/Restaurants/Rooms' }}>Hotels/Restaurants/Rooms</Link>
                                </li>
                                <li>
                                    <Link to={'/list'} state={{ page: 'Villas/Raw Houses' }}>Villas/Raw Houses</Link>
                                </li>
                                <li>
                                    <Link to={'/list'} state={{ page: 'Tour Packages' }}>Tour Packages</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a>Transport</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#/list">MSRTC Bus</a>
                                </li>
                                <li>
                                    <a href="#/list">Private</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#/cities">Cities</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#/places">Places</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#/contactus">Contact</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#/aboutus">About</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a>Page</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#/list">List</a>
                                </li>
                                <li>
                                    <a href="#/top-rated">Top Rated</a>
                                </li>
                                <li>
                                    <a href="tour-list.html">Tours List</a>
                                </li>
                                <li>
                                    <a href="tour-list02.html">Tours List 02</a>
                                </li>
                                <li>
                                    <a href="tour-list03.html">Tours List 03</a>
                                </li>
                                <li>
                                    <a href="#/listdetails">Tours Details</a>
                                </li>
                                <li>
                                    <a href="destination-list.html">Destination List</a>
                                </li>
                                <li>
                                    <a href="destination-list02.html">Destination List 2</a>
                                </li>
                                <li>
                                    <a href="destination-details.html">Destination Details</a>
                                </li>
                                <li>
                                    <a href="gallery.html">Gallery</a>
                                </li>
                                <li>
                                    <a href="gallery-details.html">Gallery Details</a>
                                </li>
                                <li>
                                    <a href="comming-soon.html">Comming soon</a>
                                </li>
                                <li>
                                    <a href="404.html">404</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="user-profile.html">User Profile</a>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <a>Blogs</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#/blogs">Blog</a>
                                </li>
                                <li>
                                    <a href="blog02.html">Blog 02</a>
                                </li>
                                <li>
                                    <a href="blog03.html">Blog 03</a>
                                </li>
                                <li>
                                    <a href="#/blogdetails">Blog-details</a>
                                </li>
                                <li>
                                    <a href="blog-details02.html">Blog Details 02</a>
                                </li>
                            </ul>
                        </li>


                        <div className="menu-item-has-children profileName">
                            <a href="#/profile">Profile</a>
                        </div>
                    </ul>
                </div>
                <div className="nav-right-content">
                    <div className="navButtons">
                        {/* <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow">
                            <text className="whiteAlign bold mdText" href="#">Download Now</text>
                            <i className="fa fa-paper-plane" />
                        </div> */}
                        {/* <div className="search">
                            <i className="ti-search" />
                        </div> */}
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