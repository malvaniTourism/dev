import React, { useEffect, useState } from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import CityList from "../../components/carousel/CityList";
import { comnGet } from "../../services/comnServ";
import Spinner from "../../components/commonComponents/Spinner";

const Cities = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        comnGet('v1/cities')
            .then(res => {
                console.log('city', res);
                setCities(res.data.data.data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            <Spinner active={isLoading} />
            <CustNav />
            <CustHeader />
            <CityList cities={cities} />
            <CustFooter />
        </div>
    )
};

export default Cities;