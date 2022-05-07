import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustOffers = () => {

    const settings = {
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        speed: 400,
        loop: true,
        autoplay: false,
        prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
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
                            <Slider {...settings}>
                                <div className="destinations-list-slider">
                                    <div className="d-list-slider-item">
                                        <div className="single-destinations-list text-center">
                                            <div className="thumb">
                                                <span className="d-list-tag">Special Offer</span>
                                                <img src="assets/img/destination-list/1.png" alt="list" />
                                                <div className="d-list-btn-wrap">
                                                    <div className="d-list-btn">
                                                        <a className="btn btn-yellow" href="#">Book Now <i className="fa fa-paper-plane" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <h4 className="title">Greece</h4>
                                                <p className="content">Atmosphere of the sunny country</p>
                                                <ul className="tp-list-meta border-bt-dot">
                                                    <li><i className="fa fa-calendar-o" /> 8oct</li>
                                                    <li><i className="fa fa-clock-o" /> 4 days</li>
                                                    <li><i className="fa fa-star" /> 4.3</li>
                                                </ul>
                                                <div className="tp-price-meta tp-price-meta-cl">
                                                    <p>Price</p>
                                                    <h2>620 <small>$</small></h2>
                                                    <del>620<span>$</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-list-slider-item">
                                        <div className="single-destinations-list text-center">
                                            <div className="thumb">
                                                <img src="assets/img/destination-list/2.png" alt="list" />
                                                <div className="d-list-btn-wrap">
                                                    <div className="d-list-btn">
                                                        <a className="btn btn-yellow" href="#">Book Now <i className="fa fa-paper-plane" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <h4 className="title">Italy</h4>
                                                <p className="content">Atmosphere of the sunny country</p>
                                                <ul className="tp-list-meta border-bt-dot">
                                                    <li><i className="fa fa-calendar-o" /> 8oct</li>
                                                    <li><i className="fa fa-clock-o" /> 4 days</li>
                                                    <li><i className="fa fa-star" /> 4.3</li>
                                                </ul>
                                                <div className="tp-price-meta tp-price-meta-cl">
                                                    <p>Price</p>
                                                    <h2>620 <small>$</small></h2>
                                                    <del>620<span>$</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-list-slider-item">
                                        <div className="single-destinations-list text-center">
                                            <div className="thumb">
                                                <span className="d-list-tag">Special Offer</span>
                                                <img src="assets/img/destination-list/3.png" alt="list" />
                                                <div className="d-list-btn-wrap">
                                                    <div className="d-list-btn">
                                                        <a className="btn btn-yellow" href="#">Book Now <i className="fa fa-paper-plane" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <h4 className="title">Canada</h4>
                                                <p className="content">Atmosphere of the sunny country</p>
                                                <ul className="tp-list-meta border-bt-dot">
                                                    <li><i className="fa fa-calendar-o" /> 8oct</li>
                                                    <li><i className="fa fa-clock-o" /> 4 days</li>
                                                    <li><i className="fa fa-star" /> 4.3</li>
                                                </ul>
                                                <div className="tp-price-meta tp-price-meta-cl">
                                                    <p>Price</p>
                                                    <h2>620 <small>$</small></h2>
                                                    <del>620<span>$</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-list-slider-item">
                                        <div className="single-destinations-list text-center">
                                            <div className="thumb">
                                                <span className="d-list-tag">Special Offer</span>
                                                <img src="assets/img/destination-list/1.png" alt="list" />
                                                <div className="d-list-btn-wrap">
                                                    <div className="d-list-btn">
                                                        <a className="btn btn-yellow" href="#">Book Now <i className="fa fa-paper-plane" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details">
                                                <h4 className="title">Greece</h4>
                                                <p className="content">Atmosphere of the sunny country</p>
                                                <ul className="tp-list-meta border-bt-dot">
                                                    <li><i className="fa fa-calendar-o" /> 8oct</li>
                                                    <li><i className="fa fa-clock-o" /> 4 days</li>
                                                    <li><i className="fa fa-star" /> 4.3</li>
                                                </ul>
                                                <div className="tp-price-meta tp-price-meta-cl">
                                                    <p>Price</p>
                                                    <h2>620 <small>$</small></h2>
                                                    <del>620<span>$</span></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
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