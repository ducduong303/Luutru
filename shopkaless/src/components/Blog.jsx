import React from 'react';
import CustomTitle from './CustomTitle';
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.webp";
function Blog(props) {
    return (
        <>
            <CustomTitle title="BLOG"
                desc="The freshest and most exciting news"></CustomTitle>
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__item">
                                <div className="blog__item-img">
                                    <img src={blog1} alt="" />
                                </div>

                                <div className="blog__item-desc">
                                    <h4>Spring – Summer Trending 2020</h4>
                                    <span>By adminon April 6, 2020</span>
                                    <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__item">
                                <div className="blog__item-img">
                                    <img src={blog2} alt="" />
                                </div>
                                <div className="blog__item-desc">
                                    <h4>The Easiest Way to Break Out on Top</h4>
                                    <span>By adminon April 6, 2020</span>
                                    <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__item">
                                <div className="blog__item-img">
                                    <img src={blog3} alt="" />
                                </div>
                                <div className="blog__item-desc">
                                    <h4>Style for couple in Weeding season</h4>
                                    <span>By adminon April 6, 2020</span>
                                    <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;