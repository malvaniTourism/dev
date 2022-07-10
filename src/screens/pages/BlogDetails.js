import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import BlogDetail from "../../components/carousel/BlogDetails";

const BlogDetails = () => {

    return (
        <div>
            <CustNav />
            <Carousel />
            <BlogDetail />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default BlogDetails;