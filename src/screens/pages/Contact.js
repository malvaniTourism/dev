import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import InTouch from "../../components/commonComponents/InTouch";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import ProductHeader from "../../components/headers/ProductHeader";
import Background from "../../assets/img/bg/12.png";
import CustomNavbar from "../../components/navbars/CustomNavbar";

const ContactUs = () => {

    return (
        <div>
            {/* <CustNav /> */}
            <CustomNavbar />
            <ProductHeader page={'Contact Us'} background={Background} />
            <InTouch />
            {/* <Newsletter /> */}
            <CustFooter />
        </div>
    )
}

export default ContactUs;