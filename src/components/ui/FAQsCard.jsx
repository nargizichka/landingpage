const { useState } = require("react");
import { Typography } from "@material-tailwind/react";

const FAQsCard = ({ question, answer, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={` border-t-[3px] border-t-[#EAEDF9] cursor-pointer transition-all p-3 lg:py-10 ${
        isExpanded ? "bg-gray-50/50 rounded-b-2xl shadow-sm" : "bg-white"
      }`}
      onClick={toggleExpand}
    >
      <div className="flex items-center justify-between transition-all duration-300">
        <Typography
          variant="h1"
          className=" text-xs font-normal lg:text-[28px] font-outfit select-none leading-8"
        >
          {question}
        </Typography>
        <span
          className={`${
            isExpanded ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        >
          <Icon />
        </span>
      </div>

      <p
        className={`overflow-hidden transition-all duration-500 ease-in-out mt-2 text-[10px] lg:text-base font-normal text-black select-none font-outfit ${
          isExpanded ? "max-h-14 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQsCard;
