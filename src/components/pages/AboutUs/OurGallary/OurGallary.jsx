import slideImg from '../../../../assets/aboutus/Rectangle 72.png';
import Carousel from './Carousel';
const OurGallary = () => {
  const data = [
    {
      image: slideImg,
    },
    {
      image: slideImg,
    },
    {
      image: slideImg,
    },
  ];

  return (
    <div className="mt-[70px]">
      <h1 className="text-center text-[35px] font-bold">Our Gallary</h1>
      <div className=" flex justify-center ">
        <Carousel
          data={data}
          time={3000}
          width="850px"
          height="500px"
          radius="10px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
        // style={{
        //     textAlign: "center",
        //     maxWidth: "850px",
        //     maxHeight: "500px",
        //     margin: "40px auto",
        // }}
        />
      </div>
    </div>
  );
};

export default OurGallary;
