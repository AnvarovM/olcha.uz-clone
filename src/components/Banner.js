import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto my-10 px-4">
       <Carousel
       autoPlay
       infiniteLoop
       showStatus={false}
       showIndicators={false}
       showThumbs={false}
       interval={5000}
       emulateTouch={true}
       >
            <div>
               <img className="rounded-xl cursor-pointer" src="https://olcha.uz/image/1400x360/sliders/oz/zemsqgyrTxdGjaIdM1YK5pLCgL5mJNBuJwjUMNlOnuMqq9a1lPKdzvdvlCdA.jpeg" alt="" />
           </div>
           <div>
               <img className="rounded-xl cursor-pointer" src="https://olcha.uz/image/1400x360/sliders/oz/s3r4dyX6sLhpYznargqo6dFVvcoXRCYGNu5tfoJuzC6stETjTw0ol9bprRh5.jpeg" alt="" />
           </div>
           <div>
               <img className="rounded-xl cursor-pointer" src="https://olcha.uz/image/1400x360/sliders/oz/Sv4mPz3gofe0quhLrU0Vef73kTX9ZAnvPyo26QTgnwCSTAO1byv7a59SsxfT.jpeg" alt="" />
           </div>
       </Carousel>

       <div className="">
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center cursor-pointer my-10">
           <img className="banner__image" src="https://olcha.uz/image/380x132/discount/KK/KK/cL/1636001983.png" alt="" />
           <img className="banner__image" src="https://olcha.uz/image/380x132/discount/KK/KK/c8/1635921053.png" alt="" />
           <img className="banner__image" src="https://olcha.uz/image/380x132/discount/KK/KK/cu/1635920911.png" alt="" />
       </div>
       </div>
    </div>
  );
}

export default Banner;
