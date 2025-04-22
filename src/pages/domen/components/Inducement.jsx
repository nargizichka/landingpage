import { Typography } from "@material-tailwind/react";
import InducementCard from "@/components/ui/InducementCard";
import {
  AllInOneIcon,
  CheapPriceIcon,
  FreeCertificateIcon,
  LongMarketIcon,
  SupportIcon,
  ZonesIcon,
} from "./icons";

const features = [
  {
    id: 1,
    icon: CheapPriceIcon,
    title: "Eng yaxshi narxlari",
    description:
      "Va uzaytirish butunlay bepul-qachon 1, 2 yoki 3 yil davomida darhol xosting uchun",
  },
  {
    id: 2,
    icon: ZonesIcon,
    title: "Ko'p zonalar",
    description: "350 zonadagi domenlarni qo'llab-quvvatlash",
  },
  {
    id: 3,
    icon: FreeCertificateIcon,
    title: "Bepul sertifikat",
    description: "Har bir sotib olingan domen uchun SSL Lets Encrypt",
  },
  {
    id: 4,
    icon: LongMarketIcon,
    title: "Uzoq vaqt bozorda",
    description:
      "500,000 ming domen + har 10-chi Runet-dagi sayt biz bilan joylashtirilgan",
  },
  {
    id: 5,
    icon: AllInOneIcon,
    title: "Hammasi bir joyda",
    description: "Domenlarni boshqarish, xosting, saytlar va pochta orqali",
  },
  {
    id: 6,
    icon: SupportIcon,
    title: "24/7 qo'llab-quvvatlash",
    description: "100 dan ortiq qo'llab-quvvatlash mutaxassislari",
  },
];

function Inducement() {
  return (
    <div className=" max-w-[1440px] mx-auto w-full p-6 lg:px-20 mb-6 lg:mb-[120px]">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] mb-[20px] font-outfit"
      >
        Nega biz bilan yaxshi
      </Typography>
      <Typography
        variant="paragraph"
        className="font-medium lg:text-2xl mb-[40px] font-outfit"
      >
        Biz bilan siz har qanday murakkablikdagi sayt uchun hostingni sotib
        olishingiz mumkin: <br />
        oddiy tashrif qog'ozidan tortib to murakkabgacha, 1C-Bitrix-ga
        asoslangan dasturlar.
      </Typography>
      <ul className="flex flex-wrap justify-center gap-5 flex-col lg:flex-row">
        {features.map(({ id, title, description, icon: Icon }) => (
          <li key={id} className="flex flex-col items-center">
            <InducementCard
              title={title}
              description={description}
              icon={Icon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inducement;
