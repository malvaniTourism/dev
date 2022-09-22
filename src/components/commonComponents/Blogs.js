import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img/blog/1.png';
import img12 from '../../assets/img/blog-details/12.png';
import img13 from '../../assets/img/blog-details/13.png';
import img14 from '../../assets/img/blog-details/14.png';
import img15 from '../../assets/img/blog-details/15.png';
import img16 from '../../assets/img/others/01.png';
import moment from "moment";
import { comnGet, comnPost } from '../../services/comnServ';
import Path from '../../services/baseUrl';

const Blogs = (props) => {
    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        comnGet('api/v1/categories')
            .then(res => {
                setCategories(res.data.data.data)
            })
            .catch(err => console.error(err))

        comnPost('api/v1/projects')
            .then(res => {
                setProjects(res.data.data.data)
            })
            .catch(err => console.error(err))
    }, []);

    const changePage = (event, value) => {
        props.setPage(value)
    }

    return (
        <div className="blog-area pd-top-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row justify-content-center">
                            {props.data.map(data => {
                                return (
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="thumb">
                                                <img src={img1} alt="blog" />
                                                <text className="tag">
                                                    Europe
                                                </text>
                                            </div>
                                            <div className="single-blog-details">
                                                <p className="date">{moment(data.created_at).format('DD MMMM YYYY')}</p>
                                                <h4 className="title">
                                                    <text href="blog-details.html">
                                                        {data.name}
                                                    </text>
                                                </h4>
                                                <p className="content">
                                                    {data.description}
                                                </p>
                                                <div className="btn-read-more" onClick={() => props.onClick(data.id)}>
                                                    <span>
                                                        Read More
                                                        <i className="la la-arrow-right" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <Stack spacing={2} style={{alignItems: 'center'}} >
                                <Pagination variant="outlined" color="secondary" size='large' count={props.pageCount} onChange={changePage} showFirstButton showLastButton />
                            </Stack>
                        </div>
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
                                    {categories?.map(cat => {
                                        return (
                                            <li>
                                                <a href="#">{cat.name}</a> {cat.id}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="widget widget-recent-post">
                                <h2 className="widget-title">Recent Post</h2>
                                <ul>
                                    {projects?.map(proj => {
                                        return (
                                            <li>
                                                <div className="media" onClick={() => props.getLatestProject(proj.name)}>
                                                    <img src={Path.API_PATH + proj.fevicon} alt="widget" className='blogsPostImg' />
                                                    <div className="media-body">
                                                        <span className="post-date">{moment(proj.created_at).format('DD MMMM YYYY')}</span>
                                                        <h6 className="title">
                                                            <a>{proj.name}</a>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
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

export default Blogs;