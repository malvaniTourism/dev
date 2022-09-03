import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/tour/1.png';
import img2 from '../../assets/img/tour/2.png';
import img3 from '../../assets/img/tour/3.png';
import img4 from '../../assets/img/tour/4.png';
import img5 from '../../assets/img/tour/5.png';
import img6 from '../../assets/img/tour/6.png';
import InstagramCard from '../cards/InstagramCard';

const InstagramPost = (props) => {
    console.log(props);
    const [imgArr, setImgArr] = useState([img1, img2, img3, img4, img5, img6, img1])
    return (
        <div className="instagram-area pd-top-100">
            <div className="section-title text-center">
                <h2 className="title">Instagram Post</h2>
            </div>
            {props.data &&
                <div className="instagram-slider">
                    {imgArr.map(data => {
                        return (
                            <InstagramCard city={data} img={data} />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default InstagramPost;