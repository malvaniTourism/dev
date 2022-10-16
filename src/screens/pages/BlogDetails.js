import React, { useState, useEffect } from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import BlogDetail from "../../components/carousel/BlogDetails";
import ProductHeader from "../../components/headers/ProductHeader";
import Background from "../../assets/img/bg/10.png";
import { useLocation } from "react-router-dom";
import { comnGet } from "../../services/comnServ";
import Spinner from "../../components/commonComponents/Spinner";
import CustomNavbar from "../../components/navbars/CustomNavbar";

const BlogDetails = () => {
    const [data, setData] = useState([]);
    const [posted, setIsPosted] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation();

    useEffect(() => {
        comnGet('/api/v1/blog/' + location.state.id)
        .then(res => {
            setData(res.data.data)
            setIsPosted(false)
            setIsLoading(false)
        })
        .catch(err => console.error(err))
    }, [posted])

    return (
        <div>
            <Spinner active={isLoading} />
            {/* <CustNav /> */}
            <CustomNavbar />
            <ProductHeader page={'Blogs'} background={Background} />
            <BlogDetail data={data} isPosted={setIsPosted} setIsLoading={(value) => setIsLoading(value)} />
            {/* <Newsletter /> */}
            <CustFooter />
        </div>
    )
}

export default BlogDetails;