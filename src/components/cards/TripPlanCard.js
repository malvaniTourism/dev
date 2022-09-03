import React from 'react';
import Img from '../../assets/img/others/6.png'

const TripPlanCard = () => {
    return (
        <div class="col-lg-4 col-md-6">
            <div class="single-trip-plan">
                <div class="thumb single-trip-plan-left">
                    <img src={Img} alt="blog" />
                </div>
                <div class="single-trip-plan-right">
                    <ul class="tp-list-meta border-bt-dot">
                        <li><i class="fa fa-calendar-o"></i> 8oct</li>
                        <li><i class="fa fa-clock-o"></i> 4 days</li>
                        <li><i class="fa fa-star"></i> 4.3</li>
                    </ul>
                    <div class="tp-price-meta tp-price-meta-cl">
                        <p>Price</p>
                        <h2>620 <small>$</small></h2>
                        <del>620<span>$</span></del>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripPlanCard;