import React, { useEffect, useState } from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
// import InTouch from "../../components/carousel/InTouch";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import Blogs from "../../components/commonComponents/Blogs";

import { comnGet } from '../../services/comnServ';
import Spinner from "../../components/commonComponents/Spinner";
import Background from "../../assets/img/bg/10.png";
import ProductHeader from "../../components/headers/ProductHeader";
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogsData, setBlogsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        comnGet('api/v1/blogs')
            .then(res => {
                if (res.status == 200) {
                    setBlogsData(res.data.data.data)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                }
            })
    }, []);

    const onClick = (id) => {
        navigate('blogdetails', { state: { id } });
    }

    return (
        <div>
            <Spinner active={isLoading} />
            <CustNav />
            <ProductHeader page={'Blogs'} background={Background} />
            <Blogs data={blogsData} onClick={(id) => onClick(id)} />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default BlogList;