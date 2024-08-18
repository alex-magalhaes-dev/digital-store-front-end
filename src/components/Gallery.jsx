import { useState, useRef } from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Controller, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

//assets
import ArrowSlide from '../assets/icons/arrow-slide.svg'

export default function Gallery({ product = {}, showThumbs, width, height, radius }) {
   const images = product.images || [];
   const [mainSwiper, setMainSwiper] = useState(null);
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   return (
      <div
         style={{
            width: width || "43.75rem",
            height: height || "35.625rem",
         }}
         className="relative"
      >
         <div className="top-[40%] mix-blend-difference pointer-events-none absolute w-full px-4 flex justify-between z-10">
            <button
               ref={prevRef}
               className="-scale-x-90 pointer-events-auto"
            >
               <img
                  src={ArrowSlide}
                  alt="Control slide"
               />
            </button>
            <button
               ref={nextRef}
               className="pointer-events-auto"
            >
               <img
                  src={ArrowSlide}
                  alt="Control slide"
               />
            </button>
         </div>

         <Swiper
            className="overflow-hidden rounded mb-5"
            spaceBetween={0}
            style={{ height: "80%" }}
            slidesPerView={1}
            modules={[EffectFade, Controller, Autoplay, Navigation]}
            grabCursor={true}
            effect="fade"
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            onSwiper={setMainSwiper}
            controller={{ control: thumbsSwiper }}
            navigation={{
               prevEl: prevRef.current,
               nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
               swiper.params.navigation.prevEl = prevRef.current;
               swiper.params.navigation.nextEl = nextRef.current;
            }}
         >
            {images.length > 0 ? (
               images.map(({ src }, index) => (
                  <SwiperSlide key={index}>
                     <img
                        src={src}
                        alt={`Product ${index + 1}`}
                        className="object-cover w-full h-full"
                     />
                  </SwiperSlide>
               ))
            ) : (
               <SwiperSlide>
                  <p>No images available</p>
               </SwiperSlide>
            )}
         </Swiper>

         {showThumbs && images.length > 0 && (
            <Swiper
               className="h-24"
               spaceBetween={10}
               slidesPerView={5}
               onSwiper={setThumbsSwiper}
               watchSlidesProgress
               modules={[Controller]}
               controller={{ control: mainSwiper }}
               allowTouchMove={false}
            >
               {images.map((image, index) => (
                  <SwiperSlide key={index} onClick={() => mainSwiper.slideToLoop(index)}>
                     <img
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                           width: "100%",
                           height: "100%",
                           objectFit: "cover",
                           cursor: "pointer",
                           borderRadius: radius || "4px",
                        }}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
      </div>
   );
}
