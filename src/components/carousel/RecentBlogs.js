import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/blog/1.png';
import img2 from '../../assets/img/blog/2.png';
import img3 from '../../assets/img/blog/3.png';
import BlogsCard from '../cards/BlogsCard';

const RecentBlogs = ({ data }) => {
    const [imgArr, setImgArr] = useState([img1, img2, img3])
    return (
        <div className="blog-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title">Recent Blog Posts</h2>
                            <p>
                                Lorem Ipsum is simply dummy text the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s,
                            </p>
                        </div>
                    </div>
                </div>
                {data &&
                    <div className="row justify-content-center">
                        {data.map(data => {
                            return (
                                <BlogsCard data={data} />
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default RecentBlogs;