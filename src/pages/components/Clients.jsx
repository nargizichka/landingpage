import {
  FreemoneyIcon,
  OsonIcon,
  PaymeIcon,
  PaynetIcon,
  UpayIcon,
  UzumIcon,
  ClickIcon,
} from "./icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const icons = [
  ClickIcon,
  PaymeIcon,
  UzumIcon,
  PaynetIcon,
  UpayIcon,
  OsonIcon,
  FreemoneyIcon,
];

function Clients() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={12}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        960: {
          slidesPerView: 5.2,
          spaceBetween: 50,
        },
      }}
      className="mt-[120px] touch-pan-y max-w-[1440px] mx-auto"
    >
      {icons.map((Icon, index) => (
        <SwiperSlide key={index} className="h-full ">
          <div key={index} className="scale-[60%] md:scale-100">
            <Icon />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Clients;
