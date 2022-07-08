import React from "react";
import AboutCard from "../../components/carousel/AboutCard";
import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";

const AboutUs = () => {

    return (
        <div>
            <CustNav />
            <CustHeader/>
            <AboutCard />
            <CustFooter />
        </div>
    )
};

export default AboutUs;