import React from "react";

const upcommingToursCard = (props) => {

    return (
        <div className="single-upconing-card">
            <div
                className="shadow"
                style={{ height: 316, width: 219 }}
            >
                <img className="myUpcomCard" src={props.img} alt="img" />
            </div>
            <div className="tp-price-meta">
                <h2>
                    620 <small>₹</small>
                </h2>
                <p>Price</p>
            </div>
            <div className="details myDetails">
                <h3 className="title">
                    <a className="alink" href="#">Rome</a>
                </h3>
                <p>
                    <i className="fa fa-map-marker" /> Italy
                </p>
                <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <span>4.0</span>
                </div>
            </div>
        </div>
    )
};

export default upcommingToursCard;