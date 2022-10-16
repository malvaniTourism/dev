import React from "react";
import Path from "../../services/baseUrl";
import "../../assets/styles/ProjectCard.scss"

const InstagramCard = (props) => {
    // let imgUrl = props.city.image_url.slice(6)
    // imgUrl = Path.API_PATH + `/storage` + imgUrl

    return (
            <div class="container">
                <div class="card">
                    <figure class="card__thumb">
                        <img src={props.img} alt="Picture by Kyle Cottrell" class="card__image" />
                        <figcaption class="card__caption">
                            {/* {
                                props?.data?.data?.map((item)=>{
                                    return  <p class="card__snippet">{item?.name}</p>

                                })
                            } */}
                            <p class="card__snippet">{props?.data?.name}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
           
    )
};

export default InstagramCard;