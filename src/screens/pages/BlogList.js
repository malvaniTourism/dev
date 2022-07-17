import React, { useEffect, useState } from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
// import InTouch from "../../components/carousel/InTouch";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import Blogs from "../../components/commonComponents/Blogs";

import { comnGet } from '../../services/comnServ';
import Spinner from "../../components/commonComponents/Spinner";

const BlogList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogsData, setBlogsData] = useState([]);

    useEffect(() => {
        comnGet('v1/blogs')
            .then(res => {
                if (res.status == 200) {
                    setBlogsData(res.data.data.data)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                }
            })
    }, []);

    return (
        <div>
            <Spinner active={isLoading} />
            <CustNav />
            <Carousel page={'Blogs'} />
            <Blogs data={blogsData} />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default BlogList;