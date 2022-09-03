import React from "react";
import img12 from '../../assets/img/destination-list/12.png';
import map from '../../assets/img/icons/1.png';

const ProjectCard = ({project}) => {

    return (
        <div className="single-destinations-list style-three">
            <div className="thumb">
                <img src={img12} alt="list" />
            </div>
            <div className="details">
                <div className="tp-review-meta">
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="ic-yellow fa fa-star" />
                    <i className="fa fa-star" />
                    <span>4.0</span>
                </div>
                <p className="location">
                    <img src={map} alt="map" />
                    Italy
                </p>
                <h4 className="title">
                    <text>{project.name}</text>
                </h4>
                <p className="content">{project.description}</p>
                <p className="content"><b>Our Speciality:</b> {project.speciality}</p>
                <a className="content" href={project.domain_name}>{project.domain_name}</a>
                <div className="list-price-meta">
                    <ul className="tp-list-meta d-inline-block">
                        <li>
                            <i className="fa fa-calendar-o" /> 8oct
                        </li>
                        <li>
                            <i className="fa fa-clock-o" /> 4 days
                        </li>
                        <li>
                            <i className="fa fa-star" /> {project.ratings}
                        </li>
                    </ul>
                    <div className="tp-price-meta d-inline-block">
                        <p>Price</p>
                        <h2>
                            {project.start_price} <span>₹</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;