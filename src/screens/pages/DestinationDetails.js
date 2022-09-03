import React, { useEffect, useState } from "react";
import DestinationBanner from "../../components/banners/DestinationBanner";
import CustHeader from "../../components/headers/CustHeader";
import CustNav from "../../components/navbars/CustNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DestinationCarousel from "../../components/carousel/DestinationCarousel";
import { useLocation } from "react-router-dom";
import { comnGet } from "../../services/comnServ";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import TripPlanCard from "../../components/cards/TripPlanCard";
import VisitsCarousel from "../../components/carousel/VisitsCarousel";
import Review from "../../components/commonComponents/Review";

const DestinationDetails = () => {
    const [data, setData] = useState([])
    const location = useLocation();

    console.log(location);
    useEffect(() => {
        comnGet(`api/v1/${location.state.name}/${location.state.id}`)
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <CustNav />
            <DestinationBanner page={'Details'} />
            <DestinationCarousel />
            <div class="row justify-content-center">
                <div class="col-xl-7 col-sm-7 col-xs-7">
                    <div class="row destinations-details-location-name">
                        <div class="col-lg-12">
                            <h3>{data.name}</h3>
                            <p>{data.tag_line}</p>
                        </div>
                        <div class="col-lg-6">
                            <p>{data.description}</p>
                        </div>
                        <div class="col-lg-6">
                            <p>It accounts for about 16% of the world's human population. The continent is surrounded by the Mediterranean Sea to the Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands.</p>
                        </div>
                    </div>

                    <h4 class="single-page-small-title">Based On Traveller Visits and Local Insights</h4>
                    <VisitsCarousel />

                    <div class="trip-plan-area">
                        <h4 class="single-page-small-title">Plan a trip</h4>
                        <div class="row justify-content-center">
                            <TripPlanCard />
                            <TripPlanCard />
                            <TripPlanCard />
                        </div>
                    </div>

                    <div class="location-details">
                        <h4 class="single-page-small-title">Good To Know</h4>
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="location-details-table">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="title">Country</td>
                                                <td>Africa</td>
                                            </tr>
                                            <tr>
                                                <td class="title">Visa Requirements</td>
                                                <td>Visa Requirements</td>
                                            </tr>
                                            <tr>
                                                <td class="title">Languages Spoken</td>
                                                <td>Afroasiatic languages</td>
                                            </tr>
                                            <tr>
                                                <td class="title">Currency Used</td>
                                                <td>Rant</td>
                                            </tr>
                                            <tr>
                                                <td class="title">Ares (km2)</td>
                                                <td>30.37 million km²</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="btn-wrap text-center">
                                        <a class="btn btn-yellow" href="#"><span>Pdf Download<i class="ti-download"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="location-details-map">
                                    <div id="map"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Review />
                </div>
            </div>

            <Newsletter />
            <CustFooter />
        </div>
    )
};

export default DestinationDetails;