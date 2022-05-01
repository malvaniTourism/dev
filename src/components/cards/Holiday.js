import React from 'react';
import { HiLocationMarker, HiOutlineClock, HiStar } from 'react-icons/hi';
import { RiCalendarEventFill } from 'react-icons/ri';
import Details from '../buttons/Details';


const Holiday = () => {

    return (
        <div className='holiCard'>
            <div className='commonPic offDiscImg' style={{ background: `url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }} />
            <div className='cardInfo'>
                <div className='bold lgText'>Devgad Taramumbri</div>
                <div>
                    <HiLocationMarker color="#C4C4C4" fontSize="14px" />
                    <text className='greyText locText'>Devgad</text>
                </div>
                <div className='Row summ'>
                    <div>
                        <RiCalendarEventFill color='#FF0038' />
                        <text>  8 Apr</text>
                    </div>
                    <div>
                        <HiOutlineClock color='#FF0038' />
                        <text>  4 days</text>
                    </div>
                    <div>
                        <HiStar color='#FF0038' />
                        <text>  4.2</text>
                    </div>
                </div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div>
                    <Details />
                </div>
            </div>
        </div>
    )
};

export default Holiday;