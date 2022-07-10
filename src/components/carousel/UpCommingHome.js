import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img28 from '../../assets/img/destination-list/28.png';
import img29 from '../../assets/img/destination-list/29.png';
import img30 from '../../assets/img/destination-list/30.png';
import img31 from '../../assets/img/destination-list/31.png';
import img32 from '../../assets/img/destination-list/32.png';
import img33 from '../../assets/img/destination-list/33.png';

const UpCommingHome = () => {
    return (
        <div className="upcomming-tour pd-top-65 pd-bottom-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2
                                className="title wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.1s"
                            >
                                Upcoming Tours
                            </h2>
                            <p
                                className="wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.2s"
                            >
                                Lorem Ipsum is simply dummy text the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s,
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="single-upconing-card style-two wow animated fadeInUp"
                            data-wow-duration="0.4s"
                            data-wow-delay="0.1s"
                        >
                            <div
                                className="shadow"
                                style={{
                                    backgroundImage:  `url(${img28})`
                                }}
                            >
                                <img src={img28} alt="img" />
                            </div>
                            <div className="tp-price-meta">
                                <h2>
                                    620 <span>$</span>
                                </h2>
                                <p>Price</p>
                            </div>
                            <div className="details">
                                <h3 className="title">
                                    <a href="#">Machu Picchu</a>
                                </h3>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="location">Peru</div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="single-upconing-card style-two wow animated fadeInUp"
                            data-wow-duration="0.7s"
                            data-wow-delay="0.2s"
                        >
                            <div
                                className="shadow"
                                style={{
                                    backgroundImage: `url(${img29})`
                                }}
                            >
                                <img src={img29} alt="img" />
                            </div>
                            <div className="tp-price-meta">
                                <h2>
                                    620 <span>$</span>
                                </h2>
                                <p>Price</p>
                            </div>
                            <div className="details">
                                <h3 className="title">
                                    <a href="#">Rome</a>
                                </h3>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="location">Italy</div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="single-upconing-card style-two wow animated fadeInUp"
                            data-wow-duration="1.0s"
                            data-wow-delay="0.3s"
                        >
                            <div
                                className="shadow"
                                style={{
                                    backgroundImage: `url(${img30})`
                                }}
                            >
                                <img src={img30} alt="img" />
                            </div>
                            <div className="tp-price-meta">
                                <h2>
                                    620 <span>$</span>
                                </h2>
                                <p>Price</p>
                            </div>
                            <div className="details">
                                <h3 className="title">
                                    <a href="#">Great Barrier</a>
                                </h3>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="location">AUSTRALIA</div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="single-upconing-card style-two wow animated fadeInUp"
                            data-wow-duration="1.3s"
                            data-wow-delay="0.4s"
                        >
                            <div
                                className="shadow"
                                style={{
                                    backgroundImage: `url(${img31})`
                                }}
                            >
                                <img src={img31} alt="img" />
                            </div>
                            <div className="tp-price-meta">
                                <h2>
                                    620 <span>$</span>
                                </h2>
                                <p>Price</p>
                            </div>
                            <div className="details">
                                <h3 className="title">
                                    <a href="#">Bali Province</a>
                                </h3>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="location">INDONESIA</div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="single-upconing-card style-two wow animated fadeInUp"
                            data-wow-duration="1.6s"
                            data-wow-delay="0.5s"
                        >
                            <div
                                className="shadow"
                                style={{
                                    backgroundImage: `url(${img32})`
                                }}
                            >
                                <img src={img32} alt="img" />
                            </div>
                            <div className="tp-price-meta">
                                <h2>
                                    620 <span>$</span>
                                </h2>
                                <p>Price</p>
                            </div>
                            <div className="details">
                                <h3 className="title">
                                    <a href="#">Hurawalhi Island</a>
                                </h3>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="location">MALDIVES</div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="single-upconing-card style-two wow animated fadeInUp"
                            data-wow-duration="1.9s"
                            data-wow-delay="0.6s"
                        >
                            <div
                                className="shadow"
                                style={{
                                    backgroundImage: `url(${img33})`
                                }}
                            >
                                <img src={img33} alt="img" />
                            </div>
                            <div className="tp-price-meta">
                                <h2>
                                    620 <span>$</span>
                                </h2>
                                <p>Price</p>
                            </div>
                            <div className="details">
                                <h3 className="title">
                                    <a href="#">cox's bazar Sea</a>
                                </h3>
                                <div className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </div>
                            </div>
                            <div className="location">BANGLADESH</div>
                        </div>
                    </div>
                </div>
                <div
                    className="innerbtn-wrap text-center wow animated fadeInUp"
                    data-wow-duration="2.2s"
                    data-wow-delay="0.7s"
                >
                    <a className="btn btn-yellow" href="#">
                        View All Tours
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UpCommingHome;