import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import InTouch from "../../components/commonComponents/InTouch";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";

const ContactUs = () => {

    return (
        <div>
            <CustNav />
            <Carousel />
            <InTouch />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default ContactUs;