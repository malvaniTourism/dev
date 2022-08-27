import React from "react";
import Slider from "react-slick";

import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'
import img from '../../assets/img/others/3.png'
import img1 from '../../assets/img/others/2.png'
import img2 from '../../assets/img/others/4.png'

const DestinationCarousel = () => {
    const settings = {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        speed: 400,
        loop: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <img alt="arr-img" className="bkArrow" src={LeftArr} height={60} width={60} />,
        prevArrow: <img alt="arr-img" className="bkArrow" src={RightArr} height={60} width={60} />
        // appendDots: $(".banner-slider-dots"),
    };

    return (
        <div class="justify-content-center destBannerMain">
                <div class="col-xl-7 col-sm-7 col-xs-7">
                    <Slider {...settings}>
                        <div class="destinations-details-main-slider-wrap">
                            <div class="destinations-details-main-slider">
                                <div class="d-details-main-slider-item">
                                    <img src={img} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div class="destinations-details-main-slider-wrap">
                            <div class="destinations-details-main-slider">
                            <div class="d-details-main-slider-item">
                                    <img src={img1} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div class="destinations-details-main-slider-wrap">
                            <div class="destinations-details-main-slider">
                            <div class="d-details-main-slider-item">
                                    <img src={img2} alt="img" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
    )
};

export default DestinationCarousel;