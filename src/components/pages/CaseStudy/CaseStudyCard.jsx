import React from 'react';
import { Link } from 'react-router-dom';
import viwes from './Assests/views.png';
import comment from './Assests/comment.png';

const CaseStudyCard = ({ study }) => {
  return (
    <div key={study.id} className="bg-white w-[288px] h-[389px] rounded-[10px]  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[254px] h-[170px] pt-[15px]"
          src={study.image}
          alt=""
        />
        <Link to="/individual-blog">
          <h2 className="font-bold text-[16px]">{study.title}</h2>
        </Link>
        <p className="w-[240px]">
          {study.description.length > 100
            ? study.description.slice(0, 70) + '...' + ' See More...'
            : study.description}
        </p>

        <div className="flex justify-between items-center gap-[40px]">
          <div>
            {[...Array(1)].map((item, i) => (
              <Link key={i} to={'/individual-case-study/1'}>
                <button className="w-[91px] h-[44px] bg-[#ED1B23] text-white text-[16px] font-[600] rounded-[10px]">
                  Modal
                </button>
              </Link>
            ))}
          </div>
          <div className="flex justify-between gap-[30px]">
            <div className="flex gap-1 cursor-pointer">
              <img className="w-[22px] h-[15px]" src={viwes} alt="" />
              <p className="font-bold text-[14px]">{study.views}</p>
            </div>

            <div className="flex gap-1 cursor-pointer">
              <img className="w-[16px] h-[16px]" src={comment} alt="" />
              <p className="font-bold text-[14px]">{study.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
