import React, { useEffect, useState } from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import CityList from "../../components/carousel/CityList";
import { comnGet } from "../../services/comnServ";
import Spinner from "../../components/commonComponents/Spinner";

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        comnGet('api/v1/places')
            .then(res => {
                console.log('city', res);
                setPlaces(res.data.data.data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            <Spinner active={isLoading} />
            <CustNav />
            <CustHeader />
            <CityList cities={places} />
            <CustFooter />
        </div>
    )
};

export default Places;