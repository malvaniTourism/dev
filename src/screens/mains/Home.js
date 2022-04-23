import React from "react";
import Services from "../../components/banners/Services";
import IndexHead from "../../components/headers/IndexHead";
import MainNav from "../../components/navbars/MainNav";
import OffrsSwiper from "../../components/Swipers/OffrsSwiper";

const Home = () => {

    return (
        <div>
            <MainNav />
            <IndexHead />
            <Services />
            <OffrsSwiper />
        </div>
    )
};

export default Home;