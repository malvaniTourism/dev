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
import CustomNavbar from "../../components/navbars/CustomNavbar";

const BlogList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogsData, setBlogsData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        getBlogs(page);
    }, [page]);

    const getBlogs = (page) => {
        console.log(page);
        comnGet(`/api/v1/blogs?page=${page}`)
            .then(res => {
                if (res.status == 200) {
                    setBlogsData(res.data.data.data)
                    setIsLoading(false)
                    setTotalPages(res.data.data.last_page)
                } else {
                    setIsLoading(false)
                }
            })
    }

    const onClick = (id) => {
        navigate('blogdetails', { state: { id } });
    }

    const getLatestProject = (name) => {
        navigate('/list', { state: { name } })
    }

    return (
        <div>
            <Spinner active={isLoading} />
            {/* <CustNav /> */}
            <CustomNavbar />
            <ProductHeader page={'Blogs'} background={Background} />
            <Blogs data={blogsData} pageCount={totalPages} setPage={(v) => setPage(v)} onClick={(id) => onClick(id)} getLatestProject={(name) => getLatestProject(name)} />
            {/* <Newsletter /> */}
            <CustFooter />
        </div>
    )
}

export default BlogList;