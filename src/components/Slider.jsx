import React from 'react';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ galleryData }) => {
    const swiperParams = {
        navigation: true,
        slidesPerView: 4,
        spaceBetween: 30,
    };

    return (
        <div className="item slider">
            <p className="title">갤러리</p>
            <div className="swiper-container">
                <Swiper {...swiperParams}>
                    {galleryData &&
                        galleryData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`../gallery/${item.id}`}>
                                    <img src={item.imageSrc} alt="" />
                                    <p className="name">{item.title}</p>
                                    <p className="date">{item.date}</p>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
