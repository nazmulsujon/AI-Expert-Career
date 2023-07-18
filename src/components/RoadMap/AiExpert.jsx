import dataScience from '../../assets/targeting.png';
import machineLearning from '../../assets/brain.png';
import { Link } from 'react-router-dom';
import chooseSvg from '../../assets/roadmap_svg/Choose  your path.svg';
import fundamentalsSvg from '../../assets/roadmap_svg/Fundamentals.svg';
import pythonSvg from '../../assets/roadmap_svg/pythonProgramming.svg';
import exploratorySvg from '../../assets/roadmap_svg/Exploratory Data Analysis.svg';
import { useEffect } from 'react';

const AiExpert = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-20 mb-28">
        <p
          style={{ fontFamily: 'Josefin Sans' }}
          className="text-3xl font-bold text-black py-5 text-center"
        >
          Ai Expert Career Roadmap
        </p>
        <div className="flex justify-center">
          <p className="w-8 h-1 rounded-lg flex justify-center  bg-red-500"></p>
        </div>

        <div className=" md:flex  justify-center gap-8 mt-11">
          <Link to="/roadmap/aiexpert/datascience">
            <div className="bg-white py-6 md:px-12 px-4 mb-3 rounded-sm flex items-center gap-x-2">
              <img src={dataScience} alt="" className='select-none pointer-events-none no-select unselectable' />
              <span>Data Science Roadmap</span>
            </div>
          </Link>
          <Link to="/roadmap/aiexpert/machinelearning">
            <div className="bg-white py-6 md:px-12 px-4 mb-3 rounded-sm flex items-center gap-x-2">
              <img src={machineLearning} alt="" className='select-none h-[30px] pointer-events-none no-select unselectable' />
              <span>Machine Learning Roadmap</span>
            </div>
          </Link>
          <Link to="/roadmap/aiexpert/deeplearning">
            <div className="bg-white py-6 md:px-12 px-4 mb-3 rounded-sm flex items-center gap-x-2 ">
              <img src={dataScience} alt="" className='select-none h-[40px] pointer-events-none no-select unselectable' />
              <span>Deep Learning Roadmap</span>
            </div>
          </Link>
          <Link to="/roadmap/aiexpert/dataengineer">
            <div className="bg-white py-6 md:px-12 px-4 mb-3 rounded-sm flex items-center gap-x-2 ">
              <img src={dataScience} alt="" className='select-none h-[40px] pointer-events-none no-select unselectable' />
              <span>Data Engineer Roadmap</span>
            </div>
          </Link>
        </div>

        <div>
          <h2 className="text-center text-xl mt-11">Disclamimer</h2>
          <div className="flex justify-center">
            <p className="text-center  mt-4 lg:w-[80%] mx-auto">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.`}
            </p>
          </div>
        </div>

        <div className="md:flex justify-center gap-x-8 mt-20">
          <div>
            <img className="image-lock  select-none pointer-events-none no-select unselectable" src={chooseSvg} alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-center">Required for any skill</h2>
            <p className="bg-red-500 text-lg text-white py-3  px-12 rounded-full">
              papers with code
            </p>
            <p className="bg-red-500 text-lg text-white py-3 px-12  rounded-full">
              Get version controll
            </p>
            <p className="bg-red-500 text-lg text-white py-3 px-12  rounded-full">
              semantic versioning
            </p>
            <p className="bg-red-500 text-lg text-white py-3 px-12  rounded-full">
              keep a changelog
            </p>
          </div>
        </div>

        <div className="mt-36 ">
          <div className="flex justify-center">
            <img className="select-none pointer-events-none no-select unselectable" src={fundamentalsSvg} alt="" />
          </div>
          <div className="flex justify-center lg:mr-28">
            <img src={pythonSvg} alt="" className='select-none pointer-events-none no-select unselectable' />
          </div>
          <div className="flex justify-center lg:ms-16">
            <img src={exploratorySvg} alt="" className='select-none pointer-events-none no-select unselectable' />
          </div>
        </div>
      </div>
    </>
  );
};

export default AiExpert;
