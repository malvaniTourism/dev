import React from "react";
import Image from '../../assets/images/arrow1.png'

const KnowMore = () => {

    return (
        <div className="knMore mx-auto alignCenter">
            <text className="whiteAlign bold mdText">Know More</text>
            <img alt="bk_btn" className="knArrow" src={Image} />
        </div>
    )
};

export default KnowMore;