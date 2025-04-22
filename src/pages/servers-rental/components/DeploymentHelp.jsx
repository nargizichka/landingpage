import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import React from "react";

function DeploymentHelp() {
  return (
    <div className="mt-20 px-4">
      <div className="flex flex-col gap-9 justify-center">
        {/* Заголовка */}
        <div className="flex flex-col gap-3">
          <Typography
            variant="h2"
            className=" leading-10   text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-outfit font-semibold text-black text-center lg:text-left"
          >
            Biz ko’chishga va ishga tushirishga tez va uzilishlarsiz <br />{" "}
            yordam beramiz
          </Typography>
        </div>

        <div className="cards mt-9 w-full flex flex-wrap justify-center md:justify-center lg:justify-between gap-y-10 ">
          {[1, 2, 3].map((number, index) => {
            const cardData = [
              {
                title: "Loyihani topshirish",
                text: "Biz ikkala hostingning ham, boshqa provayderlarning serverlaridan ham pul o’tkazamiz",
              },
              {
                title: "Dasturni o’rnatish",
                text: "Biz kerakli dasturiy ta’minotni sozlaymiz: operatsion tizimlar, muhitlar ilovalar.",
              },
              {
                title: "Dizaynni tadqiq qilish",
                text: "Keling, tekshirib ko’raylik va hamma narsa a’zo ishlayotganiga ishonch hosil qilaylik.",
              },
            ];

            const { title, text } = cardData[index];

            return (
              <Card key={number} className="w-80 sm:w-96 bg-[#F5F6FA]">
                <CardHeader className="mb-4 mx-auto bg-[#EE2F5E] grid h-20 w-20 place-items-center rounded-2xl ">
                  <Typography variant="h3" color="white">
                    {number}
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4 px-5 pb-6">
                  <Typography
                    variant="h5"
                    color="black"
                    className="font-outfit font-semibold text-[24px] text-center"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-outfit font-normal text-lg text-center"
                  >
                    {text}
                  </Typography>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DeploymentHelp;
