import React from "react";

const Services = () => {

    return (
        <div className="col-12 d-flex flex-lg-row flex-column justify-content-lg-around align-items-center" style={{ marginTop: 80, marginBottom: 80 }}>
            <div>
                <div className="d-flex flex-lg-row flex-sm-column align-items-center servDiv">
                    <text className="lgText whiteBold" style={{ marginRight: 10, marginLeft: 5 }}>Hotels</text>
                    <text className="whiteAlign">Special offers & Discounts on the Best hotels! </text>
                </div>
                <div className="d-flex flex-lg-row flex-sm-column align-items-center servDiv">
                    <text className="lgText whiteBold" style={{ marginRight: 10, marginLeft: 5 }}>Tours</text>
                    <text className="whiteAlign">Packed Holiday Plans!</text>
                </div>
                <div className="d-flex flex-lg-row flex-sm-column align-items-center servDiv">
                    <text className="lgText whiteBold" style={{ marginRight: 10, marginLeft: 5 }}>Restaurants</text>
                    <text className="whiteAlign">Best Places to eat!</text>
                </div>
            </div>
            <div style={{ width: 250 }}>
                <h1 className="text-center mx-auto" style={{ lineHeight: 2.5 }}>Our Services</h1>
                <text className="text-center">No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ignota postulant ea mea ei vis ridens moderatius.</text>
            </div>
        </div>
    )
};

export default Services;