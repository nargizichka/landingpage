import { Typography } from "@material-tailwind/react";
import React from "react";
import Image from 'next/image';

function HostingChapter6() {
  return (
    <div className="pt-4 mt-24">
      <div className="kuchli-xosting flex flex-col gap-9">
        <Typography
          variant="h2"
          className="text-5xl font-outfit font-semibold text-black"
        >
          Har qanday vazifa uchun kuchli xosting
        </Typography>

        <div className="flex items-center justify-center flex-wrap gap-4 ">
          <div className=" flex flex-col items-start gap-6 p-7 max-w-[630px] min-h-[276px] bg-[#F5F6FA] rounded-3xl">
            <Image
              src="/photos/dataplace.svg"
              alt="dataplace"
              className="w-[90px]  h-[90px]  "
            />
            <div className=" flex flex-col items-start justify-between gap-3 ">
              <Typography
                variant="h3"
                className="text-3xl font-outfit font-semibold text-black"
              >
                Ma&apos;lumotlar markazida joylashtirish
              </Typography>
              <Typography
                variant="lead"
                className="text-lg font-outfit font-medium text-black"
              >
                Serverlarning 99,98% uzluksiz ishlashi va yuqori darajadagi
                himoya veb-resurslaringizni xavfsiz qiladi
              </Typography>
            </div>
          </div>

          <div className=" flex flex-col items-start gap-6 p-7 max-w-[630px] min-h-[276px] bg-[#F5F6FA] rounded-3xl">
            <Image
              src="/photos/cpu.svg"
              alt="cpu"
              className="w-[90px]  h-[90px] "
            />
            <div className=" flex flex-col items-start justify-between gap-3 ">
              <Typography
                variant="h3"
                className="text-3xl font-outfit font-semibold text-black"
              >
                Kuchli protsessorlar
              </Typography>
              <Typography
                variant="lead"
                className="text-lg font-outfit font-medium text-black"
              >
                Biz serverlarni barcha veb-saytlarni boshqara oladigan yuqori
                sifatli protsessorlar bilan ta&apos;minlaymiz
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className=" jismoniy-shaxslar  flex flex-col gap-9 mt-14 ">
        <Typography
          variant="h2"
          className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-5xl lg:text-left font-outfit font-semibold text-black"
        >
          Biz jismoniy shaxslar uchun zarur bo&apos;lgan <br /> hamma narsani taqdim
          etamiz
        </Typography>

        <div className="flex items-start justify-center flex-wrap gap-4 ">
          <div
            className="relative flex flex-col items-start gap-6 p-7 w-[630px] min-h-[640px] bg-[#F5F6FA] rounded-3xl bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/photos/porfolio.svg')",
              backgroundPosition: "left bottom",
              backgroundSize: "401px 375px",
            }}
          >
            <div className="flex flex-col items-start justify-between gap-3">
              <Typography
                variant="h3"
                className="text-3xl font-outfit font-semibold text-black"
              >
                KImlar bilan <br />
                ishlaymiz
              </Typography>
              <Typography
                variant="lead"
                className="text-lg font-outfit font-medium text-black"
              >
                - Yuridik shaxslar <br />
                - yakka tartibdagi tadbirkorlar <br />
                - byudjet tashkilotlari <br />
              </Typography>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <Image
                src="/certificate.svg"
                alt="certificate"
                className="w-12 h-12"
              />
              <Typography
                variant="lead"
                className="font-outfit font-medium text-lg text-black max-w-[490px] min-h-[46px]"
              >
                Yuridik shaxslarni ro&apos;yxatdan o&apos;tkazish veb-saytdagi <br />
                shakllarni to&apos;ldirish orqali amalga oshiriladi
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-[630px] min-h-[276px] justify-center mx-auto">
            <div className="flex flex-col items-start gap-4 p-7 max-w-[305px] min-h-[200px] bg-[#F5F6FA] rounded-3xl">
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="lead"
                  className="text-lg font-outfit font-medium text-black"
                >
                  Naqd pulsiz to&apos;lovlarni amalga oshirish
                </Typography>
              </div>
              <Image src="/photos/card.svg" alt="card" className="w-16 h-16" />
            </div>

            <div className="flex flex-col items-start gap-4 p-7 max-w-[305px] min-h-[200px] bg-[#F5F6FA] rounded-3xl">
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="lead"
                  className="text-lg font-outfit font-medium text-black"
                >
                  Biz davlat xaridlari orqali hamkorlik qilamiz
                </Typography>
              </div>
              <Image src="/user.svg" alt="user" className="w-16 h-16" />
            </div>

            <div className="flex flex-col items-start gap-4 p-7 max-w-[305px] min-h-[200px] bg-[#F5F6FA] rounded-3xl">
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="lead"
                  className="text-lg font-outfit font-medium text-black"
                >
                  Biz elektron hujjat aylanishidan foydalanamiz
                </Typography>
              </div>
              <Image
                src="/photos/e-file.svg"
                alt="e-file"
                className="w-16 h-16"
              />
            </div>

            <div className="flex flex-col items-start gap-4 p-7 max-w-[305px] min-h-[200px] bg-[#F5F6FA] rounded-3xl">
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="lead"
                  className="text-lg font-outfit font-medium text-black"
                >
                  Biz barcha hisobotlarni pochta yoki Edo orqali taqdim etamiz
                </Typography>
              </div>
              <Image src="/photos/email.svg" alt="email" className="w-16 h-16" />
            </div>

            <div className="flex flex-col items-start gap-4 p-7 sm:col-span-2 w-full sm:max-w-[630px] min-h-[200px] bg-[#F5F6FA] rounded-3xl">
              <div className="flex flex-col items-start justify-between gap-3">
                <Typography
                  variant="lead"
                  className="text-lg font-outfit font-medium text-black"
                >
                  Biz taklif shartnomasi yoki individual shartnoma <br />{" "}
                  tuzamiz
                </Typography>
              </div>
              <Image
                src="/photos/uniqueShartnoma.svg"
                alt="uniqueShartnoma"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="malumotlar-markazlari mt-20 flex flex-col gap-9">
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-outfit font-semibold text-black text-center sm:text-left"
        >
          Ma&apos;lumotlar markazlari
        </Typography>

        <div className="flex items-center justify-center flex-wrap gap-4">
          {/* Карточка 1 */}
          <div
            className="flex flex-col items-start gap-6 p-6 sm:p-8 w-full sm:max-w-[413px] min-h-[300px] sm:min-h-[364px] bg-[#F5F6FA] rounded-3xl bg-no-repeat bg-contain bg-right-bottom"
            style={{
              backgroundImage: "url('/photos/location.svg')",
              backgroundSize: "247px 247px",
            }}
          >
            <div className="flex flex-col items-start justify-between gap-3">
              <Typography
                variant="lead"
                className="text-base sm:text-lg font-outfit font-medium text-black"
              >
                Sysdc serverlari va uskunalari turli davlatlarda joylashgan
              </Typography>
            </div>
          </div>

          {/* Карточка 2 */}
          <div
            className="flex flex-col items-start gap-6 p-6 sm:p-8 w-full sm:max-w-[413px] min-h-[300px] sm:min-h-[364px] bg-[#F5F6FA] rounded-3xl bg-no-repeat bg-contain bg-right-bottom"
            style={{
              backgroundImage: "url('/photos/lock.svg')",
              backgroundSize: "247px 247px",
            }}
          >
            <div className="flex flex-col items-start justify-between gap-3">
              <Typography
                variant="lead"
                className="text-base sm:text-lg font-outfit font-medium text-black"
              >
                Loyihalaringizni har doim tegishli sifatda saqlash uchun biz
                uzluksiz quvvat manbalaridan foydalanamiz va saytlarning o&apos;zi
                qurolli qo&apos;riqchilar tomonidan himoyalangan
              </Typography>
            </div>
          </div>

          {/* Карточка 3 */}
          <div
            className="flex flex-col items-start gap-6 p-6 sm:p-8 w-full sm:max-w-[413px] min-h-[300px] sm:min-h-[364px] bg-[#F5F6FA] rounded-3xl bg-no-repeat bg-contain bg-right-bottom"
            style={{
              backgroundImage: "url('/photos/camera.svg')",
              backgroundSize: "247px 247px",
            }}
          >
            <div className="flex flex-col items-start justify-between gap-3">
              <Typography
                variant="lead"
                className="text-base sm:text-lg font-outfit font-medium text-black"
              >
                30 kundan ortiq ma&apos;lumotlarni saqlash bilan kirishni boshqarish
                va videokuzatuv mavjud
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingChapter6;
