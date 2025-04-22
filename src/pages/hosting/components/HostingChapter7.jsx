import { Typography } from "@material-tailwind/react";
import React from "react";
import Image from 'next/image';

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
    >
      <path
        transform="translate(3 3) scale(0.7)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function HostingChapter7() {
  return (
    <div className="pt-4 mt-36 ">
      <div className="qo'llab-quvvatlash flex flex-col gap-9">
        <Typography
          variant="h2"
          className="text-5xl font-outfit font-semibold text-black"
        >
          Bizning qo&apos;llab-quvvatlashimiz <br /> har doim siz bilan 24/7
        </Typography>

        <div className="flex items-center justify-center flex-wrap gap-4 ">
          <div className=" flex flex-col items-start gap-6 p-7 max-w-[630px] min-h-[246px] bg-[#F5F6FA] rounded-3xl">
            <Image
              src="/photos/headphones.svg"
              alt="headphones"
              className="w-[90px]  h-[90px]  "
            />
            <div className=" ">
              <Typography
                variant="lead"
                className="text-lg font-outfit font-medium text-black"
              >
                Bizning qo&apos;llab-quvvatlash jamoamiz har doim qiyin vazifalarni
                hal qilishda yordam berishga tayyor va sizni hech qachon
                muammoga duchor qilmaydi
              </Typography>
            </div>
          </div>

          <div className=" flex flex-col items-start gap-6 p-7 max-w-[630px] min-h-[246px] bg-[#F5F6FA] rounded-3xl">
            <Image
              src="/photos/menu.svg"
              alt="menu"
              className="w-[90px]  h-[90px] "
            />
            <div className=" ">
              <Typography
                variant="lead"
                className="text-lg font-outfit font-medium text-black"
              >
                Biz hech kimni muammo bilan yolg&apos;iz qoldirmaymiz: domenlar,
                xostinglar, VPS, serverlar va xizmatning ishlashi bilan bog&apos;liq
                yordamni taqdim etamiz
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="qulay-interfeys flex flex-col gap-9 mt-20">
        <Typography
          variant="h2"
          className="text-5xl font-outfit font-semibold text-black"
        >
          Veb-saytingizni boshqarish uchun <br /> qulay interfeys
        </Typography>

        <div className="flex flex-col p-7 max-w-[1280px] max-h-[1295px] bg-[#F5F6FA] rounded-3xl">
          <div className="flex flex-col gap-7 mx-auto">
            <Typography
              variant="lead"
              className=" font-outfit font-medium text-black sm:text-xl md:text-2xl lg:text-2xl"
            >
              Biz intuitiv boshqaruv panelini taqdim etamiz, buning yordamida
              siz veb-saytlar va onlayn loyihangizning boshqa <br /> tarkibiy
              qismlari uchun turli xil vazifalarni osongina bajarishingiz
              mumkin.
            </Typography>

            <Typography
              variant="lead"
              className=" font-outfit font-medium text-black sm:text-xl md:text-2xl lg:text-2xl"
            >
              Boshqa narsalar qatorida bizning boshqaruv panelimiz quyidagi
              funktsiyalarni o&apos;z ichiga oladi:
            </Typography>

            <Typography
              variant="lead"
              className=" font-outfit font-medium text-black sm:text-xl md:text-2xl lg:text-2xl"
            >
              • fayllarni boshqarish; <br />
              • domenlarni boshqarish; <br />
              • ma&apos;lumotlar bazasini boshqarish; <br />
              • elektron pochta; <br />
              • xavfsizlik sozlamalari; <br />
              • zaxira nusxasi; <br />
              • analitik ma&apos;lumotlar; <br />
              • va boshqalar. <br />
            </Typography>

            <Typography
              variant="lead"
              className=" font-outfit font-medium text-black sm:text-xl md:text-2xl lg:text-2xl"
            >
              Shu bilan birga, siz ixtisoslashgan texnik bilimlarga ega
              bo&apos;lishingiz shart emas va ko&apos;plab vazifalarni bir marta bosish
              bilan avtomatik ravishda bajarish mumkin.
            </Typography>

            <video
              className="max-h-[674px] max-w-full rounded-none mt-8"
              controls
            >
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="barcha-tariflar flex flex-col gap-9 mt-24 px-4">
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-outfit font-semibold text-black "
        >
          Barcha tariflar quyidagilarni <br /> o&apos;z ichiga oladi
        </Typography>

        <div className="p-6 sm:p-8 bg-[#F5F6FA] rounded-3xl w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <ul className="flex flex-col items-start gap-4">
                {[
                  "Cheksiz va bepul trafik",
                  "Yuqori chegaralarga ega kuchli serverlar",
                  "Kundalik zaxira nusxasi",
                  "MySQL 5.6 / 5.7, PHP 5.3 / 5.4 / 5.6 / 7.1 / 7.2 / 7.3 / 7.4, 8.0, APC (PHP 5.3, 5.4), Zend OPcache (PHP 5.6, 7.1, 7.2, 7.3, 7.4, 8.0,), memcached, phpMyAdmin Perl 5, Parser, Python 2.7 / 3.4 / 3.6, C++",
                  "SSH, sFTP / FTP, SCP kirish (xavfsiz nusxalash)",
                  "Cheksiz domenlarni qo'llab-quvvatlash",
                  "Domenlar/subdomainlar, saytlar, DNS, FTP hisoblarini boshqarish",
                  "Kirish va xato jurnallari (server jurnallari), server statistikasi",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="rounded-full bg-[#EE2F5E] p-1.5">
                      <CheckIcon />
                    </span>
                    <Typography className="text-base sm:text-lg md:text-2xl font-outfit text-black font-medium">
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <ul className="flex flex-col items-start gap-4">
                {[
                  "Kataloglarni parollash",
                  "Boshqaruv .htaccess, maxsus xato sahifalari",
                  "Rejalashtirilgan vazifalarni boshqarish – Cron",
                  "Cheksiz pochta qutilari",
                  "Axborot byulletenlarini/yo'naltirishlarni, avtomatik javob beruvchini sozlash",
                  "POP3, IMAP, SMTP pochta bilan ishlash uchun shifrlangan xizmatlar",
                  "Pochta bilan ishlash uchun xavfsiz veb-interfeys",
                  "Hisobdagi asosiy voqealar haqida SMS-xabarlarni sozlash",
                  "Boshqarish paneliga kirishni himoya qilish (ikki faktorli avtorizatsiya)",
                ].map((text, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="rounded-full bg-[#EE2F5E] p-1.5">
                      <CheckIcon />
                    </span>
                    <Typography className="text-base sm:text-lg md:text-2xl font-outfit text-black font-medium">
                      {text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingChapter7;
