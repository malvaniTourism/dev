import React, { useEffect, useState } from "react";

import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import CustFooter from "../../components/footers/CustFooter";
import { comnGet } from "../../services/comnServ";
import Spinner from "../../components/commonComponents/Spinner";
import PlaceList from "../../components/carousel/PlaceList";
import DestinationBanner from "../../components/banners/DestinationBanner";
import CustomNavbar from "../../components/navbars/CustomNavbar";

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        comnGet(`/api/v1/placecategories?page=${page}`)
            .then(res => {
                setPlaces(res.data.data.data);
                setIsLoading(false);
                setTotalPages(res.data.data.last_page);
            })
    }, [page]);

    return (
        <div>
            <Spinner active={isLoading} />
            {/* <CustNav /> */}
            <CustomNavbar />
            <DestinationBanner page={'Places'} />
            <PlaceList places={places} setPage={(v) => setPage(v)} pageCount={totalPages} />
            <CustFooter />
        </div>
    )
};

export default Places;