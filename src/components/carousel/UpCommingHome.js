import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img28 from '../../assets/img/destination-list/28.png';
import img29 from '../../assets/img/destination-list/29.png';
import img30 from '../../assets/img/destination-list/30.png';
import img31 from '../../assets/img/destination-list/31.png';
import img32 from '../../assets/img/destination-list/32.png';
import img33 from '../../assets/img/destination-list/33.png';
import UpcommingHomeCard from '../cards/UpcommingHomeCard';

const UpCommingHome = () => {
    const [imgArr, setImgArr] = useState([img28, img29, img30, img31, img32, img33])
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
                    {imgArr.map(img => {
                        return (
                            <UpcommingHomeCard img={img} />
                        )
                    })}
                </div>
                <div
                    className="innerbtn-wrap text-center wow animated fadeInUp"
                    data-wow-duration="2.2s"
                    data-wow-delay="0.7s"
                >
                    <a className="btn btn-yellow" href="#/listdetails">
                        View All Tours
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UpCommingHome;