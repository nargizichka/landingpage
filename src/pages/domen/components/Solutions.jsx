import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { CheckedIcon } from "./icons";
import Image from "next/image";
import Link from "next/link";

const BigCard = () => {
  return (
    <Card className="relative overflow-hidden w-full shadow-none bg-milky-white rounded-[30px] p-6 lg:p-[30px]">
      <CardBody className="text-black p-0">
        <Typography
          variant="h1"
          className="mb-6 font-semibold text-xl lg:text-[32px] font-outfit"
        >
          Domenni bizga o&apos;tkazing
        </Typography>
        <ul>
          {[
            "Har qanday domenni uzatish mumkin har qanday registratordan",
            "Ru va RF domenlarini o'tkazish - bepul va har doim",
            "Boshqa zonalarni ko'chirish-bepul domenni bir yil oldin to'lashda",
          ].map((item, index) => (
            <li key={index} className="flex gap-[10px]">
              <span className="w-fit my-auto">
                <CheckedIcon />
              </span>
              <Typography
                variant="paragraph"
                className="text-2xl font-outfit line-clamp-3"
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="p-0 mt-[207px]">
        <Link href="#">
          <Button className="text-xs px-[30px] py-[20px] lg:text-[20px] inline-block rounded-full bg-custom-pink font-semibold border-none shadow-none normal-case">
            <span>Domenni o&apos;tkazish</span>
          </Button>
        </Link>
        <Image
          src="/images/domain_box.png"
          alt="Box Image"
          width={450}
          height={450}
          className="absolute -right-16 -bottom-16"
        />
      </CardFooter>
    </Card>
  );
};

export const SmallCard = ({ title, desc, imgSettings }) => {
  return (
    <Card className="flex-1 relative overflow-hidden w-full shadow-none bg-milky-white rounded-[30px] p-6 lg:p-[30px]">
      <CardBody className="text-black p-0">
        <Typography
          variant="h1"
          className="mb-6 font-semibold text-xl lg:text-[32px] font-outfit w-2/3"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-6 font-normal text-sm lg:text-lg font-outfit w-1/2"
        >
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="p-0">
        <Image
          src={imgSettings.src}
          alt="Background Image"
          width={imgSettings.size}
          height={imgSettings.size}
          className={`absolute ${imgSettings.position} ${imgSettings.size} `}
        />
      </CardFooter>
    </Card>
  );
};

const OvalCard = () => {
  return (
    <Card className="w-full col-span-2 shadow-none bg-milky-white rounded-[30px] p-6 lg:p-[30px]">
      <CardBody className="text-black p-0 flex justify-between items-end">
        <div className="flex flex-col">
          <Typography
            variant="h1"
            className="mb-6 font-semibold text-xl lg:text-[32px] font-outfit"
          >
            Domenni topdingizmi, lekin u bandmi?
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal text-sm lg:text-lg font-outfit"
          >
            Domen egasi bilan sotishga rozi bo&apos;ling <br />
            va biz uni sizning orqangizdan ziyofat qilamiz
          </Typography>
        </div>
        <Link href="#">
          <Button className="text-xs px-[30px] py-[20px] lg:text-[20px] inline-block rounded-full bg-custom-pink font-semibold border-none shadow-none normal-case">
            <span>Domenni tanlang</span>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

const Solutions = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full p-6 lg:px-20 mb-6 lg:mb-[120px]">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Har bir domen yechun echim bor
      </Typography>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BigCard />
        <div className="flex flex-col gap-5">
          <SmallCard
            title="Bir necha marta bosish bilan uzaytiring"
            desc="Naqd pulsiz to'lovlarni amalga oshirish"
            imgSettings={{
              src: "/images/domainClock.png",
              size: 453,
              position: "-bottom-36 -right-28",
            }}
          />
          <SmallCard
            title="Whois-da shaxsiy ma'lumotlarni yashirish"
            desc="Egasining shaxsiy ma'lumotlarini firibgarlardan himoya qilaylik,
spamerlar va botlar"
            imgSettings={{
              src: "/images/domainSecurity.png",
              size: 400,
              position: "-bottom-28 -right-28 scale-[120%]",
            }}
          />
        </div>
        <OvalCard />
      </div>
    </div>
  );
};
export default Solutions;
