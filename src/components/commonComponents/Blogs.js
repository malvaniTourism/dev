import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img/blog/1.png';
import img2 from '../../assets/img/blog/2.png';
import img3 from '../../assets/img/blog/3.png';
import img4 from '../../assets/img/blog/4.png';
import img5 from '../../assets/img/blog/5.png';
import img6 from '../../assets/img/blog/6.png';
import img7 from '../../assets/img/blog/7.png';
import img8 from '../../assets/img/blog/8.png';
import img12 from '../../assets/img/blog-details/12.png';
import img13 from '../../assets/img/blog-details/13.png';
import img14 from '../../assets/img/blog-details/14.png';
import img15 from '../../assets/img/blog-details/15.png';
import img16 from '../../assets/img/others/01.png';
import moment from "moment";

const Blogs = (props) => {

    return (
        <div className="blog-area pd-top-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row justify-content-center">
                            {props.data.map(data => {
                                return (
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="thumb">
                                                <img src={img1} alt="blog" />
                                                <a className="tag" href="#">
                                                    Europe
                                                </a>
                                            </div>
                                            <div className="single-blog-details">
                                                <p className="date">{moment(data.created_at).format('DD MMMM YYYY')}</p>
                                                <h4 className="title">
                                                    <a href="blog-details.html">
                                                        {props.name}
                                                    </a>
                                                </h4>
                                                <p className="content">
                                                    {data.description}
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
                                )
                            })}
                            <div className="col-lg-12  text-md-center text-left">
                                <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
                                    <ul>
                                        <li>
                                            <a className="prev page-numbers" href="#">
                                                <i className="la la-long-arrow-left" />
                                            </a>
                                        </li>
                                        <li>
                                            <span className="page-numbers">1</span>
                                        </li>
                                        <li>
                                            <span className="page-numbers current">2</span>
                                        </li>
                                        <li>
                                            <a className="page-numbers" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li>
                                            <a className="page-numbers" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li>
                                            <a className="next page-numbers" href="#">
                                                <i className="la la-long-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="sidebar-area sidebar-area-4">
                            <div className="widget widget_search bg-none pd-none">
                                <form className="search-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <button className="submit-btn" type="submit">
                                        <i className="ti-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories">
                                <h2 className="widget-title">Category</h2>
                                <ul>
                                    <li>
                                        <a href="#">Software</a> 33
                                    </li>
                                    <li>
                                        <a href="#">App Landing</a> 81
                                    </li>
                                    <li>
                                        <a href="#">Saas Landing</a> 12
                                    </li>
                                    <li>
                                        <a href="#">Design Studio</a> 17
                                    </li>
                                    <li>
                                        <a href="#">Business Studio</a> 21
                                    </li>
                                    <li>
                                        <a href="#">Product Showcase</a> 62
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-recent-post">
                                <h2 className="widget-title">Recent Post</h2>
                                <ul>
                                    <li>
                                        <div className="media">
                                            <img src={img12} alt="widget" />
                                            <div className="media-body">
                                                <span className="post-date">20 July 2019</span>
                                                <h6 className="title">
                                                    <a href="#">Duis neque vel elit pharetra vestibulu</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <img src={img13} alt="widget" />
                                            <div className="media-body">
                                                <span className="post-date">21 July 2019</span>
                                                <h6 className="title">
                                                    <a href="#">Praesent eu dolor eu orci vehicula</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <img src={img14} alt="widget" />
                                            <div className="media-body">
                                                <span className="post-date">14 July 2019</span>
                                                <h6 className="title">
                                                    <a href="#">Aenean non accumsan ante. Duis</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="media">
                                            <img src={img15} alt="widget" />
                                            <div className="media-body">
                                                <span className="post-date">20 July 2019</span>
                                                <h6 className="title">
                                                    <a href="#">Pellentesque habitant morbi</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_tag_cloud">
                                <h2 className="widget-title">Tags</h2>
                                <div className="tagcloud">
                                    <a href="#">Adbeger</a>
                                    <a href="#">Religion</a>
                                    <a href="#">Relax</a>
                                    <a href="#">Nature</a>
                                    <a href="#">Descover</a>
                                </div>
                            </div>
                            <div className="widget_ads">
                                <a href="#">
                                    <img className="w-100" src={img16} alt="img" />
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;