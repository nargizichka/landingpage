import { StarIcon } from "../../components/icons";
import { Button, Typography } from "@material-tailwind/react";
import SearchBar from "../../components/SearchBar";
import GlobeIcon from "../../components/icons/GlobeIcon";

const subDesc = () => {
  return (
    <div className="flex justify-between">
      <Button className="font-normal lg:font-medium font-outfit text-base lg:text-lg text-center flex items-center gap-1.5 border border-custom-pink bg-white text-custom-pink px-[15px] py-[10px] rounded-[10px] normal-case">
        <GlobeIcon />
        <span>Domenni Sysdc-ga o'tkazish</span>
      </Button>
      <Typography
        as="h3"
        className="font-normal lg:font-medium font-outfit text-base lg:text-lg text-center flex items-center gap-1.5 border border-[#C7C6D2] px-[15px] py-[10px] rounded-[10px]"
      >
        Mijozlar Bizga Ishonadi <strong>4.8</strong>
        <span className="flex gap-1">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
      </Typography>
    </div>
  );
};

const InnerSearchBar = () => <SearchBar subInfo={subDesc()} />;
export default InnerSearchBar;
