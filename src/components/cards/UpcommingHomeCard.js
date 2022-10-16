import React from "react";
import img28 from '../../assets/img/destination-list/28.png';
import Path from "../../services/baseUrl";

const UpcommingHomeCard = ({ data }) => {
    let Img = Path.API_PATH + data.fevicon

    return (
        <div className="col-xl-4 col-md-6">
            <div
                className="single-upconing-card style-two wow animated fadeInUp"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
            >
                <div
                    className="shadow"
                >
                    <img src={Img} alt="img" style={{ minHeight: 218 }} />
                </div>
                <div className="tp-price-meta tp-price-meta-home">
                    <text style={{ color: 'coral', fontWeight: 700 }}>620 ₹</text>
                    {/* <p>Price</p> */}
                </div>
                <div className="details">
                    <h3 className="title">
                        <text href="#">{data.speciality}</text>
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
                <div className="location">{data.name}</div>
            </div>
        </div>
    )
};

export default UpcommingHomeCard;