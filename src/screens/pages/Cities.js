import React from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import CityList from "../../components/carousel/CityList";

const Cities = () => {

    return (
        <div>
            <CustNav />
            {/* <CustHeader/> */}
            <CityList />
            <CustFooter />
        </div>
    )
};

export default Cities;