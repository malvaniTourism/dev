import React from "react";
import CustNav from "../../components/navbars/CustNav";
import Carousel from "../../components/carousel/Carousel";
import Newsletter from "../../components/commonComponents/Newsletter";
import CustFooter from "../../components/footers/CustFooter";
import ListFilter from "../../components/filters/ListFilter";
import ProductHeader from "../../components/headers/ProductHeader";
import Background from "../../assets/img/banner/4.png";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const List = (props) => {
    const location = useLocation();

    return (
        <div>
            <CustNav />
            {/* <Carousel page={page ?? 'list'} /> */}
            <ProductHeader page={props.selectedProduct ?? 'list'} background={Background} />
            <ListFilter projName={location.state?.name||''} />
            {/* <Newsletter /> */}
            <CustFooter />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProduct: state.commonState.selectedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);