import loginBG from '../../../assets/LoginBg.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Signup = () => {
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mt-[80px] mb-[40px] ">
        <div className="py-6 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
          <div className="grid lg:grid-cols-12 ">
            <div className="px-[40px] lg:px-[70px] py-[40px] lg:py-[100px] bg-white lg:col-span-7 z-10">
              <div className="relative">
                <h2 className="text-[27px] font-bold mb-[45px]">
                  Create an Account
                </h2>
                <img
                  className="absolute right-0 top-[50%] transform  -translate-y-[50%]  -z-10"
                  src={loginBG}
                  alt=""
                />
                <form action="" className="">
                  <input
                    type="email"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input
                    type="text"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <input
                    type="number"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                  <input
                    type="password"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[40px] px-2 py-3"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <button
                    type="submit"
                    className=" py-[14px] bg-[#ED1B24] rounded-md text-white shadow-lg w-full"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <div className="px-10 py-14 bg-[#FFD8D8] lg:col-span-5 relative">
              <div className="lg:absolute top-[50%] left-[50%] lg:transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                <h2 className="text-[27px] font-bold mb-6 text-center">
                  Already create an account
                </h2>
                <center>
                  <Link
                    to="/login"
                    className="px-[60px] py-[14px] bg-[#ED1B24] rounded-md text-white shadow-lg"
                  >
                    Sign In
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
