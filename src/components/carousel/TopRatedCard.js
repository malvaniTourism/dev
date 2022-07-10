import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img27 from '../../assets/img/icons/27.png';
import img28 from '../../assets/img/icons/28.png';
import img1 from '../../assets/img/icons/1.png';

import imgdl8 from '../../assets/img/destination-list/8.png';
import imgdl9 from '../../assets/img/destination-list/9.png';
import imgdl10 from '../../assets/img/destination-list/10.png';
import imgdl11 from '../../assets/img/destination-list/11.png';
import imgdl12 from '../../assets/img/destination-list/12.png';
import imgdl13 from '../../assets/img/destination-list/13.png';
import imgdl14 from '../../assets/img/destination-list/14.png';
import imgdl15 from '../../assets/img/destination-list/15.png';

import imgo15 from '../../assets/img/others/15.png';

import Background from "../../assets/img/bg/9.png";

const TopRatedCard = () => {
    return (
        <div
            className="travelus-area pd-top-120 pd-bottom-92 jarallax"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title section-title-left-border style-two">
                            <h2 className="title">Lets Go Travel with Us</h2>
                            <p>
                                Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
                                Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec
                                interdum, lectus in convallis pulvinar, enim elit porta sapien, vel
                                finibus erat felis sed neque. Etiam aliquet neque sagittis erat
                                tincidunt aliquam.
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="row single-travelus-wrap-area">
                    <li className="col-lg-2 col-sm-4 single-travelus-wrap">
                        <div className="single-travelus text-center">
                            <div className="icons">
                                <img src={img27} alt="img" />
                            </div>
                            <h4>Search</h4>
                        </div>
                    </li>
                    <li className="col-lg-2 col-sm-4 single-travelus-wrap">
                        <div className="single-travelus text-center">
                            <div className="icons">
                                <img src={img28} alt="img" />
                            </div>
                            <h4>Book</h4>
                        </div>
                    </li>
                    <li className="col-lg-2 col-sm-4 single-travelus-wrap">
                        <div className="single-travelus text-center">
                            <div className="icons">
                                <img src={img27} alt="img" />
                            </div>
                            <h4>Travel</h4>
                        </div>
                    </li>
                    <li className="col-lg-5 offset-xl-1 single-travelus-wrap">
                        <img src={imgo15} alt="img" />
                    </li>
                </ul>
                {/* package area end */}
                <div className="package-area pd-top-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title section-title-left-border style-two">
                                    <h2 className="title">Best Packages For You</h2>
                                    <p>
                                        Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit
                                        ultrices quis non mauris. Aenean scelerisque, sem eu dictum
                                        commodo, velit nisi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="0.1s"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl8} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                Africa
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>Machu Picchu</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    620 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="0.3s"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl9} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                Peru
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>British Islands</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    720 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="0.6s"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl10} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                USA
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>Grand Canyon</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    310 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="0.9s"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl11} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                France
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>eiffel tower</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    540 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl12} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                Italy
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>Colosseum, Rome</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    620 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl13} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                Peru
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>British Islands</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    720 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="1.8s"
                                    data-wow-delay="0.7s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl14} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                Spain
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>Great Reef</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    310 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div
                                    className="single-package-card style-two wow animated fadeInUp"
                                    data-wow-duration="2.1s"
                                    data-wow-delay="0.8s"
                                >
                                    <div className="thumb">
                                        <img src={imgdl15} alt="img" />
                                    </div>
                                    <div className="details">
                                        <div className="location">
                                            <span className="location-name">
                                                <img src={img1} alt="img" />
                                                Usa
                                            </span>
                                            <span className="tp-review-meta float-right">
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <i className="ic-yellow fa fa-star" />
                                                <span>4.0</span>
                                            </span>
                                        </div>
                                        <h3>Sea Beach</h3>
                                        <ul className="package-meta">
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-clock-o" />
                                                </p>
                                                <p>Duration</p>
                                                <h2>4 Days</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-users" />
                                                </p>
                                                <p>Person</p>
                                                <h2>2 Adult</h2>
                                            </li>
                                            <li className="tp-price-meta">
                                                <p>
                                                    <i className="fa fa-tag" />
                                                </p>
                                                <p>Price</p>
                                                <h2>
                                                    540 <span>$</span>
                                                </h2>
                                            </li>
                                        </ul>
                                        <a className="btn btn-gray" href="#">
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* package area end */}
            </div>
        </div>
    )
}

export default TopRatedCard;