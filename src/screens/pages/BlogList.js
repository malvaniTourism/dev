import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import InTouch from "../../components/carousel/InTouch";
import Newsletter from "../../components/carousel/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import Blogs from "../../components/carousel/Blogs";

const ContactUs = () => {

    return (
        <div>
            <CustNav />
            <Carousel />
            <Blogs />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default ContactUs;