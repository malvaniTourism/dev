import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Holiday from "../cards/Holiday";
import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'
import KnowMore from "../buttons/KnowMore";

const HolidaySwiper = () => {
    const [slides, setSlides] = useState(4);
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
            setSlides(4)
        }
    }
    const settings = {
        dots: isMobile,
        arrows: !isMobile,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: 'mySlider',
        nextArrow: <img alt="arr-img" className="bkArrow" src={LeftArr} height={60} width={60} />,
        prevArrow: <img alt="arr-img" className="bkArrow" src={RightArr} height={60} width={60} />
    };

    return (
        <div>
            <div>
                <Slider {...settings}>
                    <Holiday />
                    <Holiday />
                    <Holiday />
                    <Holiday />
                    <Holiday />
                </Slider>
            </div>
            <div className="textAlign mx-auto">
                <div>
                    <text className="lgText bold" style={{lineHeight: 4}}>Special offers & Discounts</text>
                </div>
                <div className="mx-auto" style={{width: '60%', lineHeight: 2, marginBottom: 35}}>
                    <text className="textAlign">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book. It has not only five centuries</text>
                </div>
                <div className="mx-auto" style={{marginBottom: 30}}>
                    <KnowMore />
                </div>
            </div>
        </div>
    );
}

export default HolidaySwiper;