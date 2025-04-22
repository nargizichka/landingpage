import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export function DomainCard({ name, priceRubl = "", priceSom = "" }) {
  return (
    <Card
      className="lg:min-w-[305px] h-44 md:h-[200px] flex flex-col gap-1 p-4 lg:p-[30px] rounded-[30px] shadow-none bg-milky-white
    hover:shadow-md hover:translate-x-1 hover:-translate-y-2 transition-all"
    >
      <CardBody className="p-0 flex-1 flex flex-col justify-between">
        <Typography
          variant="h3"
          color="black"
          className="font-outfit text-2xl md:text-[32px] font-semibold"
        >
          .{name}
        </Typography>
        <div>
          {priceRubl && (
            <Typography
              variant="paragraph"
              color="black"
              className="block mb-1 text-xs font-outfit font-normal"
            >
              {priceRubl}₽
            </Typography>
          )}
          {priceSom && (
            <Typography
              variant="paragraph"
              color="black"
              className="text-base lg:text-lg font-bold font-outfit"
            >
              {priceSom} so'm
            </Typography>
          )}
        </div>
      </CardBody>
      <CardFooter className="p-0">
        <Link href={`/domen/${name}`} className="inline-block">
          <Typography
            variant="small"
            color="black"
            className="font-outfit text-sm font-normal"
          >
            Ro'yxatdan o'tish
          </Typography>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default DomainCard;
