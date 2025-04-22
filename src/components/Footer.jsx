import { Button, Typography } from "@material-tailwind/react";
import {
  LogoIconBlack,
  InstagramIcon,
  TwitterIcon,
  FaceBookIcon,
  TelegramIcon,
} from "./icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const linksMiddle = [
  { name: "Domen", href: "#" },
  { name: "Hosting", href: "#" },
  { name: "Server", href: "#" },
  { name: "VPS/VDS", href: "#" },
  { name: "SMS", href: "#" },
  { name: "SSL sertifikat", href: "#" },
];

const linksEnd = [
  { name: "Foydalanuvchi shartlari", href: "#" },
  { name: "Kompaniya haqida", href: "#" },
  { name: "Maxfiylik siyosati", href: "#" },
];

const socialIcons = [TelegramIcon, InstagramIcon, TwitterIcon, FaceBookIcon];

function Footer() {
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
    <footer className="max-w-[1440px] mx-auto mt-[120px] lg:mb-[90px] lg:px-20 w-full bg-white">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center px-6 py-8 lg:px-[60px] lg:py-[50px] rounded-[40px] bg-black text-white gap-y-6 gap-x-12 text-center md:justify-between">
        <div className="flex flex-col lg:justify-between items-start gap-y-6">
          <LogoIconBlack isMobile={isMobile} />
          <div className="w-full flex flex-col items-end lg:items-start gap-y-6 lg:gap-y-5">
            <Typography
              as="h1"
              className="w-full lg:w-fit font-semibold text-xl font-outfit leading-[100%] lg:text-[30px] flex flex-col items-start"
            >
              <span>200K mijozlar bizga ishonishgan.</span>
              <span>Siz ham bizga qo&apos;shiling!</span>
            </Typography>
            <Button className="text-xs p-0 font-inter lg:text-base inline-block w-[86px] h-[44px]  lg:w-[125px] lg:h-[59px]  rounded-full bg-white text-black font-semibold border-none shadow-none">
              <span>Kirish</span>
            </Button>
          </div>
        </div>
        <ul className="flex flex-col flex-wrap items-start gap-[14px] lg:gap-y-4 font-outfit">
          {linksMiddle.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-normal text-2xl transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col lg:justify-between gap-y-6">
          <ul className="flex flex-1 flex-col items-start gap-[14px] lg:gap-y-4 gap-x-8 font-outfit">
            {linksEnd.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-normal text-2xl transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-[90px] lg:m-0 flex gap-8 lg:gap-[22px] justify-end">
            {socialIcons.map((Icon, index) => (
              <Typography
                key={index}
                as="a"
                href="#"
                className="font-semibold text-[30px] flex flex-col items-start"
              >
                <Icon key={index} isMobile={isMobile} />
              </Typography>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
