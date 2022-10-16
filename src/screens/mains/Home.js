import React, { useEffect, useState } from "react";
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
import Newsletter from "../../components/commonComponents/Newsletter";
import BookNow from "../../components/buttons/BookNow";
import { comnGet, comnPost } from '../../services/comnServ';
import { connect } from "react-redux";
import { saveLoginUser } from "../../actions/commonActions";
import CategoriesCard from "../../components/cards/CategoriesCard";
import FlipCard from "../../components/cards/FlipCard";
import FoodCardFront from "../../components/cards/FoodCardFront";
import FoodFiesta from "../../components/carousel/FoodFiesta";
import CarouselHeader from "../../components/headers/CarouselHeader";
import CustomNavbar from "../../components/navbars/CustomNavbar";
//₹
const Home = (props) => {
    const [data, setData] = useState([])
    const [food, setFood] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        var data = new FormData();
        data.append('email', 'kamblepranav460@gmail.com');
        data.append('password', '123456');

        comnPost('/api/auth/login', data)
            .then(res => {
                localStorage.setItem('apiToken', res.data.data.access_token)
                localStorage.setItem('user_id', res.data.data.user.id)
                props.saveLoginUser(res.data.data.user)
            })
            .then(() => getData())
    }, [])

    const getData = () => {
        comnGet('/api/v1/landingpage')
            .then(res => {
                setData(res.data.data)
                console.log('landing data--',res.data.data);
            })
            .catch(err => console.error(err))

        comnGet('/api/v1/food/1')
            .then(res => setFood(res.data.data))
            .catch(err => console.error(err))

    }

    return (
        <div>
            {/* <CustNav /> */}
            <CustomNavbar />
            {/* <CarouselHeader /> */}
            {/* <CustHeader /> */}
            <IndexHead />
            <CustMainSearchBar />
            {/* <UpComming /> */}
            <CategoriesCard data={data?.categories} />
            {/* <OurServices /> */}
            {/* <CustOffers /> */}
            <HolidayPlans data={data.projects}/>
            <UpCommingHome data={data.projects} />
            <FoodFiesta />
            <InstagramPost data={data?.cities} />
            {/* <Services /> */}
            {/* <OffrsSwiper /> */}
            {/* <HolidaySwiper /> */}
            {/* <CafeSwiper /> */}
            {/* <RecentBlogs data={data?.blogs?.slice(0, 3)} /> */}
            <Ads />
            <OurClients />
            <CustFooter />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        loginUser: state.commonState.loginUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveLoginUser: data => {
             dispatch(saveLoginUser(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);