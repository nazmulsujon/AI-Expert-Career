import email from "./Assests/email.svg";
import newsletter from "./Assests/newsLetter.svg";

const NewsLetter = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse ">
        <div className="">
          <h2 className="text-[35px] font-bold pb-3">Our Newsletter</h2>
          <p className="text-[#696969] font-bold">
            Lorem Ipsum as their default model text, and a search for lorem ipsum
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years
          </p>
          <div className="pt-14">
            <div className="border flex bg-white w-full pl-2">
              <img src={email} alt="" />
              <input
                type="email"
                className="border-none outline-none w-full p-3"
              />
              <button className="bg-[#FF0944] text-white w-[171px] rounded-[5px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={newsletter} alt="" className="w-[497px] h-[379px]" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
