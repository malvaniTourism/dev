import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainHeadData from './MainHeadData';
import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselHeader = () => {

    return (
        <div className="banner-area">
            <div className="banner-">
                <div className="banner--item">
                    <div className="">
                        <div className="row">

                                <Carousel autoPlay centerMode showArrows stopOnHover swipeable useKeyboardArrows infiniteLoop>
                                    <MainHeadData />
                                    <MainHeadData />
                                    <MainHeadData />
                                </Carousel>

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
        </div>
    )
}

export default CarouselHeader;