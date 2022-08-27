import React, { useEffect, useState } from "react";
import Spinner from "../../components/commonComponents/Spinner";
import ProductHeader from "../../components/headers/ProductHeader";
import CustFooter from "../../components/footers/CustFooter";
import Background from "../../assets/img/bg/5.png";
import CustNav from "../../components/navbars/CustNav";
import { comnGet } from "../../services/comnServ";

const Profile = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        comnGet('api/auth/user-profile')
            .then(res => {
                if (res.data.success == true) {
                    setUserData(res.data.data)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Spinner />
            <CustNav />
            <ProductHeader page={'Profile'} background={Background} />
            <div style={{ padding: 50 }}>
                <h2>Hello, {userData.name}</h2>
            </div>
            <CustFooter />
        </div>
    )
};

export default Profile;