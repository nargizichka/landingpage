import {
  Navbar,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { DownArrowIcon, BurgerMenu, SearchIcon } from "./icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [lang, setLang] = useState("O'zb");

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const NavList = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current.focus();
    };

    return (
      <div className="p-[7px] hidden lg:flex bg-black rounded-full">
        <div
          className="flex items-center pl-5 bg-white rounded-full relative cursor-text"
          onClick={handleFocus}
        >
          <SearchIcon className="scale-150" />
          <input
            ref={inputRef}
            placeholder="Qidirish"
            className="w-[125px] h-[46px] transition-all focus:w-[385px] outline-none pl-[15px] pr-5 py-[11px] rounded-full placeholder:text-black"
            type="text"
          />
        </div>
        <Link href="/" className="text-white px-[15px] py-[11px] text-center">
          To'lov usuli
        </Link>
        <Link href="/" className="text-white px-[15px] py-[11px]">
          Hamkorlar
        </Link>
      </div>
    );
  };

  const countries = [
    {
      name: "O'zb",
    },
    {
      name: "Rus",
    },
    {
      name: "Eng",
    },
  ];

  return (
    <Navbar className="sticky top-0 z-20 h-max max-w-full lg:my-[50px] p-4 lg:px-[80px] shadow-none border-none font-inter">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <img className="h-7 lg:h-[60px]" src="/images/project_logo.png" alt="" />
        </Link>
        <div className="mr-4 hidden lg:block">
          <NavList />
        </div>
        <div className="items-center gap-2 flex">
          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button className="text-sm p-0 lg:text-base hover:shadow-none flex items-center justify-center w-[60px] lg:w-[125px] h-[30px] lg:h-[59px] rounded-full bg-transparent text-black font-semibold border-none shadow-none">
                <span>{countries.find(({ name }) => name === lang)?.name}</span>
                <div
                  className={`${openMenu ? "rotate-180" : ""} transition-all`}
                >
                  <DownArrowIcon />
                </div>
              </Button>
            </MenuHandler>
            <MenuList className="max-h-72 w-20">
              {countries.map(({ name, flag }) => (
                <MenuItem
                  key={name}
                  className="flex items-center gap-2"
                  onClick={() => setLang(name)}
                >
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button className="-order-1 lg:order-1 text-xs p-0 lg:text-base inline-block w-[60px] lg:w-[125px] h-[30px] lg:h-[59px]  rounded-full bg-custom-pink font-semibold border-none shadow-none">
            <span>Kirish</span>
          </Button>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <BurgerMenu />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}
export default Header;
