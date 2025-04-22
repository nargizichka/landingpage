import AddsCard from "./AddsCard";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import DomainCard from "./DomainCard";
import { useState } from "react";
import { domains } from "../constants";
import { DownArrowIcon } from "@/components/icons";
import Image from 'next/image';

const Offers = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const filterTitles = [
    { id: 1, name: "Barcha zonalar", isActive: false },
    { id: 2, name: "Ommabop", isActive: true },
    { id: 3, name: "Mintaqaviy", isActive: false },
    { id: 4, name: "Talim, Biznes", isActive: false },
    { id: 5, name: "Turmush tarzi", isActive: false },
    { id: 6, name: "IT, OAV", isActive: false },
  ];

  const [filterBy, setFilterBy] = useState(filterTitles);

  const handleFilterClick = (id) => {
    const updatedFilterBy = filterBy.map((link) => ({
      ...link,
      isActive: link.id == id,
    }));
    setFilterBy(updatedFilterBy);
  };

  return (
    <div className="max-w-[1440px] mx-auto my-6 lg:mb-[120px] lg:mt-[42px] px-4 lg:px-20 w-full">
      <div className="w-full mb-[42px] flex gap-6">
        <ul className="flex gap-6 flex-wrap overflow-hidden h-fit max-h-12">
          {filterBy.map((link) => (
            <Button
              onClick={() => handleFilterClick(link.id)}
              key={link.id}
              className={` flex-1 p-[10px] font-medium text-outfit text-lg transition-all rounded-[10px] capitalize shadow-none min-w-fit ${
                link.isActive
                  ? "bg-custom-pink text-white"
                  : "hover:text-blue-500 focus:text-blue-500 bg-milky-white"
              }`}
            >
              {link.name}
            </Button>
          ))}
        </ul>
        <Menu open={openMenu} handler={setOpenMenu}>
          <MenuHandler>
            <Button className="flex-1 min-w-28 flex items-center justify-center bg-milky-white p-[10px] font-medium text-outfit text-lg transition-all rounded-[10px] capitalize shadow-none">
              <span>Ko&apos;proq</span>
              <div className={`${openMenu ? "rotate-180" : ""} transition-all`}>
                <DownArrowIcon />
              </div>
            </Button>
          </MenuHandler>
          <MenuList className="">
            {filterTitles.map(({ name }) => (
              <MenuItem key={name} className="p-[10px] text-center">
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <div className="w-full flex justify-evenly items-center flex-wrap gap-5">
        {domains.map((domain) => (
          <div className="flex justify-between gap-5" key={domain.id}>
            <DomainCard
              name={domain.name}
              priceRubl={domain.price_rub}
              priceSom={domain.price_som}
            />
            {domain.id == 10 && <AddsCard />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;
