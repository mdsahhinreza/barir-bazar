import React from 'react';
import one from '../../../Assets/images/1.png';
import two from '../../../Assets/images/2.png';
import three from '../../../Assets/images/3.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <img height={400} width='100%' src={one} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img height={400} width='100%' src={two} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img height={400} width='100%' src={three} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;