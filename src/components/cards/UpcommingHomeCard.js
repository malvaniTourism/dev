import React from "react";
import img28 from '../../assets/img/destination-list/28.png';

const UpcommingHomeCard = (props) => {

    return (
        <div className="col-xl-4 col-md-6">
            <div
                className="single-upconing-card style-two wow animated fadeInUp"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
            >
                <div
                    className="shadow"
                    style={{
                        backgroundImage: `url(${props.img})`
                    }}
                >
                    <img src={img28} alt="img" />
                </div>
                <div className="tp-price-meta">
                    <h2>
                        620 <span>$</span>
                    </h2>
                    <p>Price</p>
                </div>
                <div className="details">
                    <h3 className="title">
                        <text href="#">Machu Picchu</text>
                    </h3>
                    <div className="tp-review-meta">
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <span>4.0</span>
                    </div>
                </div>
                <div className="location">Peru</div>
            </div>
        </div>
    )
};

export default UpcommingHomeCard;