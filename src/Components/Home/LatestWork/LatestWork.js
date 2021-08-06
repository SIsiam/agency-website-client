import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import swiperImg1 from "../../../images/template/template1.jpg";
import swiperImg2 from "../../../images/template/template-4.png";
import swiperImg3 from "../../../images/template/template-6.jpg";
import swiperImg4 from "../../../images/template/template-11.jpg";
import swiperImg5 from "../../../images/template/template-10.jpg";
import swiperImg6 from "../../../images/template/template-main.jpg";
import swiperImg7 from "../../../images/template/template-main2.jpg";
import swiperImg8 from "../../../images/template/template-main3.jpg";
import swiperImg9 from "../../../images/template/templatemain-4.jpg";


const LatestWork = () => {


  return (
    <div style={{
      backgroundImage: "linear-gradient(65deg, rgb(7, 26, 82) 3%, rgb(7, 26, 82) 40%, rgb(8, 105, 114) calc(40% + 1px), rgb(8, 105, 114) 60%, rgb(23, 185, 120) calc(60% + 1px), rgb(23, 185, 120) 68%, rgb(167, 255, 131) calc(68% + 1px), rgb(167, 255, 131) 100%)", borderRadius: '20px', cursor: 'grab'
    }} className="p-2">
      <h5 className="text-center p-2" style={{ color: 'rgb(167, 255, 131)' }}>OUR PORTFOLIO <strong classNama="text-success"> ___</strong></h5>
      <h2 className="text-center mt-3"> <strong style={{ color: 'rgb(167, 255, 131)' }}>Latest Project</strong> </h2>
      <div className=" container container-fluid mt-5 p-3 carousel">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() =>
            console.log('slide change')
          }
        >
          <SwiperSlide>
            <img className="img-fluid" src={swiperImg8} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg9} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>
          
          <SwiperSlide>
            <img className="img-fluid" src={swiperImg4} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg1} style={{ width: 'auto', height: 'auto', }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg2} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg3} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg5} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg6} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="img-fluid" src={swiperImg7} style={{ width: 'auto', height: 'auto' }} alt="" />
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
};

export default LatestWork;