import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { UpArrowIcon } from "./icons";
import Image from 'next/image';

function Services() {
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
    <div className="max-w-[1440px] mx-auto w-full p-6 lg:px-20 mt-7">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Bizning xizmatlarimiz
      </Typography>
      <div className="flex flex-wrap 2xl:flex-nowrap flex-col justify-center gap-5">
        <ul className="flex justify-center gap-5 flex-col xl:flex-row">
          <li className="flex flex-col items-center">
            <Card
              shadow={false}
              className="relative grid h-[375px] lg:h-[600px] w-full xl:max-w-[522px] items-end justify-center overflow-hidden rounded-[40px]"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/images/serverBackground.jpeg')] bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-[#020F15]/20" />
              </CardHeader>

              <CardBody className="relative p-3 md:py-14 md:px-12">
                <Button className="font-inter text-xs mb-9 lg:text-xl capitalize inline-block w-[114px] lg:w-[133px] h-[44px] lg:h-[60px]  rounded-full bg-white text-black font-semibold border-none shadow-none">
                  <span>Ko&apos;proq</span>
                </Button>
                <Typography
                  variant="h2"
                  className="mb-4 text-white text-2xl text-[40px]"
                >
                  Server
                </Typography>
                <Typography
                  variant="paragraph"
                  color="white"
                  className=" text-sm lg:text-xl font-extralight leading-[1.5]"
                >
                  Bizning serverlarimiz Germaniya, Rossiya va boshqa yirik
                  davlatlarning ishonchli ma&apos;lumot markazlarida joylashgan.
                </Typography>
              </CardBody>
            </Card>
          </li>
          <ul className="flex flex-col items-center gap-5">
            <div className="flex gap-5 w-full xl:w-fit">
              <Card className="lg:max-w-[414px] xl:max-w-[738px]  2xl:max-w-[414px] min-h-[138px] xl:h-[290px]  shadow-none bg-custom-pink group rounded-[40px]">
                <CardBody className="h-full text-white p-3 flex flex-col justify-end lg:p-[40px] relative">
                  <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                    <UpArrowIcon
                      color="white"
                      classNmae="scale-50 lg:scale-100"
                    />
                  </div>
                  <Typography
                    variant="h1"
                    className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%]"
                  >
                    VPS/VDS
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs lg:text-xl font-outfit line-clamp-3"
                  >
                    Resurslarni to&apos;liq boshqarish imkonini beruvchi virtual
                    serverlar. Kuchli texnik infratuzilmamiz bilan qulaylik va
                    barqarorlikni ta&apos;minlaymiz.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="xl:hidden 2xl:block 2xl:max-w-[305px] min-w-[134px] max-h-[290px] shadow-none bg-milky-white group rounded-[40px]">
                <CardBody className="h-full text-black p-3 flex flex-col justify-end lg:p-[40px] relative">
                  <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                    <UpArrowIcon
                      color="#020F15"
                      classNmae="scale-50 lg:scale-100"
                    />
                  </div>
                  <Typography
                    variant="h1"
                    className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%]"
                  >
                    Hosting
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs lg:text-xl font-outfit line-clamp-3"
                  >
                    Saytingiz uchun qulay va tezkor xosting xizmatlari.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <Card className="xl:max-w-[738px] h-full max-h-[290px] shadow-none bg-milky-white group rounded-[40px]">
              <CardBody className="h-full text-black p-3 flex flex-col justify-end lg:p-[40px] relative">
                <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                  <UpArrowIcon
                    color="#020F15"
                    classNmae="scale-50 lg:scale-100"
                  />
                </div>
                <Typography
                  variant="h1"
                  className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%]"
                >
                  Domen
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-xs lg:text-xl font-outfit"
                >
                  Brendingiz uchun eng mos va esda qolarli domenni tanlashga
                  yordam beramiz. Sizga kerakli domenni tez va qulay tarzda
                  ro&apos;yxatdan o&apos;tkazing!
                </Typography>
              </CardBody>
            </Card>
          </ul>
        </ul>
        <ul className="flex justify-center gap-5 flex-col lg:flex-row">
          <li className="flex items-center gap-5">
            <Card className="max-w-[414px] flex-1 h-full shadow-none bg-milky-white group rounded-[40px]">
              <CardBody className="h-full text-black p-3 flex flex-col justify-end lg:p-[40px] relative">
                <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                  <UpArrowIcon
                    color="#020F15"
                    classNmae="scale-50 lg:scale-100"
                  />
                </div>
                <Typography
                  variant="h1"
                  className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%] line-clamp-2"
                >
                  SSL <br /> sertifikati
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-xs lg:text-xl font-outfit line-clamp-2"
                >
                  Saytingiz xavfsizligini oshiring va foydalanuvchilaringiz
                  ishonchini qozoning.
                </Typography>
              </CardBody>
            </Card>
            {isMobile && (
              <Card className="flex-1 h-full shadow-none bg-black group rounded-[40px]">
                <CardBody className="h-full text-white p-3 flex flex-col justify-end lg:p-[40px] relative">
                  <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                    <UpArrowIcon
                      color="white"
                      classNmae="scale-50 lg:scale-100"
                    />
                  </div>
                  <Typography
                    variant="h1"
                    className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%]"
                  >
                    Qo&apos;llab <br /> quvvatlash
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs lg:text-xl font-outfit line-clamp-2"
                  >
                    24/7 texnik yordam! Biz sizning barcha muammolaringizni tez
                    va sifatli hal qilishga tayyormiz.
                  </Typography>
                </CardBody>
              </Card>
            )}
          </li>
          <li className="flex flex-col items-center">
            <Card className="lg:max-w-[414px] h-full shadow-none bg-milky-white group rounded-[40px]">
              <CardBody className="h-full text-black p-3 flex flex-col justify-end lg:p-[40px] relative">
                <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                  <UpArrowIcon
                    color="#020F15"
                    classNmae="scale-50 lg:scale-100"
                  />
                </div>
                <Typography
                  variant="h1"
                  className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%]"
                >
                  SMS
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-xs lg:text-xl font-outfit line-clamp-4"
                >
                  Mijozlaringizga tez va oson aloqa yo&apos;llarini taqdim eting.
                  Bizning SMS xizmatlarimiz orqali xabarlaringizni istalgan
                  vaqtda va joyda yetkazing.
                </Typography>
              </CardBody>
            </Card>
          </li>
          {!isMobile && (
            <li className="flex flex-col items-center">
              <Card className="max-w-[414px] h-full shadow-none bg-black group rounded-[40px]">
                <CardBody className="h-full text-white p-3 flex flex-col justify-end lg:p-[40px] relative">
                  <div className="absolute right-7 top-7 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all">
                    <UpArrowIcon
                      color="white"
                      classNmae="scale-50 lg:scale-100"
                    />
                  </div>
                  <Typography
                    variant="h1"
                    className="mb-2.5 mt-[25px] font-semibold text-lg lg:text-[40px] font-outfit leading-[100%] line-clamp-2"
                  >
                    Qo&apos;llab quvvatlash
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-xs lg:text-xl font-outfit line-clamp-3"
                  >
                    24/7 texnik yordam! Biz sizning barcha muammolaringizni tez
                    va sifatli hal qilishga tayyormiz.
                  </Typography>
                </CardBody>
              </Card>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Services;
