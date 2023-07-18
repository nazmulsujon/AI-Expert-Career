import cart from '../../../../../public/img/event/cart.jpg';
const EventDetails = () => {
    return (
        <div className="grid md:grid-cols-2 mt-12 gap-12">
          <div className="">
              <h1 className="text-[#000000] text-[30px] font-bold">Event Details</h1><br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut veniam earum, architecto perferendis amet consequatur. Est aliquam explicabo quae, nihil odit labore sed molestias hic consequatur vel mollitia sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perferendis minima atque quidem nihil consequatur sequi quae commodi saepe quo, veniam animi necessitatibus et temporibus cum architecto alias praesentium eos. Molestiae voluptatum consequatur vero minus quae veniam aspernatur tempore deleniti? Alias quo blanditiis commodi. Possimus consectetur perspiciatis dignissimos assumenda labore fugiat ratione nam fugit? Fuga qui temporibus exercitationem inventore ullam minima, illum ab molestias deserunt non commodi neque veniam. Deleniti vero sint facilis eos error quas distinctio esse. Quidem minima nisi quis accusamus modi omnis, nostrum quaerat cupiditate voluptate. Soluta, culpa ratione? 
              </p>
              <img src={cart} className='rounded-xl mt-7' alt="" />
          </div>
          <div className="">
              <form className="bg-white p-10">
                    <h1 className="text-black font-bold text-[27px] ">Register now</h1>
                        <br /><br />
                    <input className='border-b-2 border-[gray] w-full ' type="email" placeholder='enter your email'/> <br />
                    <input className='border-b-2 border-[gray] w-full mt-9' type="text" placeholder='enter your name'/> <br />
                    <input className='border-b-2 border-[gray] w-full mt-9' type="tell" placeholder='enter your phone number'/> <br />
                    <input className='border-b-2 border-[gray] w-full mt-9' type="password" placeholder='enter your password'/> <br />
                    <input type="submit" className=' my-btn bg-[red]  w-full mt-10 py-3 duration-300 rounded-lg' />
              </form>
          </div>
        </div>
    );
};

export default EventDetails;