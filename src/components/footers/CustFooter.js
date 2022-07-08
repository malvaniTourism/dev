import React from 'react';
import BG from '../../assets/img/bg/2.png';
import Footer from '../../assets/img/logo.png';
import Img1 from '../../assets/img/instagram/1.png';
import Img2 from '../../assets/img/instagram/2.png';
import Img3 from '../../assets/img/instagram/3.png';
import Img4 from '../../assets/img/instagram/4.png';
import Img5 from '../../assets/img/instagram/5.png';
import Img6 from '../../assets/img/instagram/6.png';

const MainFooter = () => {
    return (
        <footer className="footer-area" style={{ backgroundImage: `url(${BG})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget widget">
                            <div className="about_us_widget">
                                <a href="index-2.html" className="footer-logo">
                                    <img src={Footer} alt="footer logo" />
                                </a>
                                <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                <ul className="social-icon">
                                    <li>
                                        <a className="facebook" href="#" target="_blank"><i className="fa fa-facebook  " /></a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#" target="_blank"><i className="fa fa-twitter  " /></a>
                                    </li>
                                    <li>
                                        <a className="pinterest" href="#" target="_blank"><i className="fa fa-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget widget ">
                            <div className="widget-contact">
                                <h4 className="widget-title">Contact us</h4>
                                <p>
                                    <i className="fa fa-map-marker" />
                                    <span>Malvan, Sindhudurga, Maharashtra 416610. </span>
                                </p>
                                <p className="location">
                                    <i className="fa fa-envelope-o" />
                                    <span>support@tourkokan.com</span>
                                </p>
                                <p className="telephone">
                                    <i className="fa fa-phone base-color" />
                                    <span>
                                        +088 012121240
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget widget">
                            <h4 className="widget-title">Quick Link</h4>
                            <ul className="widget_nav_menu">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Destination</a></li>
                                <li><a href="#">Tours</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget widget">
                            <h4 className="widget-title">Instagram Gallery</h4>
                            <ul className="widget-instagram-feed">
                                <li><a href="#"><img src={Img1} alt="img" /></a></li>
                                <li><a href="#"><img src={Img2} alt="img" /></a></li>
                                <li><a href="#"><img src={Img3} alt="img" /></a></li>
                                <li><a href="#"><img src={Img4} alt="img" /></a></li>
                                <li><a href="#"><img src={Img5} alt="img" /></a></li>
                                <li><a href="#"><img src={Img6} alt="img" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-inner">
                <div className="copyright-text">
                    © TourKokan 2019 All rights reserved. Powered with <i className="fa fa-heart" /> by <a href="#" target="_blank"><span>MTDC</span></a>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;