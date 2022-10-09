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
import FlipCard from '../cards/FlipCard';

const FoodFiesta = ({ data }) => {
    const [imgArr, setImgArr] = useState([img28, img29, img30, img31, img32, img33])
    return (
        <div className="upcomming-tour pd-top-65 pd-bottom-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2
                                className="title wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.1s"
                            >
                                Food Fiesta
                            </h2>
                            <p
                                className="wow animated fadeInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.2s"
                            >
                                Most delicious across the globe!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overflowX">
                    <FlipCard data={data} />
                    <FlipCard data={data} />
                    <FlipCard data={data} />
                    <FlipCard data={data} />
                    <FlipCard data={data} />
                </div>

                <div
                    className="innerbtn-wrap text-center wow animated fadeInUp"
                    data-wow-duration="2.2s"
                    data-wow-delay="0.7s"
                >
                    <a className="btn btn-yellow" href="#/listdetails">
                        View All
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FoodFiesta;