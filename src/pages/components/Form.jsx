import { Button, Typography } from "@material-tailwind/react";

const Form = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto p-6 lg:px-20 mt-7 flex flex-col lg:flex-row  gap-5">
      <div className="flex-1">
        <Typography
          variant="h1"
          className="font-semibold text-2xl lg:text-[50px] mb-5 font-outfit leading-[100%] select-none"
        >
          Qo'shimcha savollaringiz bormi?
        </Typography>
        <Typography
          variant="paragraph"
          className="font-extralight text-sm lg:text-xl mb-[40px] font-outfit select-none"
        >
          Savollaringizni qoldiring o'zimiz aloqaga chiqamiz.
        </Typography>
      </div>
      <div className="flex-1">
        <div className="w-full relative flex flex-col rounded-xl bg-transparent">
          <form className="w-full flex flex-col gap-10 font-outfit">
            <div className="flex flex-col gap-5">
              <div className="w-full min-w-[200px] flex gap-5">
                <input
                  type="text"
                  className="bg-milky-white placeholder:text-[#B4B8C7] placeholder:text-lg  flex-1 min-w-[100px] h-[44px] lg:h-[70px] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-[20px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Ism"
                />
                <input
                  type="text"
                  className="bg-milky-white placeholder:text-[#B4B8C7] placeholder:text-lg flex-1 min-w-[100px] h-[44px] lg:h-[70px] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-[20px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Familya"
                />
              </div>
              <div className="w-full max-w-full min-w-[200px]">
                <input
                  type="email"
                  className="bg-milky-white placeholder:text-[#B4B8C7] placeholder:text-lg   w-full h-[44px] lg:h-[70px] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-[20px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Telefon raqam"
                />
              </div>
              <div className="w-full max-w-full min-w-[200px]">
                <input
                  type="password"
                  className="bg-milky-white placeholder:text-[#B4B8C7] placeholder:text-lg   w-full h-[44px] lg:h-[70px] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-[20px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Savolingizni yozib qoldiring"
                />
              </div>
            </div>
            <Button className="text-lg p-0 inline-block w-[150px] lg:w-[147px] h-[44px] lg:h-[64px]  rounded-full bg-black text-white font-semibold border-none shadow-none self-end font-inter">
              <span>Jo'natish</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
