import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

function TotalServerControl() {
  return (
    <div className="mt-20 px-4">
      <div className="flex flex-col gap-9 justify-center">
        {/* Заголовки */}
        <div className="flex flex-col gap-3">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black text-center lg:text-left"
          >
            Ajratilgan server ustidan mutlaq nazorat
          </Typography>
          <Typography
            variant="lead"
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-outfit font-medium text-black text-center lg:text-left"
          >
            Serverni nafaqat operatsion tizim darajasida balki, apparat
            darajasida ham boshqaring:
          </Typography>
        </div>

        {/* Карточки */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-6 flex-wrap">
          {/* Карточка 1 */}
          <Card className="w-full sm:w-[412px] min-h-[528px] bg-[#F5F6FA] rounded-xl">
            <CardBody className="max-w-[350px] mx-auto lg:text-left">
              <Typography
                variant="h2"
                color="black"
                className="mb-2 font-outfit font-semibold text-3xl sm:text-4xl md:text-4xl"
              >
                Foydalanuvchi uchun qulay boshqaruv paneli
              </Typography>
              <Typography
                color="black"
                className="font-outfit font-normal text-lg sm:text-xl md:text-2xl"
              >
                - Server konfiguratsiyasini o’zgartirish, tarmoq drayvlarini
                o’rnatish yoki o’tkazish qobiliyatini oshirish uchun so’rovlarni
                yuboring <br />- Yangi serverlar va boshqa bulut xizmatlarini
                bitta boshqaruv panelida buyurtma qiling.
              </Typography>
            </CardBody>
          </Card>

          {/* Карточка 2 */}
          <Card className="w-full sm:w-[412px] min-h-[528px] bg-[#F5F6FA] rounded-xl">
            <CardBody className="max-w-[350px] mx-auto lg:text-left">
              <Typography
                variant="h5"
                color="black"
                className="mb-2 font-outfit font-semibold text-3xl sm:text-4xl md:text-4xl"
              >
                Smartfondagi xuddi shu panel
              </Typography>
              <Typography
                color="black"
                className="font-outfit font-normal text-lg sm:text-xl md:text-2xl"
              >
                Har qanday modul qurilmaga to’liq moslashtirilgan boshqaruv
                paneli. Uni uy ekraniga o’rnating, har qanday mobil brauzerdan
                foydalaning yoki ilovani o’rnating.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Typography className="text-[#EE2F5E] font-outfit font-medium text-xl sm:text-2xl">
                Dasturlar do’koni Google Play Ilovalar galereyasi RuStore’
              </Typography>
            </CardFooter>
          </Card>

          {/* Карточка 3 */}
          <Card className="w-full sm:w-[412px] min-h-[528px] bg-[#F5F6FA] rounded-xl">
            <CardBody className="max-w-[350px] mx-auto lg:text-left">
              <Typography
                variant="h5"
                color="black"
                className="mb-2 font-outfit font-semibold text-3xl sm:text-4xl md:text-4xl"
              >
                KVM konsoliga erkin ruxsat
              </Typography>
              <Typography
                color="black"
                className="font-outfit font-normal text-lg sm:text-xl md:text-2xl"
              >
                Serverlarni masofadan boshqarish uchun, shuningdek operatsion
                tizimni va loyihangizning ishlashi uchun zarur bo’lgan boshqa
                dasturiy ta’minotni o’rnatish uchun.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TotalServerControl;
