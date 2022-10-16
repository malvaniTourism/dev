import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import TourDetails from "./TourDetails";
import CustomNavbar from "../../components/navbars/CustomNavbar";

const ListDetails = () => {

    return (
        <div>
            {/* <CustNav /> */}
            <CustomNavbar />
            {/* <Carousel /> */}
            <TourDetails />
            {/* <Newsletter /> */}
            <CustFooter />
        </div>
    )
}

export default ListDetails;