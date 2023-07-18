import instrImg from '../../../assets/aboutus/Ellipse 52.png'
import instrImg2 from '../../../assets/aboutus/Ellipse 56.png'
import instrImg3 from '../../../assets/aboutus/Ellipse 57.png'
const Instructors = () => {
    const instructorsDetails = [
        {
            Name: 'Jane Cooper',
            photo: instrImg,
            JobTitle: 'Graphic Designer',
            about: '“Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy.'
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg2,
            JobTitle: 'Graphic Designer',
            about: '“Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy.'
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg3,
            JobTitle: 'Graphic Designer',
            about: '“Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy.'
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg,
            JobTitle: 'Graphic Designer',
            about: '“Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy.'
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg2,
            JobTitle: 'Graphic Designer',
            about: '“Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy.'
        },
        {
            Name: 'Jane Cooper',
            photo: instrImg3,
            JobTitle: 'Graphic Designer',
            about: '“Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy.'
        },
    ]
    return (
        <div className="mt-[70px]">
            <h1 className="text-center text-[35px] font-bold">Instructors</h1>
            <p className="text-center md:w-[500px] m-auto">Lorem Ipsum as their default model text, and a search for `lorem ipsum` will uncover many web sites still in their infancy. Various versions have evolved over the years, </p>
            <div className='mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[135px] gap-y-[52px]'>
                {instructorsDetails.map((instruct, i) => <div key={i} className='text-center'>
                    <img src={instruct.photo} alt="" className='mx-auto' />
                    <h2 className='text-[30px] font-bold'>{instruct.Name}</h2>
                    <p className='mt-4'>{instruct.JobTitle}</p>
                    <div className='h-1 w-7 rounded-[3px] bg-[#FE0651]/70 mx-auto mt-2.5'></div>
                    <p className='text-justify mt-7 text-xl font-medium'>{instruct.about}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Instructors;