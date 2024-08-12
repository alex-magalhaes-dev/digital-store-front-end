import { useState } from "react";
import MainSlide from "./MainSlide";
import { SwiperSlide } from "swiper/react";

//swiper
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'

export default function Gallery() {

   //Add a state that will trigger a re-render later
   const [_, setInit] = useState(false)

   return (
      <Swiper
         spaceBetween={0}
         slidesPerView={"auto"}
         speed={800}
         autoplay={{ delay: 5000, disableOnInteraction: true }}
         grabCursor={true}
         autoHeight={true}
         loop={true}

         // pagination={{
         //    el: `.${classPagination}`,
         //    clickable: true,
         //    renderBullet: (_, className) => {
         //       return '<span class="' + className + '"></span>';
         //    },
         // }}

         modules={[Pagination, Autoplay]}

         onInit={() => setInit(true)}
      >

         <SwiperSlide>
            <MainSlide />
         </SwiperSlide>
         <SwiperSlide>
            <MainSlide />
         </SwiperSlide>
      </Swiper>
   )
}