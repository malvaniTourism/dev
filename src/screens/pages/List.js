import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import ListFilter from "../../components/filters/ListFilter";
import { useLocation } from 'react-router-dom'

const List = () => {
    const location = useLocation()
    const { page } = location.state

    return (
        <div>
            <CustNav />
            <Carousel page={page} />
            <ListFilter />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

export default List;