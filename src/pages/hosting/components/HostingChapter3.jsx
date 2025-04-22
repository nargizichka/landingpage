import { Button, Typography } from "@material-tailwind/react";
import React from "react";

function HostingChapter3() {
  return (
    <div>
      <div
        className="relative overflow-hidden flex flex-col items-start justify-between gap-4 mt-16 mb-5 min-h-[360px] bg-[#F5F6FA] py-8 px-7 rounded-3xl bg-no-repeat bg-right bg-contain"
        style={{ backgroundImage: "url('/52.svg')" }}
      >
        <div className="flex flex-col items-start justify-between gap-3 max-w-[630px] min-h-[176px] z-10">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black"
          >
            Web saytlar, domenlar va elektron pochta manzillarini
          </Typography>
          <Typography
            variant="lead"
            className="text-3xl font-outfit text-black"
          >
            2 soat ichida ko‘chirib o‘tamiz!
          </Typography>
        </div>

        <div className="flex items-start  gap-8 mt-4 sm:gap-8  flex-wrap z-10 w-full ">
          <Button
            color="black"
            className="rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-inter font-semibold text-white w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 normal-case tracking-wider"
          >
            Saytlar yoki domenlarni ko‘chirish.
          </Button>

          <div className="flex gap-3 justify-center">
            <img src="/gift.svg" alt="gift" className="w-16 h-16" />
            <Typography
              variant="lead"
              className="font-outfit font-medium text-lg text-black max-w-[341px] min-h-[46px]"
            >
              Balansni boshqa xosterdan o'tkazamiz yoki 1 yillik to'lov evaziga
              3 oy bepul beramiz!
            </Typography>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden flex flex-col items-start justify-between gap-4 mt-10 mb-5 min-h-[360px] bg-[#F5F6FA] py-8 px-7 rounded-3xl bg-no-repeat bg-right bg-contain"
        style={{ backgroundImage: "url('/36.svg')" }}
      >
        <div className="flex flex-col items-start justify-between gap-3 max-w-[771px] min-h-[176px] z-10">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black"
          >
            Virtual xosting nima?
          </Typography>

          <Typography
            variant="lead"
            className="text-lg sm:text-xl md:text-2xl font-outfit text-black"
          >
            Virtual xosting – bu internetda veb-saytlarni <br /> joylashtirish
            uchun maxsus xizmat. U saytlarga uzoqdagi serverlarda joylashish
            imkonini beradi, bunda har bir sayt o‘ziga xos manzil va resurslarga
            ega bo‘ladi.
          </Typography>

          <Typography
            variant="lead"
            className="text-lg sm:text-xl md:text-2xl font-outfit text-black mt-2"
          >
            Virtual xostingning afzalliklari:
            <br />• Arzon narx
            <br />• Sayt ishlashi uchun barcha zarur funksiyalar
            <br />• To‘liq texnik xizmat ko‘rsatish
            <br />• Qulay boshqaruv paneli
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default HostingChapter3;
