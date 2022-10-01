import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

import imgdl8 from '../../assets/img/destination-list/8.png';
import imgdl9 from '../../assets/img/destination-list/9.png';
import imgdl10 from '../../assets/img/destination-list/10.png';
import imgdl11 from '../../assets/img/destination-list/11.png';
import imgdl12 from '../../assets/img/destination-list/12.png';
import imgdl13 from '../../assets/img/destination-list/13.png';
import imgdl14 from '../../assets/img/destination-list/14.png';
import imgdl15 from '../../assets/img/destination-list/15.png';
import imgdl16 from '../../assets/img/destination-list/16.png';

import CityCard1 from '../cards/CityCard1';

const CityList = (props) => {
    const navigate = useNavigate();

    const getDetails = (id) => {
        navigate('/city/details', { state: { name: 'City', id } });
    }

    return (
        <div>
            <div className="destination-area">
                <div className="container-bg mg-top--70">
                    <div className="container">
                        <div className="row justify-content-center">
                            {props.cities.map(city => {
                                return (
                                    <CityCard1  city={city} onClick={(id) => getDetails(id)}/>
                                )
                            })}
                            <div className="col-12">
                                <div className="btn-wrapper text-center">
                                    <a className="btn btn-yellow mt-4" href="#">
                                        <span>
                                            Load More
                                            <i className="la la-arrow-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityList;