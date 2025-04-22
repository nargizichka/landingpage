import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const AddsCard = () => {
  return (
    <Card
      className="relative lg:min-w-[630px] h-44 md:h-[200px] flex-col gap-1 p-4 lg:p-[30px] rounded-[30px] overflow-hidden shadow-none
    hover:shadow-md hover:translate-x-1 hover:-translate-y-2 transition-all"
    >
      <CardHeader
        floated={false}
        shadow={false}
        children={<></>}
        color="transparent"
        className="absolute top-20 inset-0 m-0 h-full w-full rounded-none bg-[url('/images/addsBackground.png')] bg-cover bg-center"
      ></CardHeader>
      <CardBody className="relative p-0 flex-1 flex flex-col justify-between">
        <Typography
          variant="h3"
          color="white"
          className="font-outfit text-2xl lg:text-[32px] font-semibold"
        >
          Domen sotib olganda <br />
          <span className="text-custom-pink">1 oylik</span> xosting <br /> bepul
        </Typography>
      </CardBody>
    </Card>
  );
};

export default AddsCard;
