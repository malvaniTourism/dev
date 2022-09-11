import React from "react";
import img28 from '../../assets/img/destination-list/28.png';
import Path from "../../services/baseUrl";

const CitySingleCard = ({ data, showDetails, width }) => {
    console.log('city data=- =', data);
    let Img = Path.API_PATH + data.bg_image_url

    return (
        <div style={{width: width}} onClick={() => showDetails()}>
            <div
                className="single-upconing-card style-two wow animated fadeInUp citySingle"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
            >
                <div
                    className="shadow"
                >
                    <img src={Img} alt="img" style={{minHeight: 218}} />
                </div>
                <div className="details">
                    <h1 className="title">
                        <text href="#">{data.name}</text>
                    </h1>
                    <h3>
                    <text className="title">{data.tag_line}</text>
                    </h3>
                </div>
            </div>
        </div>
    )
};

export default CitySingleCard;