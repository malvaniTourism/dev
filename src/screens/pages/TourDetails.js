import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleMapReact from 'google-map-react';
import img1 from '../../assets/img/tour-details/1.png';
import img2 from '../../assets/img/tour-details/2.png';
import img3 from '../../assets/img/tour-details/3.png';
import img4 from '../../assets/img/tour-details/4.png';
import img5 from '../../assets/img/tour-details/5.png';
import img6 from '../../assets/img/tour-details/6.png';

import img15 from '../../assets/img/icons/15.png';
import img16 from '../../assets/img/icons/16.png';
import img17 from '../../assets/img/icons/17.png';
import img18 from '../../assets/img/icons/18.png';
import img19 from '../../assets/img/icons/19.png';
import img20 from '../../assets/img/icons/20.png';

import imgb1 from '../../assets/img/blog/1.png';
import imgb8 from '../../assets/img/blog/8.png';
import imgb9 from '../../assets/img/blog/9.png';

import imgc2 from '../../assets/img/client/02.png';
import imgc3 from '../../assets/img/client/3.png';
import CustNav from '../../components/navbars/CustNav';
import { useLocation } from "react-router-dom";
import { comnGet } from "../../services/comnServ";
import Path from "../../services/baseUrl";
import CustFooter from '../../components/footers/CustFooter';
import CommentsCard from '../../components/cards/CommentsCard';
import CommentsForm from '../../components/cards/CommentsForm';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const mapProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

