import React from "react";
import img12 from '../../assets/img/destination-list/12.png';
import map from '../../assets/img/icons/1.png';
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/ProjectCard.scss"

const ProjectCard = ({ project, color }) => {
    const navigate = useNavigate();
    const getId = () => {
        const id = project.id
        navigate('/tourdetails', { state: { id } });
    }

    return (
        <>
        <div className="single-destinations-list style-three" style={{borderColor: color, boxShadow: `1px 1px 7px ${color}`}} onClick={() => getId()}>
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
                {/* <p className="content"><b>Our Speciality:</b> {project.speciality}</p> */}
                <a className="content" href={project.domain_name}
                // onClick={()=> window.open(project.domain_name, '_blank', 'noopener,noreferrer')}
                >{project.domain_name}</a>
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
                        <h2 className="price-color">
                            {project.start_price} <span>₹</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="project-card" >

        <section class="product" style={{borderColor: color, boxShadow: `1px 1px 7px ${color}`}} onClick={() => getId()}>
	<div class="product__photo">
			<div class="photo-main">
				<div class="controls">
					<i class="material-icons">share</i>
					<i class="material-icons">favorite_border</i>
				</div>
			</div>
                <img src={img12} alt="list" />
			<div class="photo-album">
				<ul>
					 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li> 
				</ul>
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>Delicious Apples</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">
			R$ <span>7.93</span>
		</div>
		<div class="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"/></li>
			</ul>
		</div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>
        </div> */}
        </>

    )
};

export default ProjectCard;