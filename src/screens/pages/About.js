import React from "react";
import AboutCard from "../../components/carousel/AboutCard";
import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import AboutCardInfo from "../../components/carousel/AboutCardInfo";
import Team from "../../components/carousel/Team";

const AboutUs = () => {

    return (
        <div>
            <CustNav />
            <CustHeader/>
            <AboutCardInfo />
            <AboutCard />
            <Team />
            <CustFooter />
        </div>
    )
};

export default AboutUs;