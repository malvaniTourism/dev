import React from "react";
import { connect } from "react-redux";
import Image from '../../assets/images/arrow.png'
import { saveData } from "../../actions/commonActions";

const BookNow = (props) => {
    const callClick = () => {
        props.saveData('id'); //save state to store
        console.log('get state from store', props.custId);
    }

    return (
        <div className="bkNow" onClick={() => callClick()}>
            <text className="whiteAlign bold smlText">BOOK NOW</text>
            <img alt="bk_btn" className="bkArrow" src={Image} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        custId: state.commonState.cred,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveData: (data) => {
            dispatch(saveData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookNow)