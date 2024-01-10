import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


function Card4({ h1, p }) {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='t2 w-[350px]'>
                        <div className='flex flex-col gap-[10px] items-start pt-[220px] pb-[20px] px-[24px] text-white'>
                            <h1>{h1}</h1>
                            <p className='text-[14px] text-[#BDBDBD]'>{p}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='t2 w-[350px]'>
                        <div className='flex flex-col gap-[10px] items-start pt-[220px] pb-[20px] px-[24px] text-white'>
                            <h1>{h1}</h1>
                            <p className='text-[14px] text-[#BDBDBD]'>{p}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='t2 w-[350px]'>
                        <div className='flex flex-col gap-[10px] items-start pt-[220px] pb-[20px] px-[24px] text-white'>
                            <h1>{h1}</h1>
                            <p className='text-[14px] text-[#BDBDBD]'>{p}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='t2 w-[350px]'>
                        <div className='flex flex-col gap-[10px] items-start pt-[220px] pb-[20px] px-[24px] text-white'>
                            <h1>{h1}</h1>
                            <p className='text-[14px] text-[#BDBDBD]'>{p}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Card4
