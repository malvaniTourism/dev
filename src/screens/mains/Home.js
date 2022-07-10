<<<<<<< HEAD
import React from "react";
import Services from "../../components/banners/Services";
import UpComming from "../../components/carousel/UpComming";
import Ads from "../../components/carousel/Ads";
import InstagramPost from "../../components/carousel/InstagramPost";
import OurClients from "../../components/carousel/OurClients";
import RecentBlogs from "../../components/carousel/RecentBlogs";
import OurServices from "../../components/carousel/OurServices";
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
import HolidayPlans from "../../components/Swipers/HolidayPlans";
import UpCommingHome from "../../components/carousel/UpCommingHome";
import Newsletter from "../../components/carousel/Newsletter";

const Home = () => {

    return (
        <div>
            <CustNav />
            <CustHeader />
            <CustMainSearchBar />
            {/* <UpComming /> */}
            <OurServices />
            {/* <CustOffers /> */}
            <HolidayPlans />
            {/* <UpCommingHome /> */}
            {/* <Services /> */}
            {/* <OffrsSwiper /> */}
            {/* <HolidaySwiper /> */}
            {/* <CafeSwiper /> */}
            <RecentBlogs />
            <Ads />
            <OurClients />
            {/* <InstagramPost /> */}
            <Newsletter />
            <CustFooter />
        </div>
    )
};

=======
import React from "react";
import Services from "../../components/banners/Services";
import UpComming from "../../components/carousel/UpComming";
import Ads from "../../components/carousel/Ads";
import InstagramPost from "../../components/carousel/InstagramPost";
import OurClients from "../../components/carousel/OurClients";
import RecentBlogs from "../../components/carousel/RecentBlogs";
import OurServices from "../../components/carousel/OurServices";
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
import HolidayPlans from "../../components/Swipers/HolidayPlans";
import UpCommingHome from "../../components/carousel/UpCommingHome";

const Home = () => {

    return (
        <div>
            <CustNav />
            <CustHeader />
            <CustMainSearchBar />
            {/* <UpComming /> */}
            <OurServices />
            {/* <CustOffers /> */}
            <HolidayPlans />
            <UpCommingHome />
            {/* <Services /> */}
            {/* <OffrsSwiper /> */}
            {/* <HolidaySwiper /> */}
            {/* <CafeSwiper /> */}
            <RecentBlogs />
            <Ads />
            <OurClients />
            {/* <InstagramPost /> */}
            <CustFooter />
        </div>
    )
};

>>>>>>> 568750b3fd37e9afd1dea75c991cae6a6e14ebcc
export default Home;