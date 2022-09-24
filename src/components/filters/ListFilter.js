import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from '../../assets/img/destination-list/7.png';
import img6 from '../../assets/img/destination-list/6.png';
import img5 from '../../assets/img/destination-list/5.png';
import img4 from '../../assets/img/others/01.png';
import ProjectCard from '../cards/ProjectCard';
import { comnPost } from '../../services/comnServ';
import { connect } from 'react-redux';
import { saveSearchString, selectType } from '../../actions/commonActions';
import { useNavigate } from 'react-router-dom';

const cities = ["Devgad", "Dodamarg", "Kankavli", "Kudal", "Malvan", "Sawantwadi", "Vaibhavwadi", "Vengurla"]

const ListFilter = (props) => {
    const [searchText, setSearchText] = useState(props.searchString);
    const [projects, setProjects] = useState([]);
    const [city, setCity] = useState();
    const [color, setColor] = useState('#EBA55D');
    const [asc, setAsc] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        getProductData(props.projName);
        window.onpopstate = e => {
            props.saveSearchString('')
        }
    }, [])

    const searchProduct = (e) => {
        e.preventDefault();
        getProductData(searchText);
    }

    const changeCity = (value) => {
        setCity(value)
        getProductData(value)
    }

    const getProductData = (name) => {
        var formData = new FormData();

        formData.append('string', name || '');
        formData.append('table_name', 'projects')

        comnPost(`api/v1/search?page=${page}`, formData)
            .then(res => {
                console.log(res.data.data.data);
                setProjects(res.data.data.data);
                setTotalPages(res.data.data.last_page)
            })
            .catch(err => console.error(err))
    }

    const selectType = (e) => {
        props.selectType(e.target.value);
        if (e.target.value == 'Hotels/ Restaurants') setColor('#EBA55D')
        if (e.target.value == 'Vilas/ Raw Houses') setColor('#A2B9EE')
        if (e.target.value == 'Tour Packages') setColor('#9CEE8C')
    }

    const saveSearchString = (value) => {
        setSearchText(value)
        props.saveSearchString(value)
    }

    const sortData = () => {
        if (asc) {
            projects.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
            projects.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
        setAsc(!asc)
    }

    const changePage = (event, value) => {
        window.scroll(0, 0)
        setPage(value)
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
                                <div className="col-xl-3 col-sm-6" onClick={() => sortData()}>
                                    <label className="single-input-wrap">
                                        <i className="fa fa-paper-plane" />
                                        <input disabled type="text" style={{ borderColor: asc ? '#9CEE8C' : '#EBA55D' }} placeholder={`${asc ? 'Name (A - Z)' : 'Name (Z - A)'}`} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {projects[0] ?
                            <div className="tour-list-area">
                                {projects.map(project => {
                                    return (
                                        <ProjectCard color={color} project={project} />
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
                                <div className="widget-tour-list-search">
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-search" /> Search
                                    </div>
                                    <form className="search-form">
                                        <div className="form-group">
                                            <input type="text" placeholder="Search" value={searchText} onChange={(e) => saveSearchString(e.target.value)} />
                                        </div>
                                        <button className="submit-btn" type="submit" onClick={(e) => searchProduct(e)}>
                                            <i className="ti-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="single-widget-search-input-title">
                                    <i className="fa fa-plus-circle" /> Category
                                </div>
                                <div className="single-widget-search-input">
                                    <select className="select w-100 custom-select" onChange={(e) => selectType(e)} value={props.selectedProduct}>
                                        <option value="">Select Category</option>
                                        <option value="Hotels/ Restaurants">Hotels/ Restaurants</option>
                                        <option value="Vilas/ Raw Houses">Vilas/ Raw Houses</option>
                                        <option value="Tour Packages">Tour Packages</option>
                                    </select>
                                </div>
                                <div className="widget-tour-list-meta">
                                    <div className="single-widget-search-input-title">
                                        <i className="fa fa-dot-circle-o" /> City
                                    </div>
                                    <div className="single-widget-search-input">
                                        <select className="select w-100 custom-select" onChange={(e) => changeCity(e.target.value)} value={city}>
                                            <option value="">Select City</option>
                                            {cities.map(city => {
                                                return (
                                                    <option value={city}>{city}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    {/* <div className="single-widget-search-input-title">
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
                                    </div> */}
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
                <Stack spacing={2} style={{ alignItems: 'center' }} >
                    <Pagination variant="outlined" color="secondary" size='large' count={props.pageCount} onChange={changePage} showFirstButton showLastButton />
                </Stack>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProduct: state.commonState.selectedProduct,
        searchString: state.commonState.searchString
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectType: (data) => {
            dispatch(selectType(data))
        },
        saveSearchString: data => {
            dispatch(saveSearchString(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFilter);