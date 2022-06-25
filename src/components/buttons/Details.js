import React from "react";

const Details = (props) => {
    const myNavigate = () => {
        props.navigateTo();
    }

    return (
        <button className='detBtn lgRadius' onClick={props.navigateTo}>Details</button>
    )
};

export default Details;