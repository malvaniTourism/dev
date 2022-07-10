<<<<<<< HEAD
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/blog/1.png';
import img2 from '../../assets/img/blog/2.png';
import img3 from '../../assets/img/blog/3.png';

const RecentBlogs = () => {
    return (
        <div className="blog-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title">Recent Blog Posts</h2>
                            <p>
                                Lorem Ipsum is simply dummy text the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s,
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog">
                            <div className="thumb">
                                <img src={img1} alt="blog" />
                                <a className="tag" href="#">
                                    Europe
                                </a>
                            </div>
                            <div className="single-blog-details">
                                <p className="date">19 September 2019</p>
                                <h4 className="title">Why You Shouldn’t Ride Elephants France.</h4>
                                <p className="content">
                                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                                    sollicitudin libero, vel malesuada
                                </p>
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Read More
                                        <i className="la la-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog">
                            <div className="thumb">
                                <img src={img2} alt="blog" />
                                <a className="tag" href="#">
                                    Europe
                                </a>
                            </div>
                            <div className="single-blog-details">
                                <p className="date">19 September 2019</p>
                                <h4 className="title">Aliquam faucibus, nec commodo</h4>
                                <p className="content">
                                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                                    sollicitudin libero, vel malesuada
                                </p>
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Read More
                                        <i className="la la-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog">
                            <div className="thumb">
                                <img src={img3} alt="blog" />
                                <a className="tag" href="#">
                                    Europe
                                </a>
                            </div>
                            <div className="single-blog-details">
                                <p className="date">19 September 2019</p>
                                <h4 className="title">Why You Shouldn’t Ride Elephants France.</h4>
                                <p className="content">
                                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                                    sollicitudin libero, vel malesuada
                                </p>
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Read More
                                        <i className="la la-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

=======
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/blog/1.png';
import img2 from '../../assets/img/blog/2.png';
import img3 from '../../assets/img/blog/3.png';

const RecentBlogs = () => {
    return (
        <div className="blog-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title">Recent Blog Posts</h2>
                            <p>
                                Lorem Ipsum is simply dummy text the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s,
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog">
                            <div className="thumb">
                                <img src={img1} alt="blog" />
                                <a className="tag" href="#">
                                    Europe
                                </a>
                            </div>
                            <div className="single-blog-details">
                                <p className="date">19 September 2019</p>
                                <h4 className="title">Why You Shouldn’t Ride Elephants France.</h4>
                                <p className="content">
                                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                                    sollicitudin libero, vel malesuada
                                </p>
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Read More
                                        <i className="la la-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog">
                            <div className="thumb">
                                <img src={img2} alt="blog" />
                                <a className="tag" href="#">
                                    Europe
                                </a>
                            </div>
                            <div className="single-blog-details">
                                <p className="date">19 September 2019</p>
                                <h4 className="title">Aliquam faucibus, nec commodo</h4>
                                <p className="content">
                                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                                    sollicitudin libero, vel malesuada
                                </p>
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Read More
                                        <i className="la la-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-blog">
                            <div className="thumb">
                                <img src={img3} alt="blog" />
                                <a className="tag" href="#">
                                    Europe
                                </a>
                            </div>
                            <div className="single-blog-details">
                                <p className="date">19 September 2019</p>
                                <h4 className="title">Why You Shouldn’t Ride Elephants France.</h4>
                                <p className="content">
                                    Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                                    sollicitudin libero, vel malesuada
                                </p>
                                <a className="btn-read-more" href="#">
                                    <span>
                                        Read More
                                        <i className="la la-arrow-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

>>>>>>> 568750b3fd37e9afd1dea75c991cae6a6e14ebcc
export default RecentBlogs;