import { Typography } from "@material-tailwind/react";
const RegistrationGuide = () => {
  return (
    <div className=" max-w-[1440px] mx-auto w-full p-6 lg:px-20 mt-7">
      <div className="p-[30px] bg-milky-white flex flex-col gap-[40px] rounded-[30px]">
        <Typography
          variant="h1"
          className="font-semibold text-2xl lg:text-[50px] font-outfit"
        >
          COM domenini ro&apos;yxatdan o&apos;tkazish
        </Typography>
        <Typography
          variant="paragraph"
          className="font-normal text-base lg:text-lg font-outfit"
        >
          Siz COM domenini turli maqsadlarda sotib olishingiz mumkin: yirik
          korporatsiya saytini, kichik startapni yoki hatto shaxsiy blogni
          joylashtirish uchun. Quyida biz ushbu zona, uning xususiyatlari va
          bunday domenni kim ro&apos;yxatdan o&apos;tkazishi kerakligi haqida batafsil
          ma&apos;umot beramiz.
        </Typography>
        <Typography
          variant="h1"
          className="font-semibold text-xl lg:text-[32px] font-outfit"
        >
          .COM domen zonasi haqida ma&apos;lumot
        </Typography>
        <ul className="flex flex-col gap-[30px]">
          {[
            "COM-bu internetning dastlabki kunlarida domen nomlari tizimi bilan bir vaqtda paydo bo'lgan eng qadimgi domenlardan biri. Domenning o'zi 1985 yil yanvar oyida yaratilgan va o'sha yilning mart oyida ushbu zonadagi birinchi domen nomi ro'yxatdan o'tgan.",
            " Dastlab ushbu hudud tijorat tashkilotlari uchun mo'ljallangan bo'lishi kerak edi ('com' tijorat uchun qisqa, 'tijorat'), ammo 90-yillarning o'rtalarida ro'yxatdan o'tish cheklovlari olib tashlandi va hozirda har qanday maqsadda sotib olinadigan umumiy xalqaro domen.",
            "Uning reestri Amerikaning Verisign kompaniyasi bo'lib, mingga yaqin akkreditatsiyadan o'tgan ro'yxatga oluvchilar COM nomlarini ro'yxatdan o'tkazishlari mumkin.",
            "Endi bu dunyodagi eng mashhur domen zonasi-unda 250 milliondan ortiq nomlar yaratilgan. Internetdagi barcha mavjud saytlarning deyarli yarmi (47.8%) COM zonasida domendan foydalanadi.",
          ].map((item, index) => (
            <li key={index}>
              <Typography
                variant="paragraph"
                className="font-normal text-base lg:text-lg font-outfit"
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RegistrationGuide;
