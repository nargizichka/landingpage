import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const constants = [
  {
    description: "Bizda katta chegirmalar shoshiling",
  },
  {
    description: "Jamoamiz nomidan barchani bayram bilan tabriklaymiz.",
  },
  {
    description: "Eng ishonchli serverlar",
  },
  {
    description: "SMS xizmatlari bo'yicha tariflar o'zgardi",
  },
];
const card = (item) => {
  return (
    <Card className="max-w-[24rem] lg:flex-1 overflow-hidden shadow-none rounded-[30px]">
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 rounded-[30px] bg-milky-white"
      >
        <div className="w-[305px] h-[200px]"></div>
      </CardHeader>
      <CardBody>
        <Typography
          variant="lead"
          color="black"
          className="mt-3 font-semibold text-lg"
        >
          {item.description}
        </Typography>
      </CardBody>
    </Card>
  );
};

function News() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1320);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto w-full lg:px-20 mt-7">
      <Typography
        variant="h1"
        className="font-semibold px-6 text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Yangiliklar
      </Typography>
      {isMobile ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="touch-pan-y"
        >
          {constants.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center h-full"
            >
                {card(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="flex flex-wrap 2xl:flex-nowrap justify-center gap-5 flex-col lg:flex-row">
          {constants.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              {card(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;
