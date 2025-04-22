import { Typography } from "@material-tailwind/react";
import { DownArrowIcon } from "./icons";
import FAQsCard from "@/components/ui/FAQsCard";

const faqData = [
  {
    question: "Web-hosting nima va u qanday ishlaydi?",
    answer:
      "Web-hosting bu sizning veb-saytingiz fayllarini serverda saqlab, internet orqali foydalanuvchilarga ulanishni ta'minlaydigan xizmatdir. Saytga kirgan foydalanuvchi brauzer orqali serverdagi ma'lumotlarga murojaat qiladi.",
  },
  {
    question: "Shared hosting bizning saytimiz uchun to'g'ri tanlovmi?",
    answer:
      "Agar siz kichik yoki o'rta hajmdagi saytga ega bo'lsangiz va yuqori trafik talab qilinmasa, shared hosting arzon va qulay tanlov bo'lishi mumkin. Ammo resurslar boshqa saytlar bilan bo'lishiladi.",
  },
  {
    question: "Mavjud domenimni SYSDC.uz xizmatlariga ulashim mumkinmi?",
    answer:
      "Ha, mavjud domeningizni SYSDC.uz hosting xizmatlariga ulashingiz mumkin. Buning uchun domeningiz DNS sozlamalarini kerakli ma'lumotlarga moslab o'zgartirishingiz kifoya.",
  },
  {
    question: "Xostingim xavfsiz ekanligini qanday bilsam bo'ladi?",
    answer:
      "Xosting xavfsizligini tekshirish uchun SSL sertifikati, fayl va ma'lumotlar zaxiralash, DDoS himoyasi, va xavfsizlik monitoringi kabi xizmatlar mavjudligiga e'tibor bering.",
  },
];

const FAQs = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full p-6 lg:px-20 mt-7">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Ko&apos;p so&apos;raladigan savollar
      </Typography>
      <ul className="flex 2xl:flex-nowrap justify-center flex-col lg:flex-row">
        <li className="flex flex-col">
          {faqData.map((faq, index) => (
            <FAQsCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={DownArrowIcon}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default FAQs;
