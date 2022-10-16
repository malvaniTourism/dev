import React from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import TopRatedCard from "../../components/cards/TopRatedCard";
import CustomNavbar from "../../components/navbars/CustomNavbar";

const AboutUs = () => {

    return (
        <div>
            {/* <CustNav /> */}
            <CustomNavbar />
            <CustHeader />
            <TopRatedCard />
            <CustFooter />
        </div>
    )
};

export default AboutUs;