import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img/blog-details/1.png';
import img2 from '../../assets/img/blog-details/2.png';
import img3 from '../../assets/img/blog-details/3.png';
import img4 from '../../assets/img/blog-details/4.png';
import img5 from '../../assets/img/blog-details/5.png';
import img6 from '../../assets/img/blog-details/6.png';
import img7 from '../../assets/img/blog-details/7.png';
import img8 from '../../assets/img/blog-details/8.png';
import img9 from '../../assets/img/blog-details/8.png';
import img10 from '../../assets/img/blog-details/8.png';
import img11 from '../../assets/img/blog-details/8.png';
import img12 from '../../assets/img/blog-details/12.png';
import img13 from '../../assets/img/blog-details/13.png';
import img14 from '../../assets/img/blog-details/14.png';
import img15 from '../../assets/img/blog-details/15.png';
import img16 from '../../assets/img/others/01.png';

const BlgDetails = () => {
    return (
        <div className="blog-details-area pd-top-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-blog mb-0">
                            <div className="thumb">
                                <img src={img1} alt="blog" />
                            </div>
                            <div className="single-blog-details">
                                <p className="date mb-0">19 September 2019</p>
                                <h3 className="title">Why You Shouldn’t Ride Elephants France.</h3>
                                <p className="content mb-0">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                                    dolor sit amet.
                                </p>
                            </div>
                        </div>
                        {/* details-blockquote-start */}
                        <blockquote className="blockquote tp-blockquote bg-dark-blue">
                            <p className="mb-0">
                                Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
                                dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed
                                condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet,
                                finibus id turpis. Aliquam semper fringilla semper. Sed nec velit
                                sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed
                                interdum egestas, nibh ex maximus arcu, non posuere sem nulla in
                                augue. Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra
                            </p>
                        </blockquote>
                        {/* details-blockquote-end */}
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr
                        </p>
                        <h4 className="single-page-small-title mt-5">
                            Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
                            placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies
                            fringilla massa.
                        </h4>
                        {/* details-gallery-start */}
                        <div className="gallery-area">
                            <div className="containerss">
                                <div className="gallery-filter-area row custom-gutter">
                                    <div className="gallery-sizer col-1" />
                                    {/* gallery-item */}
                                    <div className="tp-gallery-item col-md-4 col-sm-6 mb-10">
                                        <div className="tp-gallery-item-img">
                                            <img src={img2} alt="image" />
                                        </div>
                                    </div>
                                    {/* gallery-item */}
                                    <div className="tp-gallery-item col-md-4 col-sm-6">
                                        <div className="tp-gallery-item-img">
                                            <img src={img3} alt="image" />
                                        </div>
                                    </div>
                                    {/* gallery-item */}
                                    <div className="tp-gallery-item col-md-4 col-sm-6">
                                        <div className="tp-gallery-item-img">
                                            <img src={img4} alt="image" />
                                        </div>
                                    </div>
                                    {/* gallery-item */}
                                    <div className="tp-gallery-item col-md-4 col-sm-6">
                                        <div className="tp-gallery-item-img">
                                            <img src={img5} alt="image" />
                                        </div>
                                    </div>
                                    {/* gallery-item */}
                                    <div className="tp-gallery-item col-md-4 col-sm-6">
                                        <div className="tp-gallery-item-img">
                                            <img src={img6} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* details-gallery-end */}
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        {/* details-video-start */}
                        <h4 className="single-page-small-title mt-5">
                            Praesent eu dolor eu orci vehicula euismod.
                        </h4>
                        <div className="video-popup-wrap style-two">
                            <div className="thumb">
                                <img src={img7} alt="video" />
                            </div>
                            <div className="video-popup-btn">
                                <a
                                    href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                                    className="video-play-btn mfp-iframe"
                                >
                                    <i className="fa fa-play" />
                                </a>
                            </div>
                        </div>
                        {/* details-video-end */}
                        <p>
                            Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <div className="row tag-share-area">
                            <div className="col-lg-6">
                                <span className="mr-2">Share:</span>
                                <ul className="social-icon style-two">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pinterest" href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <div className="single-blog-post-tags d-flex">
                                    <span className="all-tags-title">Related Tags :</span>
                                    <div className="all-tags">
                                        <a href="#">Europe</a>
                                        <a href="#">Natural</a>
                                        <a href="#">Travel</a>
                                        <a href="#">Discover</a>
                                        <a href="#">Travel</a>
                                        <a href="#">Asia</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="navigation post-navigation single-post-navigation">
                            <div className="nav-links tp-control-nav">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-6 col-6 ">
                                        <div className="nav-previous w-100">
                                            <a href="#">
                                                <span className="slick-arrow float-left">
                                                    <i className="la la-long-arrow-left" />
                                                </span>
                                                <span className="nav-post-text pl-2 float-left">Prev</span>
                                                <h4 className="float-left">
                                                    Why You Shouldn’t Ride Elephants In Thailand
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-6  offset-xl-2">
                                        <div className="nav-next w-100">
                                            <a href="#">
                                                <span className="pr-2 nav-post-text">Next</span>
                                                <span className="slick-arrow float-right">
                                                    <i className="la la-long-arrow-right" />
                                                </span>
                                                <h4 className="float-right">
                                                    10 Best Highways for Romantic Long Drives
                                                </h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        {/* author-area-start */}
                        <div className="author-area media">
                            <div className="media-left">
                                <img src={img8} alt="img" />
                            </div>
                            <div className="media-body">
                                <h4>Keanu Wood</h4>
                                <p>
                                    Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl,
                                    eget vehicula lorem sodales eget. Donec quis volutpat orci. Sed
                                    ipsum felis, tristique id egestas et, convallis ac velit. In
                                    consequat dolor libero, nec luctus orci rutrum nec. Phasellus vel
                                    arcu sed nibh ornare accumsan. Vestibulum in elementum erat.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Aenean laoreet rhoncus ipsum eget tempus. Praesent convallis
                                    fermentum sagittis.
                                </p>
                                <ul className="social-icon style-three">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pinterest" href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* author-area-end */}
                        {/* comments-area-start */}
                        <div className="comments-area">
                            <h4 className="comments-title">Comments</h4>
                            <ul className="comment-list">
                                <li>
                                    <div className="single-comment-wrap">
                                        <div className="thumb">
                                            <img src={img9} alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Tyler Bailey</h4>
                                            <span className="date">17 SEP 2019</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                                ipsum dolor sit amet, consetetur sadipscing elitr
                                            </p>
                                            <a href="#" className="reply btn btn-yellow">
                                                <span>
                                                    <i className="fa fa-reply" />
                                                    Reply
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <ul className="children">
                                        <li>
                                            <div className="single-comment-wrap">
                                                <div className="thumb">
                                                    <img src={img10} alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">Laurie</h4>
                                                    <span className="date">17 SEP 2019</span>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                        sed diam nonumy eirmod tempor invidunt ut labore et
                                                        dolore magna aliquyam erat, sed diam voluptua. At vero
                                                        eos et accusam et justo duo dolores et ea rebum. Stet
                                                        clita kasd gubergren
                                                    </p>
                                                    <a href="#" className="reply btn btn-yellow">
                                                        <span>
                                                            <i className="fa fa-reply" />
                                                            Reply
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="single-comment-wrap">
                                        <div className="thumb">
                                            <img src={img11} alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Eliza Jordan</h4>
                                            <span className="date">17 SEP 2019</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                                ipsum dolor sit amet, consetetur sadipscing elitr
                                            </p>
                                            <a href="#" className="reply btn btn-yellow">
                                                <span>
                                                    <i className="fa fa-reply" />
                                                    Reply
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* comments-area-end */}
                        {/* blog-comment-area start */}
                        <div className="blog-comment-area">
                            <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                                <h4 className="single-page-small-title">Write A Coment.</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <label className="single-input-wrap">
                                            <span className="single-input-title">Name</span>
                                            <input type="text" />
                                        </label>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label className="single-input-wrap">
                                            <span className="single-input-title">Email</span>
                                            <input type="text" />
                                        </label>
                                    </div>
                                    <div className="col-lg-12">
                                        <label className="single-input-wrap">
                                            <span className="single-input-title">comments</span>
                                            <textarea defaultValue={""} />
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <a className="btn btn-yellow" href="#">
                                            Send Comment
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* blog-comment-area start */}
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

export default BlgDetails;