import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'

const Carousel = () => {

    const settings = {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        speed: 400,
        loop: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 9000,
        nextArrow: <img alt="arr-img" className="bkArrow" src={LeftArr} height={60} width={60} />,
        prevArrow: <img alt="arr-img" className="bkArrow" src={RightArr} height={60} width={60} />
        // appendDots: $(".banner-slider-dots"),
    };

    return (
        <div className="banner-area">
            <div className="banner-slider">
                <div className="banner-slider-item banner-bg-1">
                    <div className="container">
                        <div className="row bannerContent">
                            <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-social-meta">
                <div className="banner-slider-dots" />
                <ul className="social-icon">
                    <li>
                        <a className="facebook" href="#" target="_blank"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                        <a className="twitter" href="#" target="_blank"><i className="fa fa-twitter" /></a>
                    </li>
                    <li>
                        <a className="pinterest" href="#" target="_blank"><i className="fa fa-instagram" /></a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="banner-slider-controls">
                    <h1 className="page-title">Contact Us</h1>
                </div>
            </div>
        </div>
    )
}

export default Carousel;