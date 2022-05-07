import React from "react";
import Services from "../../components/banners/Services";
import IndexHead from "../../components/headers/IndexHead";
import MainNav from "../../components/navbars/MainNav";
import HolidaySwiper from "../../components/Swipers/HolidaySwiper";
import OffrsSwiper from "../../components/Swipers/OffrsSwiper";
import CafeSwiper from "../../components/Swipers/CafeSwiper";
import CustFooter from "../../components/footers/CustFooter";
import CustNav from "../../components/navbars/CustNav";
import CustHeader from "../../components/headers/CustHeader";
import CustMainSearchBar from "../../components/filters/CustMainSearchBar";
import CustOffers from "../../components/Swipers/CustOffers";

const Home = () => {

    return (
        <div>
            <CustNav />
            <CustHeader />
            <CustMainSearchBar />
            <Services />
            <CustOffers />
            <OffrsSwiper />
            <HolidaySwiper />
            <CafeSwiper />
            <CustFooter />
        </div>
    )
};

export default Home;