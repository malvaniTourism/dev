import React from "react";
import AboutCard from "../../components/cards/AboutCard";
import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import AboutCardInfo from "../../components/carousel/AboutCardInfo";
import Team from "../../components/commonComponents/Team";

const AboutUs = () => {

    return (
        <div>
            <CustNav />
            <CustHeader />
            <AboutCardInfo />
            <AboutCard />
            <Team />
            <CustFooter />
        </div>
    )
};

export default AboutUs;