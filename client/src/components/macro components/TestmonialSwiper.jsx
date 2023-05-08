import React from 'react';

import "./TestmonialSwiper.css";
import TestimonialCard from '../common/TestimonialCard.jsx';

import { testimonials } from '../../utils/LandingPageConstants';

import testImg1 from "../../assets/person1.jpg";
import testImg2 from "../../assets/person2.jpg";
import testImg3 from "../../assets/person3.jpg";

import SwiperCore,{  Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// import "./css/bundle";
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
import "../../../node_modules/swiper/swiper.css";
import '../../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/swiper-bundle.esm.js";



SwiperCore.use([ Pagination, EffectCoverflow]);
function TestmonialSwiper() {
  
  return (
    <Swiper
      modules={[ Pagination, EffectCoverflow]}
      spaceBetween={-150}
      slidesPerView={5}
      centeredSlides={true}
      slideToClickedSlide={true}
      speed={350}
      pagination={{
        clickable: true,
      }}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 3,
        slideShadows: false,
      }}
      className="swiper"
    >
      <SwiperSlide>
          <TestimonialCard img={testImg1} name={testimonials.review1.name} review={testimonials.review1.text} />
      </SwiperSlide>
      <SwiperSlide>
          <TestimonialCard img={testImg1} name={testimonials.review1.name} review={testimonials.review1.text} />
      </SwiperSlide>
      <SwiperSlide>
          <TestimonialCard img={testImg1} name={testimonials.review1.name} review={testimonials.review1.text} />
      </SwiperSlide>
      <SwiperSlide>
          <TestimonialCard img={testImg2} name={testimonials.review2.name} review={testimonials.review2.text} />
      </SwiperSlide>

      <SwiperSlide>
          <TestimonialCard img={testImg3} name={testimonials.review3.name} review={testimonials.review3.text} />
      </SwiperSlide>
    </Swiper>
  );
}

export default TestmonialSwiper;
