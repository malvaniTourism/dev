import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import StarRatings from 'react-star-ratings';

const Cafe = () => {

    return (
        <div className='cafeCard whiteBold' style={{ background: `linear-gradient(180deg, #090523 31.77%, rgba(11, 6, 44, 0.46) 61.98%, rgba(196, 196, 196, 0) 100%), url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }} >
            <div className='cafeCardDiv' style={{ paddingLeft: 35 }}>
                <div>
                    <HiLocationMarker color='#fff' />
                    <text>Devgad</text>
                </div>
                <div>
                    <text className='lgText'>The Riverine</text><br />
                    <text className='xsmText'>Snacks, India</text>
                </div>
                <div>
                    <StarRatings
                        rating={2.403}
                        starDimension="20px"
                        starSpacing="5px"
                        starRatedColor='#FFB524'
                        starEmptyColor='transparent'
                    /><br />
                    <text className='medText'>₹ 400</text><br />
                    <text className='xsmText'>Cost for two</text><br />
                </div>
            </div>
        </div>
    )
};

export default Cafe;