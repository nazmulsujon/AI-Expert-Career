import { useEffect } from 'react';
import exploratorySvg from '../../assets/roadmap_svg/Machine Learning Roadmap.svg';
const MachineLearning = () => {
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
        Machine Learning Roadmap{' '}
      </p>

      <div>
        <div className="flex justify-center mt-6">
          <img src={exploratorySvg} alt="" className='select-none pointer-events-none no-select unselectable' />
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
