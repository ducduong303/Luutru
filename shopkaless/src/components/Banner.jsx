import React from 'react';
import imgBanner1 from "../assets/images/banner1.jpg";
import imgBanner2 from "../assets/images/banner2.jpg";
import imgBanner3 from "../assets/images/banner3.jpg";
import imgBanner4 from "../assets/images/banner4.jpg";
function Banner(props) {
    return (
        <div className="banner">
            <div className="container banner__inner">
                <div className="row banner__box">
                    <div className="col-lg-5 col-md-12">
                        <div className="banner__item ">
                            <div className="banner__img">
                                <img src={imgBanner1} alt="" />
                            </div>
                            <div className="banner__content">
                                <h3 className="banner-title-1">WINTER SALE <br></br>75%OFF</h3>
                                <p>Checkout Our HotSale Products This Week!</p>
                                <div className="banner__btn">
                                    <a href="/#">SHOP PRODUCTS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7">
                        <div className="banner__item ">
                            <div className="banner__img">
                                <img src={imgBanner2} alt="" />
                            </div>
                            <div className="banner__content">
                                <h3 className="banner-title-2">MENSWEAR</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className="banner__item banner__thumb">
                            <div className="banner__img">
                                <img src={imgBanner3} alt="" className="banner__img" />
                            </div>
                            <div className="banner__content">
                                <h3 className="banner-title-2"> HANDBAG</h3>
                            </div>
                        </div>
                        <div className="banner__item banner__thumb">
                            <div className="banner__img">
                                <img src={imgBanner4} alt="" />
                            </div>
                            <div className="banner__content">
                                <h3 className="banner-title-2">SNEAKERS</h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Banner;