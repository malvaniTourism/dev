import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/carousel/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import ListFilter from "../../components/carousel/ListFilter";

const ContactUs = () => {

    return (
        <div>
            <CustNav />
            <Carousel />
            <ListFilter />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default ContactUs;