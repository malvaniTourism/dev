import React from "react";
import Path from "../../services/baseUrl";

const CityCard = (props) => {

    let imgUrl = props.city.bg_image_url.slice(6)
    imgUrl = Path.API_PATH + `/storage` + imgUrl

    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-destination-grid text-center">
                <div className="thumb">
                    <img className="city-img" height={280} src={imgUrl} alt="img" />
                </div>
                <div className="details">
                    <div className="tp-review-meta">
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="fa fa-star" />
                        <span>4.0</span>
                    </div>
                    <h3 className="title">{props.city.name}</h3>
                    <p className="content">{props.city.tag_line}</p><br />
                    <p className="content"><b>Famous For: </b>{props.city.famous_for}</p>
                    <a className="btn btn-gray" href="destination-details.html">
                        <span>
                            Explore
                            <i className="la la-arrow-right" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default CityCard;