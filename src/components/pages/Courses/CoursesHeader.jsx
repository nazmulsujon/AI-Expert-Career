// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import CoursesHeaderImg from './coursesHeader.png';
import CoursesHeaderSVG from './headerSVG.svg';

// import required modules
import { Pagination } from 'swiper';
const CoursesHeader = () => {
  return (
    <div className="">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide>
          <div
            className="w-full lg:py-12 h-full"
            style={{
              backgroundImage: `url(${CoursesHeaderImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="lg:flex  w-full h-full px-4">
              <div className=" h-full ml-3 lg:w-1/2">
                <h2 className="text-[32px] pt-2 lg:text-[42px] text-white font-extrabold text-left">
                  Learn Advance Python
                </h2>
                <p className="text-[11px] lg:text-[15px] text-[#BCBCBC] mt-10 text-left">
                  tt remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <div>
                  <button className="px-[50px] rounded-[5px] py-[16px] bg-[#FE0651] text-white font-bold my-btn mt-6 lg:mt-10 ">
                    Enroll
                  </button>
                </div>
              </div>
              <div className=" h-full flex justify-center items-center lg:w-1/2">
                <img src={CoursesHeaderSVG} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full lg:py-12 h-full"
            style={{
              backgroundImage: `url(${CoursesHeaderImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="lg:flex  w-full h-full px-4">
              <div className=" h-full ml-3 lg:w-1/2">
                <h2 className="text-[32px] pt-2 lg:text-[42px] text-white font-extrabold text-left">
                  Learn Advance Python
                </h2>
                <p className="text-[11px] lg:text-[15px] text-[#BCBCBC] mt-10 text-left">
                  tt remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <div>
                  <button className="px-[50px] rounded-[5px] py-[16px] bg-[#FE0651] text-white font-bold my-btn mt-6 lg:mt-10 ">
                    Enroll
                  </button>
                </div>
              </div>
              <div className=" h-full flex justify-center items-center lg:w-1/2">
                <img src={CoursesHeaderSVG} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full lg:py-12 h-full"
            style={{
              backgroundImage: `url(${CoursesHeaderImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="lg:flex  w-full h-full px-4">
              <div className=" h-full ml-3 lg:w-1/2">
                <h2 className="text-[32px] pt-2 lg:text-[42px] text-white font-extrabold text-left">
                  Learn Advance Python
                </h2>
                <p className="text-[11px] lg:text-[15px] text-[#BCBCBC] mt-10 text-left">
                  tt remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <div>
                  <button className="px-[50px] rounded-[5px] py-[16px] bg-[#FE0651] text-white font-bold my-btn mt-6 lg:mt-10 ">
                    Enroll
                  </button>
                </div>
              </div>
              <div className=" h-full flex justify-center items-center lg:w-1/2">
                <img src={CoursesHeaderSVG} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default CoursesHeader;
