import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ad from '../../assets/img/others/1.png';

const UpComming = () => {
    return (
        <div className="ads-area pd-top-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9">
                        <a className="ads-thumb" href="#">
                            <img src={ad} alt="ads" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpComming;