import { Typography } from "@material-tailwind/react";
import InducementCard from "@/components/ui/InducementCard";
import { LoyaltyIcon, SpeedIcon, BudgetIcon } from "./icons";

const constants = [
  {
    title: "Ishonchlilik",
    description:
      "Biz 99,9% ish vaqti va ma'lumotlar xavfsizligibilan serverlar va Internetning barqaror ishlashini ta'minlaymiz.",
    icon: LoyaltyIcon,
  },
  {
    title: "Yuqori tezlik",
    description:
      "Bizning serverlarimiz yuqori tezlik va ishonchlilikni kafolatlaydi,mijozlarimizga uzluksiz xizmat ko'rsatadi.",
    icon: SpeedIcon,
  },
  {
    title: "Qulay narx",
    description:
      "Biz sizning ehtiyojlaringiz va budjetingizga mos keladigan raqobatbardosh tariflarni taklif qilamiz.",
    icon: BudgetIcon,
  },
];

function Inducement() {
  return (
    <div className=" max-w-[1440px] mx-auto w-full p-6 lg:px-20 mt-7">
      <Typography
        variant="h1"
        className="font-semibold text-2xl lg:text-[50px] mb-[40px] font-outfit"
      >
        Nega aynan biz?
      </Typography>
      <ul className="flex 2xl:flex-nowrap justify-center gap-5 flex-col lg:flex-row">
        {constants.map(({ title, description, icon: Icon }, index) => (
          <li key={index} className="flex flex-col items-center">
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
