import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function HostingPlanCards() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="pt-4">
      <div className="w-full overflow-x-auto mt-10">
        <div
          className="flex items-start gap-6 flex-nowrap px-4 sm:justify-center sm:scroll-smooth snap-x snap-mandatory"
          style={{ minWidth: "fit-content" }}
        >
          {[...Array(4)].map((_, index) => {
            const cardData = [
              {
                title: "Blog",
                desc: "Vizitka veb-sayti uchun ideal yechim",
                price: "60.000",
                oldPrice: "80.000",
                features: [
                  "2 ta sayt",
                  "15 GB NVNe disk",
                  "Limitsiz DB va pochta qutisi",
                  "Bepul DB va pochta qutisi",
                ],
              },
              {
                title: "Start",
                desc: "Vizitka veb-sayti uchun ideal yechim",
                price: "90.000",
                oldPrice: "110.000",
                features: [
                  "15 ta sayt",
                  "40 GB NVNe disk",
                  "Limitsiz DB va pochta qutisi",
                  "Bepul DB va pochta qutisi",
                ],
              },
              {
                title: "Optimo+",
                desc: "Sizning kompaniyangiz veb-sayti uchun eng yaxshi variant",
                price: "160.000",
                oldPrice: "200.000",
                features: [
                  "35 ta sayt",
                  "50 GB NVNe disk",
                  "Limitsiz DB va pochta qutisi",
                  "Bepul DB va pochta qutisi",
                ],
              },
              {
                title: "Premium",
                desc: "Katta tijorat loyihalari uchun ilg'or yechim",
                price: "220.000",
                oldPrice: "270.000",
                features: [
                  "60 ta sayt",
                  "60 GB NVNe disk",
                  "Limitsiz DB va pochta qutisi",
                  "Bepul DB va pochta qutisi",
                ],
              },
            ][index];

            return (
              <Card
                key={index}
                className={`max-w-[305px] h-[503px] border-2 snap-start ${
                  selectedIndex === index
                    ? "border-[#EE2F5E]"
                    : "border-gray-500"
                } rounded-3xl flex flex-col items-start justify-between`}
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="w-full m-0 px-5 py-7 text-center bg-[#F5F6FA] rounded-tl-3xl rounded-tr-3xl h-[239px] flex flex-col items-start justify-between gap-3"
                >
                  <Typography
                    variant="h3"
                    className="font-outfit text-3xl font-semibold text-black"
                  >
                    {cardData.title}
                  </Typography>
                  <Typography
                    variant="lead"
                    className="font-outfit text-lg text-black font-medium text-start"
                  >
                    {cardData.desc}
                  </Typography>
                  <Typography
                    variant="h4"
                    className="flex justify-start items-end gap-1 text-3xl font-semibold font-outfit text-[#EE2F5E]"
                  >
                    {cardData.price}
                    <span className="text-lg font-medium text-black">
                      So&apos;m/oy
                    </span>
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-outfit text-[#C7C6D2] font-normal text-start line-through"
                  >
                    {cardData.oldPrice} so‘m/oy
                  </Typography>
                </CardHeader>

                <CardBody className="p-0">
                  <ul className="flex flex-col items-start gap-4 px-5">
                    {cardData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-black p-1">
                          <CheckIcon />
                        </span>
                        <Typography className="font-normal font-outfit text-black">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardBody>

                <CardFooter className="p-0 self-center">
                  <Button
                    onClick={() => setSelectedIndex(index)}
                    color="black"
                    className="hover:bg-[#EE2F5E] focus:bg-[#EE2F5E] active:bg-[#EE2F5E] rounded-full w-[255px] h-12 font-outfit font-medium text-lg normal-case tracking-wider mb-5 flex items-center justify-center mx-2"
                    ripple={false}
                    fullWidth={true}
                  >
                    Tanlash
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HostingPlanCards;
