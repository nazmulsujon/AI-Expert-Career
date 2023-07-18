import topicImg from '../../../assets/aboutus/Rectangle 598.png'
import topicImg2 from '../../../assets/aboutus/Rectangle 599.png'
const Topic = () => {
    return (
        <div className='mt-[90px]'>
            <div className='flex lg:flex-row flex-col gap-9'>
                <div className='lg:w-4/6 w-full'>
                    <h2 className="font-bold text-[26px] text-[#2D3957]">Topic title is here</h2>
                    <p className="text-[#000000]/60 mt-5">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident </p>
                </div>
                <div className=' w-full lg:w-[441px]'>
                    <img src={topicImg} alt="" className=' w-full lg:w-[441px] h-[271px]' />
                </div>
            </div>
            <div className='flex lg:flex-row flex-col  gap-9 mt-[74px]'>
                <div className=' w-full lg:w-[441px]'>
                    <img src={topicImg2} alt="" className=' w-full lg:w-[441px] h-[271px]' />
                </div>
                <div className='lg:w-4/6 w-full'>
                    <h2 className="font-bold text-[26px] text-[#2D3957]">Topic title is here</h2>
                    <p className="text-[#000000]/60 mt-5">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident </p>
                </div>
            </div>

        </div>
    );
};

export default Topic;