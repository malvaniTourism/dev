import React from "react";
import Services from "../../components/banners/Services";
import IndexHead from "../../components/headers/IndexHead";
import MainNav from "../../components/navbars/MainNav";
import HolidaySwiper from "../../components/Swipers/HolidaySwiper";
import OffrsSwiper from "../../components/Swipers/OffrsSwiper";
import CafeSwiper from "../../components/Swipers/CafeSwiper";

const Home = () => {

    return (
        <div>
            <MainNav />
            <IndexHead />
            <Services />
            <OffrsSwiper />
            <HolidaySwiper />
            <CafeSwiper/>
        </div>
    )
};

export default Home;