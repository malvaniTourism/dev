import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import InTouch from "../../components/commonComponents/InTouch";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import ProductHeader from "../../components/headers/ProductHeader";
import Background from "../../assets/img/bg/12.png";

const ContactUs = () => {

    return (
        <div>
            <CustNav />
            <ProductHeader page={'Contact Us'} background={Background} />
            <InTouch />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default ContactUs;