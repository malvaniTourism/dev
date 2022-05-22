import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustOffer from "../cards/CustOffer";
import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'

const CustOffers = () => {
    const [slides, setSlides] = useState(3);
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', getDimension)
        return () => {
            window.removeEventListener('resize', getDimension)
        }
    }, [slides])

    const getDimension = () => {
        console.log('log', window.innerWidth);
        if (window.innerWidth <= 600) {
            console.log('less');
            setIsMobile(true)
            setSlides(1)
        } else {
            setIsMobile(false)
            setSlides(3)
        }
    }

    const settings = {
        slidesToShow: slides,
        dots: isMobile,
        slidesToScroll: 1,
        speed: 400,
        loop: true,
        autoplay: false,
        nextArrow: <img alt="arr-img" className="bkArrow" src={LeftArr} height={60} width={60} />,
        prevArrow: <img alt="arr-img" className="bkArrow" src={RightArr} height={60} width={60} />
        // prevArrow: <span class="slick-prev"><i class="la la-long-arrow-left"></i></span>,
        // nextArrow: <span class="slick-next"><i class="la la-long-arrow-right"></i></span>
    }

    return (
        <div className="offer-area pd-top-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title">Special offers &amp; Discounts</h2>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="destinations-list-slider-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
                            <div className="destinations-list-slider">
                                <Slider {...settings}>
                                    <CustOffer />
                                    <CustOffer />
                                    <CustOffer />
                                    <CustOffer />
                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-2 align-self-center order-lg-11">
                            <div className="container">
                                <div className="destinations-slider-controls">
                                    <div className="slider-nav tp-control-nav" />
                                    {/*slider-nav*/}
                                    <div className="tp-slider-extra slider-extra">
                                        <div className="text">
                                            <span className="first">01 </span>
                                            <span className="last" />
                                        </div>
                                        {/*text*/}
                                        <div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                                            <span className="slider__label sr-only" />
                                        </div>
                                    </div>
                                    {/*slider-extra*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustOffers;