import { useContext } from 'react';
import loginBG from '../../../assets/LoginBg.svg';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../Contaxt/Context';
import { useEffect } from 'react';

const Login = () => {
  const { setUser } = useContext(MyContext);

  const userInfo = {
    email: 'user@user.com',
    password: '1234',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;

    const email = from.email.value;
    const password = from.password.value;
    if (email === userInfo.email && password === userInfo.password) {
      setUser(true);
    }
  };
  // scrollTo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mt-[90px] mb-[40px] ">
        <div className="py-6 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8">
          <div className="grid lg:grid-cols-12 ">
            <div className="px-[40px] lg:px-[70px] py-[40px] lg:py-[100px] bg-white lg:col-span-7 z-10">
              <div className="relative">
                <h2 className="text-[27px] font-bold mb-[45px]">
                  Login Account
                </h2>
                <img
                  className="absolute right-0 top-[50%] transform -translate-y-[50%] -z-10"
                  src={loginBG}
                  alt=""
                />
                <form action="" className="" onSubmit={handleLogin}>
                  <input
                    type="email"
                    className="bg-[#fff0] border-b border-[#8E8E8E] w-full mb-[35px] px-2 py-3"
                    name="email"
                    placeholder="Enter your email"
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
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="px-10 py-14 bg-[#FFD8D8] lg:col-span-5 relative">
              <div className="lg:absolute top-[50%] left-[50%] lg:transform lg:-translate-x-[50%] lg:-translate-y-[50%]">
                <h2 className="text-[27px] font-bold mb-6 text-center">
                  Create account
                </h2>
                <center>
                  <Link
                    to="/signup"
                    className="px-[60px] py-[14px] bg-[#ED1B24] rounded-md text-white shadow-lg"
                  >
                    Sign Up
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

export default Login;
