import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainHeadData from './MainHeadData';

const CustHeader = () => {

    const settings = {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        speed: 400,
        loop: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 9000,
        prevArrow: <div class="slick-prev"><i class="la la-long-arrow-left"></i></div>,
        nextArrow: <span class="slick-next"><i class="la la-long-arrow-right"></i></span>,
        // appendDots: $(".banner-slider-dots"),
    };

    return (
        <div className="banner-area">
            <div className="banner-slider">
            <div className="banner-slider-item banner-bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                <Slider {...settings}>
                    <MainHeadData />
                    <MainHeadData />
                    <MainHeadData />
                </Slider>
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
                    <div className="slider-nav tp-control-nav" />
                    {/*slider-nav*/}
                    <div className="tp-slider-extra slider-extra">
                        <div className="text">
                            <span className="first">01</span>
                            <span className="devider">/</span>
                            <span className="last" />
                        </div>
                    </div>
                    {/*slider-extra*/}
                </div>
            </div>
        </div>
    )
}

export default CustHeader;