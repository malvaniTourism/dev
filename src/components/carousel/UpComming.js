import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img/tour-details/1.png';
import img2 from '../../assets/img/tour-details/2.png';
import img3 from '../../assets/img/tour-details/3.png';
import img4 from '../../assets/img/tour-details/4.png';
import img5 from '../../assets/img/tour-details/5.png';
import img6 from '../../assets/img/tour-details/6.png';

import img15 from '../../assets/img/icons/15.png';
import img16 from '../../assets/img/icons/16.png';
import img17 from '../../assets/img/icons/17.png';
import img18 from '../../assets/img/icons/18.png';
import img19 from '../../assets/img/icons/19.png';
import img20 from '../../assets/img/icons/20.png';

import imgt3 from '../../assets/img/tour/3.png';
import imgt7 from '../../assets/img/tour/7.png';
import imgt8 from '../../assets/img/tour/8.png';
import imgt9 from '../../assets/img/tour/9.png';

import imgbg11 from '../../assets/img/bg/11.png';
import UpcommingToursCard from '../cards/UpcommingToursCard';

const UpComming = () => {
    const [imgArr, setImgArr] = useState([imgt7, imgt3, imgt8, imgt9])
    return (
        <div
            className="upcomming-tour upcomming-tour-bg pd-top-75"
            style={{ backgroundImage: `url(${imgbg11})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <h2 className="title">Upcoming Tours</h2>
                            <p>
                                Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed
                                pretium sem libero, vel pellentesque purus ultrices ut.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <form className="search-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <button className="submit-btn" type="submit">
                                        <i className="ti-search" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="upcomming-card-slider upcomming-card-slider-2 tp-common-slider-style overflowX">
                            {imgArr.map(img => {
                                return (
                                    <UpcommingToursCard img={img} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UpComming;