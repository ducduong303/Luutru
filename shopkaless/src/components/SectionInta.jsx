import React, { useState } from 'react';
// Slick
import data from "../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomTitle from './CustomTitle.jsx';
function SectionInta(props) {
    const [image, setImage] = useState(data);
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        className: "slides",
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
           
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
            <CustomTitle title="INSTAGRAM" desc=""></CustomTitle>
            <Slider {...settings}>
                {
                    image && image.map((item, index) => {
                        return (
                            <div className="inta" key={index}>
                                <img src={item.image} alt="" />
                                <p className={`number_${index}`}>1</p>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    );
}

export default SectionInta;