import { Typography } from "@material-tailwind/react";
import React from "react";
import Image from 'next/image';

function UniversalFeatures() {
  return (
    <div className="pt-4 mt-24   ">
      <div className=" flex flex-col gap-9">
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black text-center lg:text-left"
        >
          Har qanday tarifda sizga quyidagilar mavjud.
        </Typography>

        <div className="flex items-center lg:justify-between  sm:justify-center md:justify-center flex-wrap  gap-4 ">
          {[
            {
              img: "/mail.svg",
              title: "Bepul pochta",
              text: "O'zingizning domeningiz bilan pochta yarating. Xaridorlardan so'rovlar oling va mijozlarga jo'natmalarni sozlang.",
            },
            {
              img: "/clock.svg",
              title: "Veb-sayt bir daqiqada",
              text: "Istalgan maqsad uchun saytni bir daqiqadan kam vaqt ichida yarating va uni to‘ldirishni boshlang.",
            },
            {
              img: "/24hours.svg",
              title: "24/7 qo'llab-quvvatlash",
              text: "Bizning qo'llab-quvvatlash jamoamiz har doim sizga murakkab masalalarda yordam berishga tayyor.",
            },
            {
              img: "/connect.svg",
              title: "Kirish huquqlari",
              text: "Dasturchiga saytingizga kirish huquqini berish kerakmi? U uchun cheklangan huquqlar hisobini yarating",
            },
            {
              img: "/file.svg",
              title: "Oddiy fayl menejeri",
              text: "Hatto yangi boshlovchi ham panelda fayllar bilan ishlashi mumkin",
            },
            {
              img: "/certificate.svg",
              title: "Bepul SSL sertifikati",
              text: "Tarmoqdagi saytning ishonchliligi va xavfsizligining asosiy elementi",
            },
          ].map(({ img, title, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 p-7 bg-[#F5F6FA] rounded-3xl w-full min-h-[200px] md:w-[413px] md:min-h-[269px]"
            >
              <Image src={img} alt={title} className="w-16 h-16" />
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="h3"
                  className="text-2xl md:text-3xl font-outfit font-semibold text-black"
                >
                  {title}
                </Typography>
                <Typography
                  variant="lead"
                  className="text-base md:text-lg font-outfit font-medium text-black"
                >
                  {text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UniversalFeatures;
