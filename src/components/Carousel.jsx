import React from 'react'
import { Navigation, Autoplay, Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';


import Rasm from '../assets/card-1.png'
import Rasm2 from '../assets/card-2.png'
import Rasm3 from '../assets/card-3.png'
import Rasm4 from '../assets/card-4.png'
import Rasm5 from '../assets/card-5.png'
import Rasm6 from '../assets/card-6.png'

import Star from '../assets/star.png'
import Stop_icon from '../assets/stop_icon.png'


export default function Carousel() {
  return (
   <Swiper
     modules={[Navigation, Autoplay,Scrollbar]}
     spaceBetween={30}
     slidesPerView={3}
     navigation
     autoplay={{
          delay: 1100,
          disableOnInteraction: false,
     }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
   >
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm} alt="rasm" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm2} alt="rasm2" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm3} alt="rasm3" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm4} alt="rasm4" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm5} alt="5" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm6} alt="rasm6" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
     <SwiperSlide>
         <div className='carusel'>
         <img src={Rasm} alt="" />
          <div>
          <p>Learn modern architecture
          Online course</p>
          <p>$120</p>
          </div>
          <div>
               <span>
                    <img src={Star} alt="star" />
                    <p>4.8(250)</p>
               </span>
               <span>
                    <img src={Stop_icon} alt="stop" />
                    <p>12 lessons</p>
               </span>
          </div>
         </div>
     </SwiperSlide>
   </Swiper>
  )
}

