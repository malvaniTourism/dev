import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/carousel/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import BlgDetails from "../../components/carousel/BlgDetails";

const BlogDetails = () => {

    return (
        <div>
            <CustNav />
            <Carousel />
            <BlgDetails />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default BlogDetails;