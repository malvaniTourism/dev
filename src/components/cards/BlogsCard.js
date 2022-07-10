import React from "react";

const BlogsCard = (props) => {

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="single-blog">
                <div className="thumb">
                    <img src={props.img} alt="blog" />
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
                    <a className="btn-read-more" href="#/blogdetails">
                        <span>
                            Read More
                            <i className="la la-arrow-right" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default BlogsCard;