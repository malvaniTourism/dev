import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Newsletter = () => {

    return (
        <div className="newslatter-area pd-top-108">
            <div className="container">
                <div className="newslatter-area-wrap border-tp-solid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
                            <div className="section-title mb-md-0">
                                <h2 className="title">Newsletter</h2>
                                <p>Sign up to receive the best offers</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
                            <div className="input-group newslatter-wrap">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope" />
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-yellow" type="button">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;