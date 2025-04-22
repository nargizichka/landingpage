import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

function TrustedEquipment() {
  const cards = [
    {
      title: "Korporativ veb-saytlar, portallar va CRM tizimlari",
      img: "/photos/servers-rental-photos/pc.png",
    },
    {
      title: "Onlayn do’konlar, bozorlar va agregatorlar",
      img: "/photos/servers-rental-photos/box.png",
    },
    {
      title: "Tez ping uchun ko’p o’yinli  onlayn o’yinlar",
      img: "/photos/servers-rental-photos/pult.png",
    },
    {
      title: "Ma'lumotlar markazida joylashtirish",
      img: "/photos/servers-rental-photos/pc.png",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // стартовое значение
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageSize = (index) => {
    if (index === 1) {
      if (windowWidth < 640) return "200px 130px";
      if (windowWidth < 1024) return "250px 160px";
      return "307px 195px";
    } else {
      if (windowWidth < 640) return "180px 180px";
      if (windowWidth < 1024) return "220px 220px";
      return "247px 247px";
    }
  };

  return (
    <div className="mt-20 px-4">
      <div className="flex flex-col gap-9 justify-center">
        {/* Заголовка */}
        <div className="flex flex-col gap-3">
          <Typography
            variant="h2"
            className=" leading-10   text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black text-center lg:text-left"
          >
            Biz faqat eng yaxshi va tasdiqlangan uskunalardan foydalanamiz
          </Typography>
        </div>

        <div className="w-full overflow-x-auto py-8 px-4">
          <div className="flex items-center justify-center gap-4 min-w-max rounded-2xl ">
            {cards.map((card, index) => (
              <Card
                key={index}
                shadow={false}
                className="relative grid 
             h-[309px] w-[293px]        // base (мобилки)
             sm:h-[340px] sm:w-[329px]  // small (640px+)
             md:h-[369px] md:w-[413px]  // medium (768px+)
             flex-shrink-0 
             items-end justify-center 
             overflow-hidden 
             text-center 
             bg-[#F5F6FA] 
             bg-no-repeat 
             bg-contain 
             bg-right-bottom"
                style={{
                  backgroundImage: `url('${card.img}')`,
                  backgroundSize: getImageSize(index),
                }}
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none "
                ></CardHeader>
                <CardBody className="relative pb-72   pt-8 px-4 md:px-10">
                  <Typography
                    variant="h2"
                    className="mb-6 font-medium leading-[1] text-3xl font-outfit text-left text-[#000000]"
                  >
                    {card.title}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedEquipment;
