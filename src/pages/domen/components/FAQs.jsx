import { Typography } from "@material-tailwind/react";
import { DownArrowIcon } from "@/pages/components/icons";
import FAQsCard from "@/components/ui/FAQsCard";

const domainFaqData = [
  {
    question: "Domen zonasi nima?",
    answer:
      "Domen zonasi bu domen nomining oxirgi qismidir, masalan .com, .uz yoki .net. Har bir zona ma'lum bir maqsad yoki geografik hududni ifodalaydi.",
  },
  {
    question: "Domen qancha turadi?",
    answer:
      "Domen narxi uning zonasiga qarab farqlanadi. Odatda, narxlar yillik asosda belgilanadi va ba'zi zonalar boshqalarga qaraganda arzon yoki qimmatroq bo'lishi mumkin.",
  },
  {
    question: "O'z domeningizning bepul domendan afzalligi nimada?",
    answer:
      "Shaxsiy domen sizning brendingizni mustahkamlaydi, ishonchlilikni oshiradi va professional ko'rinish beradi. Bepul domenlar esa odatda subdomenlar bo'lib, reklama va cheklovlarga ega bo'lishi mumkin.",
  },
  {
    question: "Domen qancha vaqt sotib olinadi?",
    answer:
      "Domenlar odatda 1 yildan boshlab 10 yilgacha sotib olinadi. Domen muddati tugagach, uni yangilash orqali saqlab qolish mumkin.",
  },
  {
    question: "Domenni ro'yxatdan o'tkazish qancha vaqtni oladi?",
    answer:
      "Domenni ro'yxatdan o'tkazish jarayoni odatda bir necha daqiqa ichida amalga oshiriladi. To'lov va ma'lumotlar to'g'ri bo'lsa, domen tezda aktivlashtiriladi.",
  },
  {
    question: "Men domenni ro'yxatdan o'tkazdim. Keyin nima bo'ladi?",
    answer:
      "Domen ro'yxatdan o'tgach, siz uni hosting xizmatiga ulashingiz, veb-sayt yaratishingiz yoki elektron pochta xizmati bilan sozlashingiz mumkin.",
  },
];

const FAQs = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-20">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Savollar va Javoblar
      </Typography>
      <ul className="flex 2xl:flex-nowrap justify-center flex-col lg:flex-row">
        <li className="flex flex-col">
          {domainFaqData.map((faq, index) => (
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
