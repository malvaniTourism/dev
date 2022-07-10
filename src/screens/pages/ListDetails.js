<<<<<<< HEAD
import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/carousel/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import TourDetails from "../../components/carousel/TourDetails";

const ListDetails = () => {

    return (
        <div>
            <CustNav />
            {/* <Carousel /> */}
            <TourDetails />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

=======
import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/carousel/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import TourDetails from "../../components/carousel/TourDetails";

const ListDetails = () => {

    return (
        <div>
            <CustNav />
            <Carousel />
            <TourDetails />
            <Newsletter />
            <CustFooter />
        </div>
    )
}

>>>>>>> 568750b3fd37e9afd1dea75c991cae6a6e14ebcc
export default ListDetails;