import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img9 from '../../assets/img/blog-details/9.png';
import img10 from '../../assets/img/blog-details/10.png';
import img11 from '../../assets/img/blog-details/11.png';

const OurClients = () => {
    return (
        <div className="client-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title">What Our Clients Say</h2>
                            <p>
                                Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
                                quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit
                                nisi blandit magna
                            </p>
                        </div>
                    </div>
                </div>
                <div className="client-slider tp-common-slider-style">
                    <div className="single-client-card">
                        <div className="quote">
                            <i className="ti-quote-left" />
                        </div>
                        <p className="content-text">
                            The largest country in the world, Russia offers a broad array of
                            travel experiences, from treks up the slopes of glacier-capped
                            mountains to strolls along the shoreline of Earth’s oldest lake.
                            Historical sites and cultural
                        </p>
                        <div className="media">
                            <div className="media-left">
                                <img src={img11} alt="img" />
                            </div>
                            <div className="media-body">
                                <h4>Jasmine Woodkin</h4>
                                <span>TOURIST</span>
                                <span className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-client-card">
                        <div className="quote">
                            <i className="ti-quote-left" />
                        </div>
                        <p className="content-text">
                            The largest country in the world, Russia offers a broad array of
                            travel experiences, from treks up the slopes of glacier-capped
                            mountains to strolls along the shoreline of Earth’s oldest lake.
                            Historical sites and cultural
                        </p>
                        <div className="media">
                            <div className="media-left">
                                <img src={img11} alt="img" />
                            </div>
                            <div className="media-body">
                                <h4>Woodkin Jack</h4>
                                <span>TOURIST</span>
                                <span className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-client-card">
                        <div className="quote">
                            <i className="ti-quote-left" />
                        </div>
                        <p className="content-text">
                            The largest country in the world, Russia offers a broad array of
                            travel experiences, from treks up the slopes of glacier-capped
                            mountains to strolls along the shoreline of Earth’s oldest lake.
                            Historical sites and cultural
                        </p>
                        <div className="media">
                            <div className="media-left">
                                <img src={img9} alt="img" />
                            </div>
                            <div className="media-body">
                                <h4>Rafayel Gee</h4>
                                <span>TOURIST</span>
                                <span className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-client-card">
                        <div className="quote">
                            <i className="ti-quote-left" />
                        </div>
                        <p className="content-text">
                            The largest country in the world, Russia offers a broad array of
                            travel experiences, from treks up the slopes of glacier-capped
                            mountains to strolls along the shoreline of Earth’s oldest lake.
                            Historical sites and cultural
                        </p>
                        <div className="media">
                            <div className="media-left">
                                <img src={img10} alt="img" />
                            </div>
                            <div className="media-body">
                                <h4>Thomsa Doe</h4>
                                <span>TOURIST</span>
                                <span className="tp-review-meta">
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <i className="ic-yellow fa fa-star" />
                                    <span>4.0</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients;