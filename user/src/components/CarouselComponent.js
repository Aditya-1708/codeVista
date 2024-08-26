import React from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundImage from "../images/mainImage.jpg";
import "./style.css";


export default function CarouselComponent() {
const { t } = useTranslation();

return (
<>
    <Swiper
    id='swiper'
    style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }}
    speed={1200}
    parallax={true}
    pagination={{
        clickable: true,
    }}
    navigation={false}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
    >
    <div
        slot="container-start"
        className="parallax-bg"
        style={{
            backgroundImage: `url(${backgroundImage})`
        }}
        data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide className=''>
        <div className="title1  swiperSlide" data-swiper-parallax="-300">
        {t('homeWelcomeMessage')}
        </div>
        <div className="text" id="titleBody" data-swiper-parallax="-200">
        {t('homeWelcomeCaption')}
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="title1 swiperSlide" data-swiper-parallax="-300">
        {t('slide2')}
        </div>
        <div className="text" id="title1body"data-swiper-parallax="-100">
        {t('slide2content')}
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="title1 swiperSlide"  data-swiper-parallax="-300">
        {t('slide3')}
        </div>
        <div className="text" id="title1body"data-swiper-parallax="-100">
        {t('slide3content')}
        </div>
    </SwiperSlide>
    </Swiper>
</>
);
}





