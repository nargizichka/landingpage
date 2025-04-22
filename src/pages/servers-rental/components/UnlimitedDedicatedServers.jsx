import { Typography } from "@material-tailwind/react";
import React from "react";

function UnlimitedDedicatedServers() {
  return (
    <div className=" mt-12 ">
      <div className=" flex flex-col gap-9 justify-center ">
        <div className="flex flex-col gap-3">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black text-center lg:text-left"
          >
            Cheklovsiz sizning bag’ishlangan serverlaringiz
          </Typography>
          <Typography
            variant="lead"
            className="text-lg  sm:text-xl md:text-2xl lg:text-2xl font-outfit font-medium  text-black text-center lg:text-left"
          >
            Ajratilgan serverlarning ijobiy va ishonchliligi
          </Typography>
        </div>

        <div className="flex items-center justify-center md:justify-center flex-wrap  gap-4 ">
          {[
            {
              img: "/photos/servers-rental-photos/isolation.svg",
              title: "“Qo’shnilar dan mustaqillik",
              text: (
                <>
                  Barcha foydalanuvchilardan to’liq izolyatsiya. <br />
                  Barcha server imkoniyatlari faqat sizniki
                </>
              ),
            },
            {
              img: "/photos/servers-rental-photos/chat.svg",
              title: "Har birtalab uchun tuzilish",
              text: "Har qanday resurslarni talab qiladigan loyihalar uchun variantlar mavjud. Va agar kerak bo’lsa: biz siz uchun maxsus uskunalarni tanlaymiz va sotib olamiz",
            },
            {
              img: "/clock.svg",
              title: "Tez ishga tushirish",
              text: "Tayyor serverni o’sha kuni ishga tushiramiz. Maxsus o’rnatish  - 2 - 3 kun ichida. Maxsus server -  1 hafta ichida. ",
            },
            {
              img: "/photos/servers-rental-photos/settings.svg",
              title: (
                <>
                  Server ustida to’liq nazorat <br /> qilish
                </>
              ),
              text: "Biz ishonchli uskunalardan foydalanamiz:Su- permicro server platformalari va Intel va AMD protsessorlarining so’nggi avlodlari  ",
            },
            {
              img: "/photos/servers-rental-photos/aditional.svg",
              title: "Talab bo’yicha o’lchov",
              text: "Qo’llab quvvatlash guruhiga so’rov ustiga qo’shimcha protsessorlar va disklarni ulang.",
            },

            {
              img: "/photos/servers-rental-photos/call.svg",
              title: "24*7*365  qo’llab-quvvatlash",
              text: "Aloqa har qanday usullari: chipta va panelda suhbat, telefon,elektron pochta, messenjerlar, ijtimoiy tarmoqlar. Server uchun to’lovlarni amalga oshirgandan so’ng, shaxsiy menejer talab qilinadi",
            },
          ].map(({ img, title, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 p-5 bg-[#F5F6FA] rounded-3xl w-full h-[294px] md:w-[414px] "
            >
              <img src={img} alt={title} className="w-16 h-16" />
              <div className="flex flex-col items-start justify-between gap-1">
                <Typography
                  variant="h3"
                  className="text-xl w-full  md:text-2xl font-outfit font-semibold text-black leading-none"
                >
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  className="text-base md:text-lg font-outfit font-normal  text-black"
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

export default UnlimitedDedicatedServers;
