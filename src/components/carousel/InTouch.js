import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import touch from '../../assets/img/others/11.png';

const InTouch = () => {
    return (
        <div className="contact-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-lg-center text-left">
                            <h2 className="title">Get In Touch!</h2>
                            <p>
                                Vestibulum blandit viverra convallis. Pellentesque ligula urna,
                                fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus,
                                consequat eget justo in
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="thumb">
                            <img src={touch} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <form className="tp-form-wrap">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Name</span>
                                        <input type="text" />
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Number</span>
                                        <input type="text" />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Email</span>
                                        <input type="text" />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Message</span>
                                        <textarea defaultValue={""} />
                                    </label>
                                </div>
                                <div className="col-12">
                                    {/* <a className="btn btn-yellow" href="#">
                                        Send Message
                                    </a> */}
                                    <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow">
                                        <text className="whiteAlign bold mdText" href="#">Send Message</text>
                                        <i className="fa fa-paper-plane" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InTouch;