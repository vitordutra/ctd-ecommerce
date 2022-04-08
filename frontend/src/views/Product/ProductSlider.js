
import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import image1 from '../../assets/images/capa1.png'
import image2 from '../../assets/images/produto-img1.jpg'

const Wrapper = styled.div`
  img {
    border: 2px solid #ffffff;
    height: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper:nth-child(1) {
    margin-bottom: 16px;
  }

  .swiper:nth-child(2) {
    .swiper-slide {
      opacity: .4;
      transition: opacity .3s;
    }

    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
`;

export function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <Swiper 
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
      >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
      </Swiper>
      <Swiper 
         onSwiper={setThumbsSwiper}
         spaceBetween={8}
         slidesPerView={3}
         freeMode={true}
         watchSlidesProgress={true}
         modules={[FreeMode, Thumbs]}
      >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}