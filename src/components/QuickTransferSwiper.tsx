import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-2.png';
import UserThree from '../images/user/user-3.png';
import UserFour from '../images/user/user-02.png';

interface Stats {
  image: string;
  name: string;
  post: string;
}

const statsItems: Stats[] = [
  { image: UserOne, name: 'Livia Bator', post: 'CEO' },
  { image: UserTwo, name: 'Randy Press', post: 'Developer' },
  { image: UserThree, name: 'Workman', post: 'Designer' },
  { image: UserFour, name: 'Livia Bator', post: 'Designer' },
];

const QuickTransferSwiper: React.FC = () => {
  return (
    <div className="data-stats-slider-outer relative col-span-12 py-10">
      <Swiper
        className="dataStatsSlider swiper !-mx-px"
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
        role="listbox"
        aria-label="Quick Transfer Users"
      >
        {statsItems.map((item, key) => (
          <SwiperSlide
            key={key}
            className="px-2"
            role="option"
            aria-label={`${item.name}, ${item.post}`}
          >
            <div className="flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="h-10.5 w-10.5 overflow-hidden rounded-full mb-3 sm:mb-4">
                  <img src={item.image} alt={`${item.name}'s profile`} />
                </div>
                <h3 className="text-12 sm:text-16 text-primary mb-1.5 sm:mb-px">
                  {item.post === 'CEO' ? <strong>{item.name}</strong> : item.name}
                </h3>
                <h4 className="text-12 sm:text-15 text-secondary">
                  {item.post === 'CEO' ? <strong>{item.post}</strong> : item.post}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="swiper-button-prev"
        aria-label="Previous slide"
      >
        <svg
          className="fill-secondary"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8562 2.80185C16.0624 2.80185 16.2343 2.8706 16.4062 3.0081C16.7155 3.31748 16.7155 3.79873 16.4062 4.1081L9.1874 11.4987L16.4062 18.855C16.7155 19.1644 16.7155 19.6456 16.4062 19.955C16.0968 20.2644 15.6155 20.2644 15.3062 19.955L7.5374 12.0487C7.22803 11.7394 7.22803 11.2581 7.5374 10.9487L15.3062 3.04248C15.4437 2.90498 15.6499 2.80185 15.8562 2.80185Z"
            fill=""
          />
        </svg>
      </button>
      <button
        className="swiper-button-next"
        aria-label="Next slide"
      >
        <svg
          className="fill-secondary"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.08721 20.1957C7.88096 20.1957 7.70908 20.127 7.53721 19.9895C7.22783 19.6801 7.22783 19.1988 7.53721 18.8895L14.756 11.4988L7.53721 4.14258C7.22783 3.8332 7.22783 3.35195 7.53721 3.04258C7.84658 2.7332 8.32783 2.7332 8.63721 3.04258L16.406 10.9488C16.7153 11.2582 16.7153 11.7395 16.406 12.0488L8.63721 19.9551C8.49971 20.0926 8.29346 20.1957 8.08721 20.1957Z"
            fill=""
          />
        </svg>
      </button>
    </div>
  );
};

export default QuickTransferSwiper;
