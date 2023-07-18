import EventTitle from "../EventTitle/EventTitle";
import pointIcon from '../../../../../public/img/event/icon/Group 594.png';
import ticket from '../../../../../public/img/event/icon/line_ticket 1.png';
import EventConferenceCart from "../EventConferenceCart/EventConferenceCart";
// import user from '../../../../../public/img/event/user.jpg';
// import user2 from '../../../../../public/img/event/Polygon 22.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../../Contaxt/Context";


const EventConference = ({ eventConference, event }) => {
  const {setEventData} = useContext(MyContext);
  return (
    <div className="py-8">
      <div className="md:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={pointIcon} className='' alt="" />
          <EventTitle title="Conference and Schedule" />
        </div>
        <Link onClick={()=> setEventData(event)} to="/buy_ticket" className="flex justify-center my-btn md:mt-0 mt-3 items-center gap-3 font-semibold text-white md:w-[200px] w-full  bg-[#DD0A3D] px-4 py-2 rounded-lg"><img src={ticket} alt="" /> Buy a ticket</Link>
      </div>

      <div className="flex flex-row md:flex-col w-full my-7 md:my-0 ">
        <div className="bg-[#FF6F74] p-4 md:rounded-t-[12px] rounded-tl-2xl md:rounded-tl-[12px] grid grid-cols-1 md:grid-cols-4 md:mt-7 items-center w-1/2 md:w-full">
          {eventConference?.Schedule?.map((item, i) => <div key={i} className="">
            <h4 className="text-lg font-bold text-center">Day 1</h4>
            <p className="text-center text-white font-semibold">{item.date}</p>
          </div>
          )
          }
        </div>
        <div className="bg-white py-2 rounded-tr-2xl md:rounded-tr-none items-center grid grid-cols-1 md:grid-cols-4 w-1/2 md:w-full">
          {eventConference?.Schedule.map((item, i) => <div key={i} className="">
            <h4 className="text-lg font-bold text-center">{item.address}</h4>
          </div>)}
        </div>
      </div>

      <div className="bg-[white] py-2 md:px-16 h-[845px] overflow-y-scroll" id="conferenceDiv">
        {

          eventConference?.eventCart.map((item) => {
            return (
              <EventConferenceCart key={item.id} item={item} />
            )
          })}
      </div>

      {/* Our Professional Speacker */}
      <div className="flex  items-center gap-3 py-5 mt-[30px]">
        <img src={pointIcon} className='' alt="" />
        <EventTitle title="Our Professional Speacker" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {eventConference?.ProfessionalSpeaker.map((speacker, i) => <div key={i} className="cart" align="center">
          <img src={speacker?.img} className="w-[150px]  mb-2" alt="" />
          <div className="">
            <h3 className="text-[red] text-xl font-bold">{speacker?.name}</h3>
            <p className="mt-2 font-bold text-[#000000]">{speacker?.profession}</p>
            <p className="mt-3">{speacker?.description}</p>
          </div>
        </div>)}

      </div>


    </div>
  );
};

export default EventConference;