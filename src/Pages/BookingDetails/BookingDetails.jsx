/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../Component/Navbar/Navbar";

const BookingDetails = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="h-screen justify-between items-center px-32 flex bg-bgImgGradient bg-cover bg-no-repeat bg-center object-cover">
            <div className="w-[50%] text-white">
               <h1 className=" text-7xl uppercase">Cox's bazar</h1>
               <p className="mt-6">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className="mt-32">
               {/* form start here */}
               <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-[#818181] font-medium">Origin</span>
                        </label>
                        <input type="text" placeholder="Dhaka" className=" font-bold placeholder:font-bold text-[#000] placeholder:text-[#000] input bg-[#F2F2F2]" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-[#818181] font-medium">Destination</span>
                        </label>
                        <input type="text" placeholder="Cox's Bazar" className="text-[#000] font-bold input placeholder:font-bold placeholder:text-[#000] bg-[#F2F2F2]" required />
                     </div>


                     {/* date format */}
                     <div className="flex gap-4">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-[#818181] font-medium">From</span>
                           </label>
                           <input type="date" placeholder="" className="input placeholder:font-bold placeholder:text-[#000] bg-[#F2F2F2]" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-[#818181] font-medium">To</span>
                           </label>
                           <input type="date" placeholder="" className="input placeholder:font-bold placeholder:text-[#000] bg-[#F2F2F2]" required />
                        </div>
                     </div>

                     <div className="form-control mt-6">
                        <button className="btn bg-primaryColor">Start Booking</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookingDetails;