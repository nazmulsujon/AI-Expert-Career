import { useState } from 'react'
import { Tab } from '@headlessui/react'
import tabImg from '../../../assets/aboutus/Rectangle 119.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const AboutUsTabs = () => {
    let [categories] = useState([
        {
            title: 'How',
            details: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident'
        },
        {
            title: 'Motivation',
            details: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident'
        },
        {
            title: 'Mission',
            details: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident'
        },
        {
            title: 'Title',
            details: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident  the years, sometimes by accident, sometimes on purpose infancy. Various versions have evolved over the years, sometimes by accident evolved over the years, sometimes by accident'
        }

    ])
    return (

        <div className="w-full  px-2 py-16 sm:px-0">
            <Tab.Group>
                <div className='flex justify-center'>
                    <Tab.List className="grid grid-cols-2 md:grid-cols-4 space-x-1 rounded-xl  p-1 w-full lg:w-4/6">
                        {categories.map((category, i) => (
                            <Tab
                                key={i}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-xl leading-5 text-black font-bold outline-none',
                                        selected
                                            ? 'border-b-4 border-[#FE0651]/70 '
                                            : ' '
                                    )
                                }
                            >
                                {category.title}
                            </Tab>
                        ))}
                    </Tab.List>
                </div>
                <Tab.Panels className="mt-10">
                    {Object.values(categories).map((item, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <div className='flex justify-center items-center'>
                                <div className='md:w-5/6 w-full px-2 md:px-0 lg:flex'>
                                    <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                                        <h3 className='text-[30px] font-bold text-[#FE0651]'>{item.title}</h3>
                                        <p className='mt-3 text-[rgba(0,0,0,0.6)]'>{item.details}</p>
                                    </div>
                                    <div className='w-full lg:w-1/2 h-[242px] flex justify-center items-center'>
                                        <img src={tabImg} alt="" className='' />
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}


export default AboutUsTabs;