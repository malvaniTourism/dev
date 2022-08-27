import React, { useEffect, useState } from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import CityList from "../../components/carousel/CityList";
import { comnGet } from "../../services/comnServ";
import Spinner from "../../components/commonComponents/Spinner";
import DestinationBanner from "../../components/banners/DestinationBanner";

const Cities = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        comnGet('api/v1/cities')
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
            <DestinationBanner page={'Cities'} />
            <CityList cities={cities} />
            <CustFooter />
        </div>
    )
};

export default Cities;