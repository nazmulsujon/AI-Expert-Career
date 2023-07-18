import courseImg from "../../../assets/wishlist/courseimg.jpg";
import aboutBlog from "../../../assets/wishlist/ai.jpg";
import msgIcon from "../../../assets/wishlist/icons/msg-icon.svg";
import eyeIcon from "../../../assets/wishlist/icons/eye-icon.svg";
import { useEffect } from "react";

const Wishlist = () => {
  const aboutCourses = [
    {
      id: "1",
      img: courseImg,
      headline: "Machine Learning Courses",
      info: "11 Courses",
    },
    {
      id: "2",
      img: courseImg,
      headline: "Machine Learning Courses",
      info: "11 Courses",
    },
  ];
  const aboutBlogs = [
    {
      id: "1",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "2",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "3",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "4",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "5",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
    {
      id: "6",
      img: aboutBlog,
      headline: "Artificial Intelligence Master",
      info: "Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years Various versions have evolved over the years many web sites still in their infancy.",
    },
  ];
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="my-12">
        <h1 className="font-bold ">Course</h1>
        <div className="grid md:grid-cols-3 gap-12">
          {aboutCourses.map(({ id, img, headline, info }) => (
            <div
              key={id}
              className="border-gray-50 shadow-lg hover:shadow-lg bg-[#FFFFFF] rounded-[10px] w-[280px] h-[300px]"
            >
              <center>
                <img className="mb-[18px] w-full shadow-md" src={img} alt="courseImg" />
              </center>
              <div className="">
                <h3 className="text-[20px] px-12 font-bold mb-[10px] text-center">{headline}</h3>
                <p className="font-semibold text-center mb-[10px]">{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-12">
        <h1 className="font-bold ">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {aboutBlogs.map(({ id, img, headline, info }) => (
            <div
              key={id}
              className="px-[17px] py-[15px] shadow-lg hover:shadow-lg rounded-[10px] bg-[#FFFFFF]  w-[282px] h-[390px]"
            >
              <center>
                <img className="mb-[18px] w-full" src={img} alt="courseImg" />
              </center>
              <div className="">
                <h3 className="text-[18px] font-bold mb-[10px] text-center">{headline}</h3>
                <p className="font-semibold text-center mb-[10px] text-[12px]">
                  {info.slice(0, 100) + "..."} <a href="#">See More</a>
                </p>
              </div>
              <div className="flex justify-between items-center my-8">
                <button className="btn bg-[#ED1B23] text-white w-[91px] h-[44px] rounded-[10px]">Modal</button>
                <a href="#" className="flex items-center">
                  <img className="mr-2" src={msgIcon} alt="" /> 50
                </a>
                <a href="#" className="flex items-center">
                  <img className="mr-2" src={eyeIcon} alt="" /> 50
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
