import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannerItem } from './BannerItem';
import banner1 from '../assets/images/banner1.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Wrapper = styled.section`
  position: relative;
  z-index: 0;
  
  .swiper-pagination-bullet {
    background-color: #ffffff;
    width: 10px;
    height: 10px;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #45b77d;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-image: url(${banner1});
  background-color: rgba(0,0,0,0.7);
  background-blend-mode: overlay;
  filter: grayscale(30%);
`;

export function Banner() {
  return (
    <Wrapper>
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          >
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem />
          </SwiperSlide>
        </Swiper>
      <Background />
    </Wrapper>
  );
}
