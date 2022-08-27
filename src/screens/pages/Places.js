import React, { useEffect, useState } from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import { comnGet } from "../../services/comnServ";
import Spinner from "../../components/commonComponents/Spinner";
import PlaceList from "../../components/carousel/PlaceList";
import DestinationBanner from "../../components/banners/DestinationBanner";

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
    }, []);

    return (
        <div>
            <Spinner active={isLoading} />
            <CustNav />
            <DestinationBanner page={'Places'} />
            <PlaceList cities={places} />
            <CustFooter />
        </div>
    )
};

export default Places;