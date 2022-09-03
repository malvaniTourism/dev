import React from "react";
import Path from "../../services/baseUrl";

const InstagramCard = (props) => {
    // let imgUrl = props.city.image_url.slice(6)
    // imgUrl = Path.API_PATH + `/storage` + imgUrl

    return (
        <div className="instagram-slider-item">
            <a href="#">
                <img src={props.img} alt="img" />
            </a>
        </div>
    )
};

export default InstagramCard;