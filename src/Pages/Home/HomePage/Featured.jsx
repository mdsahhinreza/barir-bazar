import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import ProductCard from './ProductCard';

const Featured = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <h2 className='text-center fw-bold ff-poppins pb-3'>Our Most <span className='ff-sscript secColor'>Selling</span> Products</h2>
            </div>
            <div className="container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                    <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                    <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                    <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                    <SwiperSlide><ProductCard></ProductCard></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Featured;