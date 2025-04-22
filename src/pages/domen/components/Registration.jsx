import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const BigCard = ({ title, desc, subdesc, imgSettings, link }) => {
  return (
    <Card className="relative overflow-hidden w-full shadow-none bg-milky-white rounded-[30px] p-6 lg:p-[30px]">
      <CardBody className="text-black p-0">
        <Typography
          variant="h1"
          className="mb-6 font-semibold text-xl lg:text-[32px] font-outfit"
        >
          {title}
        </Typography>
        <Typography variant="paragraph" className="text-2xl font-outfit">
          {desc}
        </Typography>
        {subdesc && (
          <Typography
            variant="paragraph"
            className="text-2xl font-outfit line-clamp-3 text-custom-pink mt-[30px]"
          >
            {subdesc}
          </Typography>
        )}
      </CardBody>
      <CardFooter className="p-0 mt-[207px]">
        {link && (
          <Link href={link.href}>
            <Button className="text-xs px-[30px] py-[20px] lg:text-[20px] inline-block rounded-full bg-custom-pink font-semibold border-none shadow-none normal-case">
              <span>{link.title}</span>
            </Button>
          </Link>
        )}
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
            className="mb-6 font-semibold text-xl lg:text-[32px] font-outfit text-custom-pink"
          >
            yoki. RF 1 yil davomida xosting uchun to'lashda
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal text-sm lg:text-lg font-outfit"
          >
            12 oylik har qanday xosting tarifini va domenni to'lang <br />
            bepul ro'yxatdan o'tkaziladi yoki yangilanadi.
          </Typography>
        </div>
        <Link href="#">
          <Button className="text-xs px-[30px] py-[20px] lg:text-[20px] inline-block rounded-full bg-custom-pink font-semibold border-none shadow-none normal-case">
            <span>Xostingni sotib olish</span>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

const Registration = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full p-6 lg:px-20 mb-6 lg:mb-[120px]">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] leading-[100%] mb-[40px] font-outfit"
      >
        Bepul ro'yxatdan o'tish <br />
        va domenni yangilash
      </Typography>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <OvalCard />
        <BigCard
          title="Domen uchun SSL sertifikati"
          desc="Saytingizni himoya qilish va serp pozitsiyalarini yaxshilash uchun SSL-ni domenga o'rnating. Tegishli SSL - ni tanlang-bepul Let's Encrypt-dan Rapid CA tomonidan moliyaviy kafolatlangan sertifikatlargacha."
          subdesc="Va SSL Timeweb Pro sertifikatiga buyurtma berishda biz barcha o'rnatish va sozlashni o'zimizga olamiz."
          imgSettings={{
            src: "/images/domain_lock.png",
            size: 458,
            position: "-bottom-40 -right-20 scale-[120%]",
          }}
          link={{ href: "#", title: "Sertifikatni tanlang" }}
        />
        <BigCard
          title="Universal boshqarish paneli"
          desc="Sizning barcha xizmatlaringiz bitta boshqaruv panelida. Bizning panelimizning qulay interfeysida domenlar, xosting, saytlar, pochta, SSL va boshqa xizmatlar bilan ishlang."
          imgSettings={{
            src: "/images/domain_folder.png",
            size: 458,
            position: "-bottom-32 -right-12",
          }}
        />
      </div>
    </div>
  );
};
export default Registration;
