import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from '../../assets/img/destination-list/7.png';
import img6 from '../../assets/img/destination-list/6.png';
import img5 from '../../assets/img/destination-list/5.png';
import img4 from '../../assets/img/others/01.png';
import ProjectCard from '../cards/ProjectCard';
import { comnPost } from '../../services/comnServ';
import { connect } from 'react-redux';
import { selectType } from '../../actions/commonActions';
import { useNavigate } from 'react-router-dom';

const ListFilter = (props) => {
    const [searchText, setSearchText] = useState('');
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProductData(props.projName);
    }, [])

    const searchProduct = (e) => {
        e.preventDefault();
        getProductData();
    }

    const getProductData = (name) => {
        var formData = new FormData();
        // navigate('tourdetails', { state: { name: 'place', id } });

        formData.append('string', searchText || name);
        formData.append('table_name', 'projects')

        comnPost('api/v1/search', formData)
            .then(res => {
                console.log(res.data.data.data);
                setProjects(res.data.data.data);
            })
            .catch(err => console.error(err))
    }

    const selectType = (e) => {
        console.log(e.target.value);
        props.selectType(e.target.value)
    }

    return (
        <div className="tour-list-area pd-top-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 order-lg-12">
                        <div className="tp-tour-list-search-area">
                            <div className="row">
                                <div className="col-xl-3 col-sm-6">
                                    <label className="single-input-wrap">
                                        <i className="fa fa-calendar-minus-o" />
                                        <input
                                            type="text"
                                            className="departing-date"
                                            placeholder="Departing"
                                        />
                                    </label>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <label className="single-input-wrap tour-list-search-icon">
                                        <i className="la la-arrow-up" />
                                        <input type="text" placeholder="Price Low to High" />
                                    </label>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <label className="single-input-wrap tour-list-search-icon">
                                        <i className="la la-arrow-down" />
                                        <input type="text" placeholder="Price High to Low" />
                                    </label>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <label className="single-input-wrap">
                                        <i className="fa fa-paper-plane" />
                                        <input type="text" placeholder="Name (A - Z)" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {projects[0] ?
                            <div className="tour-list-area">
                                {projects.map(project => {
                                    return (
                                        <ProjectCard project={project} />
                                    )
                                })}
                            </div>
                            :
                            <div className="tour-list-area">
                                <h3 className='content'>Search something to see the results!</h3>
                            </div>

                        }
                    </div>
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                        <div className="sidebar-area">
                            <div className="widget tour-list-widget">
                                <div className="single-widget-search-input-title">
                                    <i className="fa fa-plus-circle" /> Type
                                </div>
                                <div className="single-widget-search-input">
                                    <select className="select w-100 custom-select" onChange={(e) => selectType(e)} value={props.selectedProduct}>
                                        <option value="Hotels/ Restaurants">Hotels/ Restaurants</option>
                                        <option value="Vilas/ Raw Houses">Vilas/ Raw Houses</option>
                                        <option value="Tour Packages">Tour Packages</option>
                                    </select>
                                </div>
                                <div className="widget-tour-list-search">
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-search" /> Search
                                    </div>
                                    <form className="search-form">
                                        <div className="form-group">
                                            <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                                        </div>
                                        <button className="submit-btn" type="submit" onClick={(e) => searchProduct(e)}>
                                            <i className="ti-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="widget-tour-list-meta">
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-dot-circle-o" /> Where From?
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input type="text" placeholder="Tour List Destination" />
                                    </div>
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-calendar-minus-o" /> Departing
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input
                                            type="text"
                                            className="departing-date custom-select"
                                            placeholder="Departing"
                                        />
                                    </div>
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-calendar-minus-o" /> Returning
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input
                                            type="text"
                                            className="returning-date custom-select"
                                            placeholder="Returning"
                                        />
                                    </div>
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-usd" /> Price Filter
                                    </div>
                                    <div className="widget-product-sorting">
                                        <div className="slider-product-sorting" />
                                        <div className="product-range-detail">
                                            <label htmlFor="amount">Price: </label>
                                            <input type="text" id="amount" readOnly="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget_ads">
                                <a href="#">
                                    <img src={img4} alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProduct: state.commonState.selectedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectType: (data) => {
            dispatch(selectType(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFilter);