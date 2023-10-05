/* eslint-disable react/no-unescaped-entities */
import coxbazar from "/bg1.png"
import sreemongol from "/Sreemongol.png"
import sundorbon from "/sundorbon.png"


const BannerContent = () => {
   return (
      <div className="w-full h-screen items-center flex gap-11 pl-32">
         <div className="text-white w-[40%]">
            <h1 className=" text-7xl uppercase">Cox's bazar</h1>
            <p className="mt-6 mb-6">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...natural sandy beach, and it</p>
            <button className="btn bg-primaryColor border-0">Booking</button>
         </div>
         <div className="h-1/2 flex gap-7 carousel carousel-end">
            <div className="relative carousel-item">
               <img src={coxbazar} className="h-full w-60 brightness-75 rounded-2xl" />
               <h2 className="text-white absolute bottom-8 left-4 text-3xl">Cox’s  Bazar</h2>
            </div>
            <div className="relative  carousel-item">
               <img src={sreemongol} className="h-full w-60" />
               <h2 className="text-white absolute bottom-8 left-4 text-3xl">Sreemangal</h2>
            </div>
            <div className="relative  carousel-item">
               <img src={sundorbon} className="h-full w-60" />
               <h2 className="text-white absolute bottom-8 left-4 text-3xl">Sundarbans</h2>
            </div>
         </div>
      </div>
   );
};

export default BannerContent;