import React from "react";

const MainHeadData = () => {

    return (
        <div className="banner-bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <div className="banner-inner">
                                    <p className="banner-cat s-animate-1">Hot Places</p>
                                    <h2 className="banner-title s-animate-2" style={{fontSize: 50}}>Navagio <br /> Beach</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-4">
                                <div className="video-popup-btn s-animate-video">
                                    <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
                                </div>
                            </div>
                            <div className="col-lg-12 banner-tour-package">
                                <div className="row">
                                    <div className="col-sm-4 s-animate-3">
                                        <div className="tp-price-meta">
                                            <p>Price</p>
                                            <h2>620 <small>$</small></h2>
                                            <p className="tp-price-meta-details">7 Days Tour <span>on 2 person</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 s-animate-4">
                                        <div className="tp-price-meta">
                                            <p>5 Star</p>
                                            <h2>Hotel</h2>
                                            <p className="tp-price-meta-details">Hotels <span>to choice</span></p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 s-animate-5">
                                        <div className="tp-price-meta">
                                            <p>Flight date</p>
                                            <h2>17</h2>
                                            <p className="tp-price-meta-details">September <span>or later</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainHeadData;