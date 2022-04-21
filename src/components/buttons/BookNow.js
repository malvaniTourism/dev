import React from "react";
import Image from '../../assets/images/arrow.png'

const BookNow = () => {

    return (
        <div className="bkNow">
            <text className="whiteAlign bold smlText">BOOK NOW</text>
            <img alt="bk_btn" className="bkArrow" src={Image} height={50} width={50}/>
        </div>
    )
};

export default BookNow;