import { useEffect } from 'react';
import AboutUsTabs from './AboutUsTabs';
import Activities from './Activities';
import ContuctUs from './ContuctUs';
import Instructors from './Instructors';
import OurGallary from './OurGallary/OurGallary';
import Topic from './Topic';

const AboutUs = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mt-[60px] lg:mt-[100px]'>
      <div className=" py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
        <div className="">
          <div className="bg-[#d6e1ff] shadow-lg lg:px-[70px] md:px-[35px] px-[16px] py-[26px] md:py-[45px] lg:py-[90px]">
            <h1 className="text-[35px] font-bold">About us</h1>
            <p className=" w-full md:w-4/6 text-[#474747] mt-4">
              Lorem Ipsum as their default model text, and a search for lorem
              ipsum will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose
            </p>
          </div>
          <AboutUsTabs />
          <Activities />
          <Topic />
          <Instructors />
          <OurGallary />
          <ContuctUs />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
