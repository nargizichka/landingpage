import { Button, Typography } from "@material-tailwind/react";
import React from "react";

function OrderRequest() {
  return (
    <div className=" mt-12 ">
      <div className="relative overflow-hidden flex flex-col items-center justify-center gap-6 mt-10 mb-5 min-h-[360px] bg-[#F5F6FA] py-8 px-5 sm:px-7 rounded-3xl">
        <div className="flex items-start justify-between flex-wrap gap-6 sm:gap-7 xl:gap-28 w-full max-w-[1200px] px-9">
          <div className="flex flex-col items-start justify-between max-w-full lg:max-w-[530px] min-h-[183px] gap-6">
            <Typography
              variant="h2"
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-5xl font-outfit font-semibold text-[#292929]"
            >
              Buyurtma berish so’rovi
            </Typography>

            <Typography
              variant="lead"
              className="text-base sm:text-lg md:text-xl lg:text-xl font-outfit text-[#292929]"
            >
              Kerakli serverni topa olmadingizmi? Telegramda <br /> bizning
              mutaxassisimizga yozing. U siz uchun to&apos;g&apos;ri <br /> echim topadi.
              Ham kichik, ham yirik loyihalar uchun variantlar mavjud.
            </Typography>
          </div>

          <div className=" ">
            <Button className="rounded-xl text-sm sm:text-base md:text-lg lg:text-xl bg-[#EE2F5E] font-inter font-semibold text-white  w-[182px] px-6 sm:px-10 py-4 sm:py-5 normal-case tracking-wider">
              Yozish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderRequest;
