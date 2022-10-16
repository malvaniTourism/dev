import React from 'react';
import Thumb from '../../assets/img/destination-list/4.png'
import Icon from '../../assets/img/icons/1.png'
import { useNavigate } from 'react-router-dom';


const HolidayPlans = (data) => {
    const navigate = useNavigate();

    return (
        <div
            className="holiday-plan-area tp-holiday-plan-area mg-top-96"
            style={{ backgroundImage: "url(assets/img/bg/8.png)" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-9">
                        <div className="section-title text-center">
                            <h2
                                className="title wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.1s"
                            >
                                Perfect Holiday Plan
                            </h2>
                            <p
                                className="wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.2s"
                            >
                                No vis fastidii accumsan, ignota postulant ea mea. Vis et prima
                                integre, ei vis ridens moderatius reformidans cu vim doctus accumsan
                                ignota.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                {data?.data?.map((item) => {
                       return (
                        <div className="col-lg-3 col-sm-6">
                        <div
                            className="single-destinations-list style-two wow animated fadeInUp"
                            data-wow-duration="0.4s"
                            data-wow-delay="0.1s"
                        >
                            <div className="thumb" onClick={() => navigate('listdetails')}>
                                <img src={Thumb} alt="list" />
                            </div>
                            <div className="details">
                                <p className="location">
                                    <img src={Icon} alt="map" />
                                    Maldives
                                </p>
                                <h4 className="title">{item.name}</h4>
                                <p className="content">7 Days Tour on 2 person</p>
                                <div className="tp-price-meta">
                                    <h2>
                                        {item.start_price} <small>₹</small>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    )
                })}

                </div>
            </div>
        </div>

    )
};

export default HolidayPlans;