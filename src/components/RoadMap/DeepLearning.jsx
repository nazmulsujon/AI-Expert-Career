import deepLearningSvg from '../../assets/roadmap_svg/Deep Learning-2.svg';
import deepLearningSvg2 from '../../assets/roadmap_svg/Neural Networks.svg';
import deepLearningSvg3 from '../../assets/roadmap_svg/Architectures.svg';
import deepLearningSvg4 from '../../assets/roadmap_svg/Training.svg';
import deepLearningSvg5 from '../../assets/roadmap_svg/tools-2.svg';
import { useEffect } from 'react';

const DeepLearning = () => {
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
        Deep Learning Roadmap{' '}
      </p>
      <div className="mb-10">
        <div className="flex justify-center mt-6 mr-28">
          <img src={deepLearningSvg} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center mr-28">
          <img src={deepLearningSvg2} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center ml-28">
          <img src={deepLearningSvg3} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center">
          <img src={deepLearningSvg4} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
        <div className="flex justify-center ">
          <img src={deepLearningSvg5} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
      </div>
    </div>
  );
};

export default DeepLearning;
