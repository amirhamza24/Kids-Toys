// import React from 'react';
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/pagination";
import "swiper/css/navigation";

// import { StaticImage } from "gatsby-plugin-image";
import slide1 from "../../../../assets/all/banener/slider-1.jpg"
import slide2 from "../../../../assets/all/banener/slider-2.jpg"
import slide3 from "../../../../assets/all/banener/slider-3.jpg"

// import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <Swiper 
            spaceBetween={50} 
            slidesPerView={1}
            navigation = {true}
            modules={[Navigation]}
        >


            <SwiperSlide>
                <img className="relative h-[100vh]" src={slide1} alt="" />

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-10/12 h-full mx-auto text-center">
                        <div className="h-full flex items-center justify-center">
                            <div className="title-font space-y-4">
                                <h2 className="text-5xl font-extrabold text-black uppercase leading-tight tracking-wide">
                                    Pick The best <br /> toy for your kid
                                </h2>

                                <p className="text-lg tracking-wide text-black">
                                    Make play time a blast with our finest toys and game !
                                </p>

                                <button className="bg-lime-600 hover:bg-slate-900 text-white px-4 py-2">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className="relative h-[100vh]" src={slide2} alt="" />

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-10/12 h-full mx-auto">
                        <div className="h-full flex items-center">
                            <div className="title-font space-y-4">
                                <h2 className="text-4xl font-extrabold text-black uppercase leading-tight tracking-wider">
                                    Designer dolls much bee <br /> active baby all
                                </h2>

                                <p className="text-lg tracking-wide text-black">
                                    Make play time a blast with our finest toys and game !
                                </p>

                                <button className="bg-lime-600 hover:bg-slate-900 text-white px-4 py-2">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className="relative h-[100vh]" src={slide3} alt="" />

                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-10/12 h-full mx-auto text-right">
                        <div className="h-full flex items-center justify-end">
                            <div className="title-font space-y-4">
                                <h2 className="text-5xl font-extrabold text-black uppercase leading-tight tracking-wider">
                                    Pick The best <br /> toy for your kid
                                </h2>

                                <p className="text-lg tracking-wide text-black">
                                    Make play time a blast with our finest toys and game !
                                </p>

                                <button className="bg-lime-600 hover:bg-slate-900 text-white px-4 py-2">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
