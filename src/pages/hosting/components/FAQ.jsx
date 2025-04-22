import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";

function Icon({ id, open }) {
  return (
    <span
      className={`flex items-center justify-center h-10 w-10 border border-gray-300 rounded-full transition-transform ${
        id === open ? "rotate-180" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </span>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="pt-4 mt-24 mb-24">
      <div className="savol-javob flex flex-col gap-6">
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-outfit font-semibold text-[#020F15] "
        >
          Savollar va javoblar
        </Typography>

        <div className="">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Xosting provayderi nima?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Xosting nima uchun kerak?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Sysdc-dan umumiy hosting qanday afzalliklarga ega?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Xostingning qanday turlari mavjud?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Pulli va bepul xosting o&apos;rtasidagi farq nima?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              To&apos;g&apos;ri xosting tarifini qanday tanlash mumkin?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Xosting qancha turadi?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Har bir umumiy xosting tarifiga qanday bepul xizmatlar kiritilgan?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Xostingga qanday buyurtma berish va to&apos;lash kerak?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(10)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Hostingni qaysi shaharlarda ijaraga olishingiz mumkin?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(11)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Qanday oldindan o&apos;rnatilgan CMS-larni ijaraga olish mumkin?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(12)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Xostingni ijaraga olish uchun qanday boshqaruv panellari mavjud?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(13)}
              className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7"
            >
              Sysdc-da yana qanday xosting turlarini sotib olishingiz mumkin?
            </AccordionHeader>
            <AccordionBody className="font-outfit text-xl sm:text-2xl md:text-[24px] lg:text-[28px] font-medium text-[#020F15] py-7">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
