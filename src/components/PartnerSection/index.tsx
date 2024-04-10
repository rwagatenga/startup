import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PartnerSection = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    s: unknown,
    time: number,
    progress: number
  ): void => {
    progressCircle.current?.style.setProperty('--progress', `${1 - progress}`);
    progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="h-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/images/gitstart.png"
              alt="Picture of Gitstart"
              width={1500}
              height={1400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gitstart.png"
              alt="Picture of Gitstart"
              width={1500}
              height={1400}
            />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default PartnerSection;