let projectMeta = ''
const TourDetails = ({ openComment, isPosted }) => {
    const [data, setData] = useState([])
    const location = useLocation();
    const [parentId, setParentId] = useState('');
    const [open, setOpen] = useState(false);
    //project/5
    useEffect(() => {
        getData();
        // projectMeta = JSON.parse(JSON.stringify(data.project_meta))
    }, []);

    const getData = () => {
        comnGet(`api/v1/project/${location.state.id}`)
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch(err => console.error(err))
    }

    openComment = (e) => {
        setParentId(e)
        setOpen(true)
    }

    const onCommentSuccess = () => {
        isPosted(true)
        setOpen(false)
        getData();
    }

    return (
        <div>
            <CustNav />
            <div className="tour-details-area mg-top--70">
                <div className="tour-details-gallery">
                    <div className="container-bg bg-dark-blue">
                        <div className="container">
                            <div className="gallery-filter-area row" style={{ marginTop: 20 }}>
                                <div className="gallery-sizer col-1" />
                                {/* gallery-item */}
                                <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                                    <div className="tp-gallery-item-img">
                                        <div className="thumbnails">
                                            <img src={img1} alt="image" />
                                            <div className="video-popup-btn">
                                                <a
                                                    href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                                                    className="video-play-btn mfp-iframe"
                                                    tabIndex={0}
                                                >
                                                    <i className="fa fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {data.photos?.slice(0, 5).map(photo => {
                                    return (
                                        <div className="tp-gallery-item col-lg-3 col-md-4 col-sm-6">
                                            <div className="tp-gallery-item-img">
                                                <a href="#" data-effect="mfp-zoom-in">
                                                    <img src={Path.API_PATH + photo.url} alt="image" />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4">
                                    <div className="details">
                                        <p className="location mb-0">
                                            <i className="fa fa-map-marker" />
                                            {data?.city?.name}
                                        </p>
                                        <h4 className="title">{data.name}</h4>
                                        {/* <p className="content">{data.project_meta}</p> */}
                                        <div className="tp-review-meta">
                                            <i className="ic-yellow fa fa-star" />
                                            <i className="ic-yellow fa fa-star" />
                                            <i className="ic-yellow fa fa-star" />
                                            <i className="ic-yellow fa fa-star" />
                                            <i className="fa fa-star" />
                                            <span>4.0</span>
                                        </div>
                                        <div className="all-tags">
                                            <a href="#">Adventures</a>
                                            <a href="#">Local special ties</a>
                                            <a href="#">Natural</a>
                                            <a href="#">Travel</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                    <div className="book-list-warp">
                                        <p className="book-list-content">
                                            Just booked! Get your spot before it's too late.
                                        </p>
                                        <div className="tp-price-meta">
                                            <p>Price</p>
                                            <h2>
                                                {data?.start_price} <small>₹</small>
                                            </h2>
                                        </div>
                                    </div>
                                    <ul className="tp-list-meta border-tp-solid">
                                        <li className="ml-0">
                                            <i className="fa fa-calendar-o" /> 8 Oct
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o" /> 4 Days
                                        </li>
                                        <li>
                                            <i className="fa fa-users" />2 Person
                                        </li>
                                        <li>
                                            <i className="fa fa-snowflake-o" /> Relaxing
                                        </li>
                                        <li>
                                            <i className="fa fa-star" /> 4.3
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tour-details-wrap">
                                <h4 className="single-page-small-title">Description</h4>
                                <p>
                                    {data?.description}
                                </p>
                                <p>
                                    {" "}
                                    {data?.description}
                                    This trip is offered by Atlas Obscura. Once you've reserved your
                                    spot, our team will be in touch to help you prepare for the trip.
                                    Please note that flights to and from St. John's are not included in
                                    the trip cost. This trip is limited by 12 travelers.
                                </p>
                                <div className="package-included-area">
                                    <h4 className="single-page-small-title">Included</h4>
                                    <div className="row">
                                        <div className="col-xl-4 col-sm-6">
                                            <div className="single-package-included">
                                                <img src={img15} alt="icons" />
                                                <h6>Food</h6>
                                                <p>3 breakfasts, 3 dinners</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6">
                                            <div className="single-package-included">
                                                <img src={img16} alt="icons" />
                                                <h6>Accommodations</h6>
                                                <p>3 nights in a hotel</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6">
                                            <div className="single-package-included">
                                                <img src={img17} alt="icons" />
                                                <h6>Transportation</h6>
                                                <p>2 boat rides, 1 car ride</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6">
                                            <div className="single-package-included">
                                                <img src={img18} alt="icons" />
                                                <h6>Drinks</h6>
                                                <p>Water, tea, coffee, beer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6">
                                            <div className="single-package-included">
                                                <img src={img19} alt="icons" />
                                                <h6>Tickets</h6>
                                                <p>Entrance fee</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6">
                                            <div className="single-package-included">
                                                <img src={img20} alt="icons" />
                                                <h6>Equipment</h6>
                                                <p>Outdoor gear, safety</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="package-included-location">
                                    <h4 className="single-page-small-title">Your Itinerary</h4>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="single-blog">
                                                <div className="p-list">
                                                    <div className="list">1</div>
                                                    <p>Day 1</p>
                                                </div>
                                                <div className="thumb">
                                                    <img src={imgb8} alt="blog" />
                                                </div>
                                                <div className="single-blog-details">
                                                    <h4 className="title">Welcome to St. John's</h4>
                                                    <p className="content">
                                                        After a welcome drink, we'll stroll into town and get to
                                                        know each other over a hyper-local “nose-to-tail” dinner.
                                                        Show more
                                                    </p>
                                                    <a className="btn-read-more" href="#">
                                                        <span>
                                                            Show More
                                                            <i className="la la-arrow-right" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="single-blog">
                                                <div className="p-list">
                                                    <div className="list">2</div>
                                                    <p>Day 2</p>
                                                </div>
                                                <div className="thumb">
                                                    <img src={imgb1} alt="blog" />
                                                </div>
                                                <div className="single-blog-details">
                                                    <h4 className="title">Relaxation &amp; Exploration</h4>
                                                    <p className="content">
                                                        After a welcome drink, we'll stroll into town and get to
                                                        know each other over a hyper-local “nose-to-tail” dinner.
                                                        Show more
                                                    </p>
                                                    <a className="btn-read-more" href="#">
                                                        <span>
                                                            Show More
                                                            <i className="la la-arrow-right" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="single-blog single-blog-after-none">
                                                <div className="p-list">
                                                    <div className="list">3</div>
                                                    <p>Day 3</p>
                                                </div>
                                                <div className="thumb">
                                                    <img src={imgb9} alt="blog" />
                                                </div>
                                                <div className="single-blog-details">
                                                    <h4 className="title">Farewell &amp; Departure</h4>
                                                    <p className="content">
                                                        After a welcome drink, we'll stroll into town and get to
                                                        know each other over a hyper-local “nose-to-tail” dinner.
                                                        Show more
                                                    </p>
                                                    <a className="btn-read-more" href="#">
                                                        <span>
                                                            Show More
                                                            <i className="la la-arrow-right" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="host-area">
                                    <div className="single-host-wrap text-center">
                                        <div>
                                            <img className="profilePicture" src={Path.API_PATH + data.user?.profile_picture} alt="img" />
                                        </div>
                                        <h4>{data.user?.name}</h4>
                                        <a href={data.user?.email}>{data.user?.email}</a>
                                        <p>
                                            I'm your Atlas Obscura Trip Coordinator. Since 2016, Atlas
                                            Obscura has been offering unusual trips to the world’s most
                                            extraordinary places. Our itineraries are developed in close
                                            collaboration with the locals and insiders who host them—our
                                            global community of explorers
                                        </p>
                                        <p>
                                            {" "}
                                            Felicity Roberts will be leading your trip. A rural
                                            Newfoundlander, certified herbalist, farmer, writer, wild food
                                            advocate, and self relic, Felicity is most on the barrens
                                            cutting heather to dye wool or hanging off the edge
                                        </p>
                                    </div>
                                </div>
                                <div style={{ height: '100vh', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyDh0r4d43_4Jms5sGWfSTQjHO9QXEj_Qvw" }}
                                        defaultCenter={mapProps.center}
                                        defaultZoom={mapProps.zoom}
                                    >
                                        {/* <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        /> */}
                                        <text>map</text>
                                    </GoogleMapReact>
                                </div>
                                <div className="service-location-map">
                                    <h4 className="single-page-small-title">Service Location</h4>
                                    <div className="service-location-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649788.5753409272!2d-0.5724199684037448!3d52.92186340524542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d94c3b82ab%3A0x62077a554c8e9a8e!2sPetty%20France%2C%20Westminster%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1572346566908!5m2!1sen!2sbd" />
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <h4 className="comments-title">Comments</h4>
                                    <div className="reply btn btn-yellow" onClick={() => openComment()}>
                                        <span>
                                            {/* <i className="fa fa-reply" /> */}
                                            Add a comment
                                        </span>
                                    </div>
                                    <ul className="comment-list">
                                        <li>
                                            {data.comments?.map(comment => {
                                                return (
                                                    <div>
                                                        <CommentsCard data={comment} openComment={(e) => openComment(e)} />
                                                        {comment.comments?.map(reply => {
                                                            return (
                                                                <ul className="children">
                                                                    <li>
                                                                        <CommentsCard data={reply} openComment={(e) => openComment(e)} />
                                                                    </li>
                                                                </ul>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </li>
                                    </ul>
                                </div>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <CommentsForm type={'comment'} tableName={'Project'} postId={data.id} parentId={parentId} isPosted={() => onCommentSuccess()} />
                                    </Box>
                                </Modal>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-area sidebar-area-4">
                                <div className="widget tour-list-widget">
                                    <div className="widget-tour-list-meta">
                                        <div className="single-widget-search-input-title">
                                            <i className="fa fa-user" /> Name
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="single-widget-search-input-title">
                                            <i className="fa fa-envelope" /> Email
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="single-widget-search-input-title">
                                            <i className="fa fa-phone" /> Phone
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input type="text" placeholder="Phone" />
                                        </div>
                                        <div className="single-widget-search-input-title">
                                            <i className="fa fa-calendar-minus-o" /> Date
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input
                                                type="text"
                                                className="departing-date custom-select"
                                                placeholder="Departing"
                                            />
                                        </div>
                                        <div className="single-widget-search-input-title">
                                            <i className="fa fa-calendar-minus-o" /> Date
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input
                                                type="text"
                                                className="returning-date custom-select"
                                                placeholder="Returning"
                                            />
                                        </div>
                                        <div className="single-widget-search-input-title">
                                            <i className="fa fa-keyboard-o" /> Message
                                        </div>
                                        <div className="single-widget-search-input">
                                            <textarea placeholder="Type" defaultValue={""} />
                                        </div>
                                        <div className="text-lg-center text-left">
                                            <a className="btn btn-yellow" href="#">
                                                Book Now <i className="fa fa-paper-plane" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget_ads">
                                    <a href="#">
                                        <img className="w-100" src="assets/img/others/01.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustFooter />
        </div>
    )
}

export default TourDetails;