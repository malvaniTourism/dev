import React from "react";
import Image from '../../assets/images/notFound.png'

const imgs = {
    one: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGSurC1dTDHrFf8hCLI2W3T8655CtiuPwQQ&usqp=CAU',
    two: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU'
}
const NotFound = () => {

    return (
        <div>
            <img src={Image} height={300} width={300} />
            <text>Hellllo</text>
        </div>
    )
};

export default NotFound;