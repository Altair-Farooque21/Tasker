import React from 'react';

import "./TestmonialSwiper.css";
import TestimonialCard from '../common/TestimonialCard.jsx';

import { testimonials } from '../../utils/LandingPageConstants';

import testImg1 from "../../assets/person1.jpg";
import testImg2 from "../../assets/person2.jpg";
import testImg3 from "../../assets/person3.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{  Pagination, EffectCoverflow,FreeMode} from 'swiper';

import "../../../node_modules/swiper/swiper.css";
import '../../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css';
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination,FreeMode])

function TestmonialSwiper() {
  
  return (
    <Swiper
    slidesPerView={5}
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
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
