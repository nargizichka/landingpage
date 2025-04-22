import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="max-w-[1440px] mx-auto mb-6 lg:mb-8 lg:px-20 w-full bg-white">
      <div className="relative flex items-center justify-center lg:justify-between lg:pl-[90px] lg:pr-[103px] lg:rounded-[40px] bg-transparent lg:bg-black text-white md:justify-between">
        <div className="relative z-10 w-full lg:w-[545px] overflow-hidden flex flex-col items-center justify-center lg:items-start pt-[73px] pb-[90px] px-7  lg:px-0 lg:py-14">
          <Typography
            as="h1"
            className="font-bold lg:font-extrabold font-outfit text-3xl lg:text-6xl flex flex-col items-center lg:items-start gap-[10px]"
          >
            <span>Eng ishonchli</span>
            <span>Hosting Xizmati!</span>
          </Typography>
          <Typography
            as="p"
            className="font-inter font-semibold text-base lg:text-lg text-center lg:text-start mt-6 lg:mt-[10px]"
          >
            Tezlik, xavfsizlik va uzluksiz ish faoliyati bilan mukammal xizmatni
            tanlang!
          </Typography>
          <div className="flex flex-wrap gap-[10px] mt-12 lg:mt-20">
            <Button className="font-inter text-xs p-0 lg:text-xl capitalize inline-block w-[114px] lg:w-[160px] h-[44px] lg:h-[64px]  rounded-full bg-custom-pink font-semibold border-none shadow-none">
              <span>Bog'lanish</span>
            </Button>
            <Button className="font-inter text-xs p-0 lg:text-xl capitalize inline-block w-[171px] lg:w-[227px] h-[44px] lg:h-[64px]  rounded-full bg-black border border-white font-semibold shadow-none">
              <span>Ko'proq ma'lumot</span>
            </Button>
          </div>
        </div>
        <Image
          src="/images/HeroBack.jpeg"
          alt="Hero Image"
          width={434}
          height={468}
          className="hidden lg:block"
        ></Image>
        <div
          className="block lg:hidden w-full h-full absolute bg-cover blur-sm bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/HeroBack.jpeg')" }}
        ></div>
      </div>
    </div>
  );
}
export default HeroSection;
