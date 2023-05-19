import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle"
import "swiper/css/autoplay"
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Bannar = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide ><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG95fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1592004604827-63bab259629f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1484824823018-c36f00489002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-[85vh] w-full" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Bannar;