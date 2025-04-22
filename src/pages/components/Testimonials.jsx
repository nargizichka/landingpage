import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quotation } from "./icons";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const constants = [
  {
    name: "Bobur Oltiboyev",
    position: "CEO",
    body: "Hosting xizmatlari juda tez va ishonchli! Domen va SSL o'rnatish jarayoni juda oson bo'ldi. Rahmat!",
  },
  {
    name: "Jamshid Qodir",
    position: "CEO",
    body: "Bu sayt orqali domen va hosting xizmatini olish ajoyib tajriba bo'ldi. Narxlari hamyonbop, xizmat sifati yuqori darajada. SSL sertifikatni ham bir zumda o'rnatib olish mumkin ekan.",
  },
  {
    name: "Sayora Isayeva",
    position: "CEO",
    body: "Men uzoq vaqt davomida hosting va domen xizmatlari uchun ishonchli kompaniya qidirib yurdim. Bu sayt meni haqiqatan ham hayratda qoldirdi! Ularning platformasi oddiy va tushunarli qilib yaratilgan, yangi boshlovchilar uchun juda qulay. Domen ro'yxatdan o'tkazish jarayoni oson bo'ldi va SSL sertifikatini o'rnatish bir necha daqiqada amalga oshdi. Xizmat sifati juda yuqori — saytlarim tez va barqaror ishlayapti. Mijozlarga xizmat ko'rsatish guruhi doimo yordamga tayyor va ular har bir savolga tezda javob berishdi. Bu saytni barcha tanishlarimga tavsiya qilaman. Xizmatlari uchun katta rahmat!",
  },
  {
    // Karusel kutilganidek ishlashi uchun eng kamida 4 ta karta kerak, shuning uchun
    // bir xil ma'lumotlarni takrorlaymiz, va faqat mobileda display qilamiz
    name: "Bobur Oltiboyev",
    position: "CEO",
    body: "Hosting xizmatlari juda tez va ishonchli! Domen va SSL o'rnatish jarayoni juda oson bo'ldi. Rahmat!",
  },
];

const card = (item, isMobile) => {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[26rem] h-full bg-milky-white p-6 lg:px-10 lg:py-[27px] flex flex-col rounded-[40px]"
    >
      <div className="mb-[34px]">
        <Quotation classNmae="scale-50 lg:scale-100" />
      </div>
      <CardBody className="p-0 pb-4 flex-1 border-b border-[#CFD3E6]">
        <Typography className="font-outfit text-xs lg:text-lg font-normal text-[#020F15] line-clamp-5">
          {item.body}
        </Typography>
      </CardBody>
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 "
      >
        <Avatar
          className={isMobile ? "w-[30px] h-[30px]" : "w-[63px] h-[63px]"}
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5 ">
          <Typography
            variant="h5"
            className="text-xs lg:text-lg text-[#020F15]"
          >
            {item.name}
          </Typography>
          <Typography className="text-[#020F15]">{item.position}</Typography>
        </div>
      </CardHeader>
    </Card>
  );
};

function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto w-full py-6 lg:px-20 mt-7">
      <Typography
        variant="h1"
        className="font-semibold px-6 lg:px-0 text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Nega aynan biz?
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
          className="h-[296px] touch-pan-y"
        >
          {constants.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              {card(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="flex flex-wrap md:flex-nowrap 2xl:flex-nowrap justify-center gap-5 flex-col lg:flex-row">
          {constants.map(
            (item, index) =>
              index != 3 && (
                <li key={index} className="flex flex-col items-center">
                  {card(item)}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}
export default Testimonials;
