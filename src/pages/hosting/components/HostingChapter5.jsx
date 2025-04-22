import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import Image from 'next/image';

function HostingChapter5() {
  return (
    <div className=" mt-24 ">
      <div className="relative overflow-hidden flex flex-col items-start justify-between gap-6 mt-10 mb-5 min-h-[360px] bg-black py-8 px-5 sm:px-7 rounded-3xl">
        <div className="flex items-end justify-between flex-wrap gap-6 sm:gap-7 xl:gap-28 w-full max-w-[1200px]">
          <div className="flex flex-col items-start justify-between max-w-full lg:max-w-[817px] min-h-[176px] gap-4">
            <Typography
              variant="h2"
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-5xl font-outfit font-semibold text-white"
            >
              Biz har qanday murakkablikdagi veb-saytni o&apos;tkazamiz
            </Typography>

            <Typography
              variant="lead"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-outfit text-white"
            >
              Va biz uning avvalgi ish faoliyatini saqlab qolamiz.
            </Typography>
          </div>

          <div className="w-full sm:w-auto">
            <Button className="rounded-full text-sm sm:text-base md:text-lg lg:text-xl bg-[#EE2F5E] font-inter font-semibold text-white w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 normal-case tracking-wider">
              Loyihani ko&apos;chirish
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-4 w-full">
          {[
            {
              img: "/user.svg",
              text: "Biz siz uchun maxsus tarif rejasini tanlaymiz",
            },
            {
              img: "/safefile.svg",
              text: "Barcha ma'lumotlar xavfsiz tarzda saqlanadi.",
            },
            {
              img: "/like.svg",
              text: "Sayt ishlashini o'zimiz tekshirib ko'ramiz",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-5 sm:p-6 bg-[#F5F6FA] rounded-3xl w-full sm:w-[calc(50%-8px)] lg:w-[387px] min-h-[216px]"
            >
              <Image
                src={item.img}
                alt="icon"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <Typography
                variant="h3"
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-outfit font-semibold text-black"
              >
                {item.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col mt-11 gap-9">
        <Typography
          variant="h2"
          className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[60px] font-outfit font-semibold text-black text-center lg:text-left"
        >
          Mashhur CMS va texnologiyalar
        </Typography>

        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 mx-auto">
          {[
            "wordpress",
            "1C",
            "joomla",
            "drupal",
            "modX",
            "opencart",
            "prestashop",
            "django",
            "netcat",
            "drupalbb",
            "mediawiki",
            "opencart",
          ].map((name, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-[#F5F6FA] rounded-3xl
        w-[100px] h-[100px]
        sm:w-[140px] sm:h-[140px]
        md:w-[160px] md:h-[160px]
        lg:w-[197px] lg:h-[197px]"
            >
              <Image
                src={`/photos/${name}.svg`}
                alt={name}
                className="w-[40px] h-[50px]
          sm:w-[60px] sm:h-[70px]
          md:w-[70px] md:h-[90px]
          lg:w-[87px] lg:h-[111px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HostingChapter5;
