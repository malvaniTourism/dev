import React from "react";
import Slider from "react-slick";

import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'
import img from '../../assets/img/others/3.png'
import img1 from '../../assets/img/others/2.png'
import img2 from '../../assets/img/others/4.png'
import VisitsCard from "../cards/VisitsCard";

const VisitsCarousel = () => {
    const settings = {
        slidesToShow: 3,
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
        <div class="destinations-client-review-slider tp-common-slider-style">
            <div class="d-client-review-slider-item">
                <Slider {...settings}>
                    <VisitsCard />
                        <VisitsCard />
                        <VisitsCard />
                        <VisitsCard />
                </Slider>
            </div>
        </div>
    )
};

export default VisitsCarousel;