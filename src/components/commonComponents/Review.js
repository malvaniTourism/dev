import React from 'react';
import Img from '../../assets/img/others/01.png'

const Review = () => {
    return (
        <div class="location-review-area">
            <div class="row">
                <div class="col-lg-8">
                    <form class="tp-form-wrap bg-gray tp-form-wrap-one">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="single-page-small-title">Write A Review</h4>
                            </div>
                            <div class="col-md-6">
                                <div class="tp-review-meta text-lg-right">
                                    <span class="ml-0">Assigned Rating</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap">
                                    <span class="single-input-title">Name</span>
                                    <input type="text" />
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap">
                                    <span class="single-input-title">Email</span>
                                    <input type="text" />
                                </label>
                            </div>
                            <div class="col-lg-12">
                                <label class="single-input-wrap">
                                    <span class="single-input-title">comments</span>
                                    <textarea></textarea>
                                </label>
                            </div>
                            <div class="col-12">
                                <a class="btn btn-blue" href="#">+ Add Photo</a>
                                <a class="btn btn-yellow float-right" href="#">Send</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-xl-3 col-lg-4 offset-xl-1 mt-5 mt-lg-0 hidden-md">
                    <a href="#">
                        <img src={Img} alt="ads" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Review;