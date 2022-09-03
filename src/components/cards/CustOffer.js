import React from "react";
import Image from '../../assets/img/destination-list/1.png'
import { useNavigate } from 'react-router-dom';

const CustOffer = () => {
    const navigate = useNavigate();

    return (
        <div className="d-list-slider-item">
            <div className="single-destinations-list text-center">
                <div className="thumb">
                    <span className="d-list-tag">Special Offer</span>
                    <img src={Image} alt="list" />
                    <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow" onClick={() => navigate('carddetails')}>
                        <text className="whiteAlign bold mdText" href="#/carddetails">Book Now</text>
                        <i className="fa fa-paper-plane" />
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
                        <h2>620 <small>₹</small></h2>
                        <del>620<span>₹</span></del>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustOffer;