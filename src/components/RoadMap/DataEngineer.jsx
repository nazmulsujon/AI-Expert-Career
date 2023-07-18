import DataSvg from '../../assets/roadmap_svg/Big Data Engineer.svg';
import DataSvg2 from '../../assets/roadmap_svg/Principles.svg';
import DataSvg3 from '../../assets/roadmap_svg/Tools.svg';
import DataSvg4 from '../../assets/roadmap_svg/Data Engineer.svg';
import { useEffect } from 'react';

const DataEngineer = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-28">
      <p
        style={{ fontFamily: 'Josefin Sans' }}
        className="text-3xl font-bold text-red-600 border-b-2 border-red-600 py-5"
      >
        Data Engineer Roadmap{' '}
      </p>
      <div>
        <div className="flex justify-center mt-6">
          <img src={DataSvg} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center mr-20">
          <img src={DataSvg2} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center ml-10 -mt-3">
          <img src={DataSvg3} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center mt-10">
          <img src={DataSvg4} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
      </div>
    </div>
  );
};

export default DataEngineer;
