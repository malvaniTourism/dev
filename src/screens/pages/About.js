<<<<<<< HEAD
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

=======
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

>>>>>>> 568750b3fd37e9afd1dea75c991cae6a6e14ebcc
export default AboutUs;