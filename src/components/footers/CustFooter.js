import React from 'react';

const MainFooter = () => {
    return (
        <footer className="footer-area" style={{ backgroundImage: 'url(../../assets/img/bg/2.png)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget widget">
                            <div className="about_us_widget">
                                <a href="index-2.html" className="footer-logo">
                                    <img src="../../assets/img/logo.png" alt="footer logo" />
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
                                    <span>Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh</span>
                                </p>
                                <p className="location">
                                    <i className="fa fa-envelope-o" />
                                    <span>travelpoint@gmail.com</span>
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
                                <li><a href="#"><img src="../../assets/img/instagram/1.png" alt="img" /></a></li>
                                <li><a href="#"><img src="../../assets/img/instagram/2.png" alt="img" /></a></li>
                                <li><a href="#"><img src="../../assets/img/instagram/3.png" alt="img" /></a></li>
                                <li><a href="#"><img src="../../assets/img/instagram/4.png" alt="img" /></a></li>
                                <li><a href="#"><img src="../../assets/img/instagram/5.png" alt="img" /></a></li>
                                <li><a href="#"><img src="../../assets/img/instagram/6.png" alt="img" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-inner">
                <div className="copyright-text">
                    © Viaje 2019 All rights reserved. Powered with <i className="fa fa-heart" /> by <a href="http://zwin.io/" target="_blank"><span>Zwin</span></a>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;