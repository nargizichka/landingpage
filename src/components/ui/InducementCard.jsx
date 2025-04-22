import { Card, CardBody, Typography } from "@material-tailwind/react";

const InducementCard = ({title, description, icon: Icon}) => {
  return (
    <Card className="w-full lg:max-w-[413px] h-[269px] shadow-none bg-milky-white rounded-[50px]">
      <CardBody className="text-black p-6 lg:p-[30px]">
        <Icon />
        <Typography
          variant="h1"
          className="mb-2.5 mt-[25px] font-semibold text-xl lg:text-[32px] font-outfit"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-lg font-outfit line-clamp-3"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default InducementCard;
