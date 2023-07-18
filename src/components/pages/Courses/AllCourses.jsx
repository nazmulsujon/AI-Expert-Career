import { Link } from "react-router-dom";
import image1 from "./Assests/image1.png";
import image2 from "./Assests/image2.png";
import image3 from "./Assests/image3.png";
import image4 from "./Assests/image4.png";
import image5 from "./Assests/image5.png";
import image6 from "./Assests/image6.png";
import image7 from "./Assests/image7.png";
import image8 from "./Assests/image8.png";

const AllCourses = () => {
  const freeCourse = [
    {
      id: 1,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image1,
      isFree: true,
    },
    {
      id: 2,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image2,
      isFree: true,
    },
    {
      id: 3,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image3,
      isFree: true,
    },
    {
      id: 4,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image4,
      isFree: true,
    },
  ];
  const machineLearningCourse = [
    {
      id: 1,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image1,
      isFree: false,
      price: 50
    },
    {
      id: 2,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image2,
      isFree: false,
      price: 55
    },
    {
      id: 3,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image3,
      isFree: false,
      price: 60
    },
    {
      id: 4,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image4,
      isFree: false,
      price: 40
    },
  ];
  const designCourse = [
    {
      id: 1,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image5,
      isFree: false,
      price: 70
    },
    {
      id: 2,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image6,
      isFree: false,
      price: 80
    },
    {
      id: 3,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image7,
      isFree: false,
      price: 75
    },
    {
      id: 4,
      courseName: "Machine Learning Courses",
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
      image: image8,
      isFree: false,
      price: 90
    },
  ];
  return (
    <div className="pb-[100px]">
      <h2 className="text-[30px] font-bold text-center pb-[63px]">Our Courses</h2>

      <div>
        {/* machine learning courses card ** data from array of object  */}
        <h2 className="text-[30px] font-bold">Free course</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-[40px] justify-center pt-[30px]  pb-[50px]">
          {freeCourse?.map((machineLearning) => (
            <div
              key={machineLearning.id}
              className="w-full md:w-[280px] p-[16px] bg-white flex flex-col 
               rounded-[7px]"
            >
              <img className="w-full md:w-[279px] h-[220px] md:h-[168px] pt-0" src={machineLearning?.image} alt="" />
              <h2 className="pt-[15px] text-[18px] font-bold ">{machineLearning.courseName}</h2>
              <p className="text-[14px] text-[#818181] font-bold">{machineLearning.details}</p>
              {machineLearning.isFree ? <div className="flex justify-center">
                <Link to={`/dashboard/my-courses`} className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">Start</Link>
              </div> :
                <div className="flex w-full justify-between items-center mt-6">
                  <Link to={`/individualCourse/${machineLearning.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">Buy</Link>
                  <p className="font-semibold">${machineLearning.price}</p>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="text-center pb-[20px]">
          <button className="my-btn w-[120px] h-[41px] bg-[#ED1B24] rounded-[3px] text-white font-bold text-[16px] ">
            See More
          </button>
        </div>
      </div>
      <div>
        {/* Development courses card ** data from array of object  */}
        <h2 className="text-[30px] font-bold">Machine Learning Courses</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-[40px] justify-center pt-[30px]  pb-[50px]">
          {machineLearningCourse?.map((machineLearning) => (
            <div
              key={machineLearning.id}
              className="w-full md:w-[280px] p-[16px] bg-white flex flex-col 
               rounded-[7px]"
            >
              <img className="w-full md:w-[279px] h-[220px] md:h-[168px] pt-0" src={machineLearning?.image} alt="" />
              <h2 className="pt-[15px] text-[18px] font-bold ">{machineLearning.courseName}</h2>
              <p className="text-[14px] text-[#818181] font-bold">{machineLearning.details}</p>
              {machineLearning.isFree ? <Link to={`/individualCourse/${machineLearning.id}`} className="flex justify-center">
                <button className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">Start</button>
              </Link> :
                <div className="flex w-full justify-between items-center mt-6">
                  <Link to={`/individualCourse/${machineLearning.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">Buy</Link>
                  <p className="font-semibold">${machineLearning.price}</p>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="text-center pb-[20px]">
          <button className="my-btn w-[120px] h-[41px] bg-[#ED1B24] rounded-[3px] text-white font-bold text-[16px] ">
            See More
          </button>
        </div>
      </div>
      <div>
        {/* Design courses card ** data from array of object  */}
        <h2 className="text-[30px] font-bold">Development Courses</h2>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-[40px] justify-center pt-[30px]  pb-[50px]">
          {designCourse?.map((design) => (
            <div
              key={design.id}
              className="w-full md:w-[280px] p-[16px] bg-white flex flex-col 
               rounded-[7px]"
            >
              <img className="w-full md:w-[279px] h-[220px] md:h-[168px] pt-0" src={design?.image} alt="" />
              <h2 className="pt-[15px] text-[18px] font-bold ">{design.courseName}</h2>
              <p className="text-[14px] text-[#818181] font-bold">{design.details}</p>
              {design.isFree ? <div className="flex justify-center">
                <button className="px-[26px] mt-6 py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">Start</button>
              </div> :
                <div className="flex w-full justify-between items-center mt-6">
                  <Link to={`/individualCourse/${design.id}`} className="px-[26px]  py-3 text-white bg-[#FF265A]/90 font-semibold rounded-[10px]">Buy</Link>
                  <p className="font-semibold">${design.price}</p>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="text-center pb-[20px]">
          <button className="my-btn w-[120px] h-[41px] bg-[#ED1B24] rounded-[3px] text-white font-bold text-[16px] ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
