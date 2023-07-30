import loginBG from '../../../assets/LoginBg.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MyContext } from '../../../Contaxt/Context';
import { useContext } from 'react';

const Signup = () => {
  const { language } = useContext(MyContext)
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
                  {language === 'bn' ? 'নতুন একাউন্ট ফর্ম' : "Create an Account"}
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
                    placeholder={language === 'bn' ? 'আপনার ইমেইল' : 'Enter your email'}
                  />
                  <input
                    type="text"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="name"
                    placeholder={language === 'bn' ? 'আপনার নাম' : 'Enter your name'}

                  />
                  <input
                    type="number"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="phone"
                    placeholder={language === 'bn' ? 'আপনার মোবাইল নম্বর' : 'Enter your phone number'}
                  />
                  <input
                    type="password"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[40px] px-2 py-3"
                    name="password"
                    placeholder={language === 'bn' ? 'পাসওয়ার্ড' : 'Enter your password'}
                  />

                  <button
                    type="submit"
                    className="group relative    rounded overflow-hidden border border-[#ED1B24] w-full py-[14px] bg-[#ED1B24] "

                  >
                    <span
                      className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                    ></span>

                    <span
                      className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600"
                    >
                      {language === 'bn' ? 'সাবমিট' : "Sign Up "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="px-10 py-14 bg-[#FFD8D8] lg:col-span-5 relative">
              <div className="lg:absolute top-[50%] left-[50%] lg:transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                <h2 className="text-[27px] font-bold mb-6 text-center">
                  {language === 'bn' ? 'একাউন্ট আছে ?' : " Already create an account"}
                </h2>
                <center>
                  <Link
                    className="group relative    rounded overflow-hidden border border-[#ED1B24] px-[98px] py-[13px] bg-[#ED1B24]"
                    to="/login"
                  >
                    <span
                      className="absolute inset-y-0 left-0 w-[2px]  bg-white transition-all group-hover:w-full"
                    ></span>

                    <span
                      className="relative text-sm font-medium text-white transition-colors  group-hover:text-red-600"
                    >
                      {language === 'bn' ? 'সাইন ইন' : " Sign In"}
                    </span>
                  </Link>
                </center>
                {/* join with google button  */}
                <div className='mt-10  w-[16rem] mx-auto text-center'>
                  <Link
                    to=""
                    className="px-[20px] py-[10px] bg-white rounded-md text-black shadow-lg flex items-center"
                  >
                    <img className='mr-2 w-[20px] h-[20px]' src="/src/assets/register/Google Logo.png" alt="google_logo" />
                    Continue with Google
                  </Link>
                </div>
                {/* join with facebook button  */}
                <div className='mt-5 w-[16rem] mx-auto text-center'>
                  <Link
                    to=""
                    className="px-[20px] py-[10px] bg-[#1877F2] rounded-md text-white shadow-lg flex items-center"
                  >
                    <img className='mr-2 w-[20px] h-[20px]' src="/src/assets/register/facebook_logo.png" alt="facebook_logo" />
                    Continue with Facebook
                  </Link>
                </div>
                {/* join with linkedin button  */}
                <div className='mt-5 w-[16rem] mx-auto text-center'>
                  <Link
                    to=""
                    className="px-[20px] py-[10px] bg-white rounded-md text-black shadow-lg flex items-center"
                  >
                    <img className='mr-2 w-[20px] h-[20px]' src="/src/assets/register/linkedinLogo.png" alt="linkedin_logo" />
                    Continue with Linkedin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
