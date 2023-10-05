import BannerContent from '../BannerContent/BannerContent';
import './Banner.css'


const Banner = () => {
   return (
      <div className="carousel w-full">
         {/* slide1 */}
         <div id="slide1" className="carousel-item relative w-full object-cover bg-cover bg-no-repeat bg-center bg-bgImgGradient h-screen">
            <BannerContent></BannerContent>
            <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-3 justify-center gap-2"> 
               <a href="#slide2" className="btn btn-circle">❮</a>
               <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
         </div>
         {/* slide2 */}
         <div id="slide2" className="carousel-item relative w-full bg-bgImgGradient object-cover bg-cover bg-no-repeat bg-center h-screen">
         <BannerContent></BannerContent>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-3 gap-2">
               <a href="#slide1" className="btn btn-circle">❮</a>
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Banner;