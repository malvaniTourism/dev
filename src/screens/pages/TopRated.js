import React from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import TopRatedCard from "../../components/carousel/TopRatedCard";

const AboutUs = () => {

    return (
        <div>
            <CustNav />
            <CustHeader/>
            <TopRatedCard />
            <CustFooter />
        </div>
    )
};

export default AboutUs;