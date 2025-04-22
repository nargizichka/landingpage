import { Typography } from "@material-tailwind/react";

const DomainHeader = ({ title = " Domenni ro'yxatdan o'tkazish" }) => {
  return (
    <div className="max-w-[1440px] mx-auto mb-6 lg:mb-12 px-4 lg:px-20 w-full flex flex-col items-center gap-[10px]">
      <Typography
        as="h1"
        className="font-extrabold lg:font-semibold font-outfit text-[30px] lg:text-[70px] text-center"
      >
        {title}
      </Typography>
      <Typography
        as="h3"
        className="font-light lg:font-normal font-outfit text-xl lg:text-2xl text-center"
      >
        Veb-saytingiz uchun 300 dan ortiq nom variantlari
      </Typography>
    </div>
  );
};
export default DomainHeader;
