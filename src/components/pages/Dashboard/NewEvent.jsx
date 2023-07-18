import event from '../../../assets/Dashboard/Event.png'
import { BiCalendar } from "react-icons/bi";
const NewEvent = () => {
    const events = [
        {
            image: event,
            EventName: 'Graphic design master class',
            Date: '30 jun 2023'
        },
        {
            image: event,
            EventName: 'Graphic design master class',
            Date: '30 jun 2023'
        },
    ]
    return (
        <div>
            <h2 className='mt-[30px] text-xl font-bold'>New event</h2>
            <div className='mt-4 space-y-2.5'>
                {
                    events.map((event, i) => <div key={i} className='flex bg-[#ED1B24]/10 p-2 shadow-[0px_2px_6px_#0000004A]'>
                        <img src={event.image} alt="" className='mr-4 w-[63px] h-[63px] ' />
                        <div className=' w-full mr-2.5'>
                            <h3 className='text-sm font-semibold text-[#ED1B24]'>{event.EventName}</h3>
                            <div className='flex items-center justify-between mt-[12px]'>
                                <p className='flex items-center text-sm font-medium'><BiCalendar className='mb-[4px] mr-1' />{event.Date}</p>
                                <button className='px-7 py-1 bg-[#ED1B24]/80 rounded-full text-white text-xs'>Visit</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewEvent;