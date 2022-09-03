import React from "react";
import img1 from '../../assets/img/blog/1.png';
import moment from "moment";

const BlogsCard = ({ data }) => {

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="single-blog">
                <div className="thumb">
                    <img src={img1} alt="blog" />
                    <a className="tag" href="#">
                        Europe
                    </a>
                </div>
                <div className="single-blog-details">
                    <p className="date">{moment(data.created_at).format('DD MMMM YYYY')}</p>
                    <h4 className="title">{data.name}</h4>
                    <p className="content">{data.description}</p>
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