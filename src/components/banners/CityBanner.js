import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgbg1 from "../../assets/img/bg/1.png";

const CityBanner = () => {
    return (
        <div
            className="breadcrumb-area style-two jarallax"
            style={{ backgroundImage: `url(${imgbg1})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner">
                            <h1 className="page-title">Places</h1>
                            <ul className="page-list">
                                <li>Home</li>
                                <li>Cities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityBanner;