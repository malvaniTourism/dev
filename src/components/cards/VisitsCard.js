import React from 'react';
import Img from '../../assets/img/destination-list/8.png'

const VisitsCard = () => {
    return (
        <div class="single-destination-grid text-center visitCard">
            <div class="thumb visitCardImg">
                <img src={Img} alt="img" />
            </div>
            <div class="details">
                <div class="tp-review-meta">
                    {/* <i class="ic-yellow fa fa-star"></i>
                    <i class="ic-yellow fa fa-star"></i>
                    <i class="ic-yellow fa fa-star"></i>
                    <i class="ic-yellow fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span>4.0</span> */}
                </div>
                <h4 class="title">Africa</h4>
                <p class="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
            </div>
        </div>
    )
}

export default VisitsCard;