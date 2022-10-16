import React from "react";
import AboutCard from "../../components/cards/AboutCard";
import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import AboutCardInfo from "../../components/carousel/AboutCardInfo";
import Team from "../../components/commonComponents/Team";
import Background from "../../assets/img/bg/5.png";
import ProductHeader from "../../components/headers/ProductHeader";
import CustomNavbar from "../../components/navbars/CustomNavbar";

const AboutUs = () => {

    return (
        <div>
            {/* <CustNav /> */}
            <CustomNavbar />
            <ProductHeader page={'About Us'} background={Background} />
            <AboutCardInfo />
            <AboutCard />
            <Team />
            <CustFooter />
        </div>
    )
};

export default AboutUs;