import { Button, Typography } from "@material-tailwind/react";

export const subDesc = () => {
  return (
    <Typography
      as="h3"
      className="font-normal lg:font-medium font-outfit text-xl lg:text-2xl text-center"
    >
      Domenni royxatdan otkazish sizning onlayn mavjudligingiz uchun birinchi
      <br className="hidden md:block" />
      qadamdir.
      <span className="hidden md:block">
        Veb-saytingizni joylashtirish uchun domen sotib oling va Internetda
        yangi mijozlarni jalb qilishni boshlang.
      </span>
    </Typography>
  );
};

const SearchBar = ({ subInfo = subDesc() }) => {
  return (
    <div className="max-w-[1440px] mx-auto mb-6 lg:mb-[90px] px-4 lg:px-20 w-full flex justify-center flex-col gap-5 md:gap-[30px]">
      <form
        action=""
        className="w-full flex items-center gap-[10px] pr-[30px] border border-[#C7C6D2] focus:!border-b-gray-900 focus:!border-b-2 rounded-[10px] hover:!border-gray-900"
      >
        <input
          type="text"
          placeholder="Domen yoki so'zni kiritning"
          className="h-16 lg:h-[90px] flex-1 rounded-[10px] pl-[30px] py-[20px] outline-none  placeholder:text-[#ADA6A6] placeholder:text-lg lg:placeholder:text-2xl text-2xl"
        />
        <Button className="text-xs p-0 lg:text-base inline-block w-[70px] lg:w-[160px] h-[30px] lg:h-[50px]  rounded-[10px]  bg-custom-pink font-normal border-none shadow-none capitalize">
          <span>Tekshirish</span>
        </Button>
      </form>
      <>{subInfo}</>
    </div>
  );
};

export default SearchBar;
