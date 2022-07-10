import React from "react";

const InstagramCard = (props) => {

    return (
        <div className="instagram-slider-item">
            <a href="#">
                <img src={props.img} alt="img" />
            </a>
        </div>
    )
};

export default InstagramCard;