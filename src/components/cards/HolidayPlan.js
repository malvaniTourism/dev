import React from "react";
import Thumb from '../../assets/img/destination-list/4.png'
import Icon from '../../assets/img/icons/1.png'

const HolidayPlan = () => {

    return (
        <div className="col-lg-3 col-sm-6">
            <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
            >
                <div className="thumb">
                    <img src={Thumb} alt="list" />
                </div>
                <div className="details">
                    <p className="location">
                        <img src={Icon} alt="map" />
                        Maldives
                    </p>
                    <h4 className="title">Hurawalhi Island</h4>
                    <p className="content">7 Days Tour on 2 person</p>
                    <div className="tp-price-meta">
                        <h2>
                            620 <small>$</small>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HolidayPlan;