import { Typography } from "@material-tailwind/react";
const RegistrationTerms = () => {
  return (
    <div className=" max-w-[1440px] mx-auto w-full p-6 lg:px-20 mt-7">
      <div className="p-[30px] bg-milky-white flex flex-col gap-[40px] rounded-[30px]">
        <Typography
          variant="h1"
          className="font-semibold text-xl lg:text-[32px] font-outfit"
        >
          Domenni ro&apos;yxatdan o&apos;tkazish shartlari
        </Typography>
        <ul className="flex flex-col gap-[20px]">
          <li>
            <Typography
              variant="paragraph"
              className="font-normal text-base lg:text-lg font-outfit"
            >
              Com-ni ro&apos;yxatdan o&apos;tkazish uchun biron bir aniq shartlarni
              bajarish shart emas. Umuman olganda, bu ko&apos;pchilik xalqaro
              domenlar bilan bir xil:
            </Typography>
          </li>
          <li className="px-10">
            <ul className="list-disc">
              <li>
                <Typography
                  variant="paragraph"
                  className="font-normal text-base lg:text-lg font-outfit"
                >
                  siz domenni 1 yildan 10 yilgacha sotib olishingiz mumkin.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="paragraph"
                  className="font-normal text-base lg:text-lg font-outfit"
                >
                  administrator har qanday jismoniy yoki yuridik shaxs bo&apos;lishi
                  mumkin;
                </Typography>
              </li>
              <li>
                <Typography
                  variant="paragraph"
                  className="font-normal text-base lg:text-lg font-outfit"
                >
                  ro&apos;yxatdan o&apos;tish uchun sizga hujjatlar kerak emas,
                  administrator nomi va aloqa ma&apos;lumotlari etarli. Egasining
                  o&apos;zgarishi ham juda oddiy — logger panelidagi ma&apos;lumotlarni
                  yangilash orqali.
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography
              variant="paragraph"
              className="font-normal text-base lg:text-lg font-outfit"
            >
              Ro&apos;yxatdan o&apos;tish paytida to&apos;g&apos;ri elektron pochtani
              ko&apos;rsatganingizga ishonch hosil qiling-ko&apos;rsatilgan qutiga
              kirmasdan siz domenni boshqarolmaysiz: NS serverlarini ko&apos;rsating,
              egasini yoki registratorini o&apos;zgartiring.
            </Typography>
          </li>
          <li>
            <Typography
              variant="paragraph"
              className="font-normal text-base lg:text-lg font-outfit"
            >
              Xalqaro domenlarning narxi to&apos;g&apos;ridan-to&apos;g&apos;ri valyuta kurslariga
              bog&apos;liq, ammo biz comni ro&apos;yxatdan o&apos;tkazish va yangilash uchun
              qulay narxlarni taklif qilamiz. Siz domenni tanlashingiz va joriy
              narxlarni Timeweb veb-saytidagi "domenlar" bo'limida ko'rishingiz
              mumkin.
            </Typography>
          </li>
        </ul>
        <Typography
          variant="h1"
          className="font-semibold text-xl lg:text-[32px] font-outfit"
        >
          .COM zonasidagi domen kimga mos keladi?
        </Typography>
        <ul className="flex flex-col gap-[20px]">
          {[
            "COM butun dunyo bo'ylab keng tarqalgan ko'p qirrali zonadir. Ushbu zonadagi domen kompaniya saytiga mustahkamlik va og'irlik beradi, biznesning jiddiyligini ta'kidlaydi. Shuning uchun, birinchi navbatda, com tijorat tashkilotlari va korporatsiyalarga sotib olishga arziydi.",
            " Ayniqsa, xalqaro bozorda ishlaydigan va dunyoning turli burchaklaridagi sheriklar bilan hamkorlik qiladigan kompaniyalar ushbu domenni diqqat bilan ko'rib chiqishga arziydi. COM barcha qit'alarda tan olingan va shuning uchun taniqli brendlar va bozorning eng yirik o'yinchilari ko'pincha ushbu zonada sayt manzilini ro'yxatdan o'tkazishga qaror qilishadi.",
            "Biroq, yuqorida aytib o'tganimizdek, comni turli xil manbalar uchun sotib olish mumkin. Rus tilida so'zlashuvchi foydalanuvchilar ko'pincha sayt nomlarida COM ovozini o'ynashadi, 'salto', 'shabada bilan', 'Shift ostida 'va hokazo so'zlar va kombinatsiyalardan yorqin va unutilmas manzillarni olishadi. Va IDN domenlarini ro'yxatdan o'tkazish imkoniyati, ya'ni milliy alifbolardan foydalanish (masalan — снежный.сом), tasavvur qilish uchun deyarli cheksiz joy qoldiradi.",
            "Bundan tashqari,. COM zonasi ko'p yillar davomida turli sohalardagi resurslar uchun ishlatilganligi sababli .COM manzili hatto shaxsiy blogda yoki freelancer veb-saytida ham organik ko'rinadi. Siz haqiqatan ham ushbu domendan foydalanish bilan cheklanmaysiz.",
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
export default RegistrationTerms;
