import { Button, Typography } from "@material-tailwind/react";
import React from "react";

function FiveDayFreeTrial() {
  return (
    <div className=" mt-12 ">
      <div className="relative overflow-hidden flex flex-col items-center justify-center gap-6 mt-10 mb-5 min-h-[360px] bg-[#F5F6FA] py-8 px-5 sm:px-7 rounded-3xl">
        <div className="flex items-start justify-between flex-wrap gap-6 sm:gap-7 xl:gap-28 w-full max-w-[1200px] px-9">
          <div className="flex flex-col items-start justify-between max-w-full lg:max-w-[530px] min-h-[183px] gap-6">
            <Typography
              variant="h2"
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-5xl font-outfit font-semibold text-[#292929]"
            >
              Bepul server sinovi <br /> - 5 kun davomida
            </Typography>

            <Typography
              variant="lead"
              className="text-base sm:text-lg md:text-xl lg:text-xl font-outfit text-[#292929]"
            >
              Har qanday tayyor server 5kun davomida bepul sinovdan o’tkazilishi
              mumkin. Tegishli konfiguratsiyani tanlang, to’lovni boshlang va
              test chiptasini yarating.
            </Typography>
          </div>

          <div className=" flex">
            <Button className="rounded-xl text-base sm:text-lg md:text-xl lg:text-2xl bg-[#EE2F5E] font-outfit font-medium text-white w-full sm:w-[200px] md:w-[227px] normal-case py-3 px-6 text-center">
              Serverni tanlash
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiveDayFreeTrial;
