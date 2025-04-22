import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  ThemeProvider,
  Card,
  CardBody,
  Typography,
  Avatar,
  IconButton,
  Slider,
  Switch,
} from "@material-tailwind/react";
import React from "react";
import Image from 'next/image';

import { Cog6ToothIcon } from "@heroicons/react/24/solid";

function ServerRentalFilters() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenuCPU, setOpenMenuCPU] = React.useState(false);
  const [openMenuDevices, setOpenMenuDevices] = React.useState(false);
  const [lang, setLang] = React.useState("Uzbekistan");
  const [activeTab, setActiveTab] = React.useState("3oy");

  const data = [
    {
      label: "1 oy",
      value: "1oy",
    },
    {
      label: "3 oy",
      value: "3oy",
    },
    {
      label: "6 oy",
      value: "6oy",
    },
    {
      label: "12 oy",
      value: "12oy",
    },
  ];

  const countries = [
    {
      flag: "/photos/uzbflag.svg",
      name: "Uzbekistan",
    },
    {
      flag: "/photos/uzbflag.svg",
      name: "Spain",
    },
    {
      flag: "/photos/uzbflag.svg",
      name: "France",
    },
    {
      flag: "/photos/uzbflag.svg",
      name: "Germany",
    },
  ];

  const theme = {
    tab: {
      defaultProps: {
        className: "",
        activeClassName: "text-white",
        disabled: false,
      },
      styles: {
        base: {
          tab: {
            initial: {
              display: "flex",
              alignItems: "items-center",
              justifyContent: "justify-center",
              textAlign: "text-center",
              width: "w-full",
              height: "h-full",
              position: "relative",
              bg: "bg-transparent",
              py: "py-1",
              px: "px-2",
              color: "text-[#292929]",
              fontSmoothing: "antialiased",
              fontFamily: "font-outfit",
              fontSize: "text-3xl",
              fontWeight: "font-medium",
              lineHeight: "leading-relaxed",
              userSelect: "select-none",
              cursor: "cursor-pointer",
            },

            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              pointerEvents: "pointer-events-none",
              userSelect: "select-none",
            },
          },
          indicator: {
            position: "absolute",
            inset: "inset-0",
            zIndex: "z-10",
            height: "h-full",
            bg: "bg-[#EE2F5E]",
            color: "!text-white",
            borderRadius: "rounded-xl",
            boxShadow: "shadow",
          },
        },
      },
    },
    tabsHeader: {
      defaultProps: {
        className: "",
      },
      styles: {
        base: {
          display: "flex",
          position: "relative",
          bg: "bg-white",
          bgOpacity: "none",
          borderRadius: "rounded-2xl",
          border: "border  border-gray-500",

          p: "p-1",
        },
        horizontal: {
          flexDirection: "flex-row",
        },
        vertical: {
          flexDirection: "flex-col",
        },
      },
    },
    tabPanel: {
      defaultProps: {
        className: "",
      },
      styles: {
        base: {
          width: "w-full",
          height: "h-max",
          color: "text-black",
          p: "p-4",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-base",
          fontWeight: "font-light",
          lineHeight: "leading-relaxed",
        },
      },
    },
  };

  return (
    <div className="bg-[#F5F6FA]   flex justify-between rounded-3xl w-full max-w-[1280px] mx-auto p-4 mt-12 ">
      <div className="flex flex-col gap-4 w-full max-w-[272px]">
        <Menu open={openMenu} handler={setOpenMenu}>
          <MenuHandler>
            <Button
              size="sm"
              variant="outlined"
              className="flex items-center justify-between w-full h-[60px] text-lg sm:text-xl md:text-2xl font-medium font-outfit normal-case px-4"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={countries.find(({ name }) => name === lang)?.flag}
                  alt={lang}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-cover"
                />
                <span>{countries.find(({ name }) => name === lang)?.name}</span>
              </div>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>

          <MenuList className="max-h-72 w-full max-w-[272px]">
            {countries.map(({ name, flag }) => (
              <MenuItem
                key={name}
                className="flex items-center gap-2 font-outfit normal-case text-lg sm:text-xl font-medium"
                onClick={() => setLang(name)}
              >
                <Image src={flag} alt={name} className="w-5 h-5 object-cover" />
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <div className="flex flex-col gap-10 pt-4">
          <div className="flex w-96 flex-col gap-3 bg-[#D9D9D94D] max-w-[272px] min-h-[60px] rounded-xl pt-3 px-4">
            <Typography
              variant="variant"
              className="font-outfit font-normal text-lg md:text-xl text-[#292929] leading-6 mb-2"
            >
              3 294 - 152 900
            </Typography>
            <Slider
              size="sm"
              defaultValue={[30, 70]}
              min={0}
              max={100}
              className="max-w-[228px] text-[#EE2F5E]"
            />
          </div>
          <div className="flex w-96 flex-col gap-3 bg-[#D9D9D94D] max-w-[272px] min-h-[60px] rounded-xl pt-3 px-4">
            <Typography
              variant="variant"
              className="font-outfit font-normal text-lg md:text-xl text-[#292929] leading-6 mb-2"
            >
              2 - 96
            </Typography>
            <Slider
              size="sm"
              defaultValue={[30, 70]}
              min={0}
              max={100}
              className="max-w-[228px] text-[#EE2F5E]"
            />
          </div>
          <div className="flex w-96 flex-col gap-3 bg-[#D9D9D94D] max-w-[272px] min-h-[60px] rounded-xl pt-3 px-4">
            <Typography
              variant="variant"
              className="font-outfit font-normal text-lg md:text-xl text-[#292929] leading-6 mb-2"
            >
              240 - 8 192
            </Typography>
            <Slider
              size="sm"
              defaultValue={[30, 70]}
              min={0}
              max={100}
              className="max-w-[228px] text-[#EE2F5E]"
            />
          </div>
          <div className="flex w-96 flex-col gap-3 bg-[#D9D9D94D] max-w-[272px] min-h-[60px] rounded-xl pt-3 px-4">
            <Typography
              variant="variant"
              className="font-outfit font-normal text-lg md:text-xl text-[#292929] leading-6 mb-2"
            >
              8 - 2 048
            </Typography>
            <Slider
              size="sm"
              defaultValue={[30, 70]}
              min={0}
              max={100}
              className="max-w-[228px] text-[#EE2F5E]"
            />
          </div>
          <Menu open={openMenuCPU} handler={setOpenMenuCPU}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="flex items-center justify-between w-full h-[60px] text-lg sm:text-xl md:text-2xl font-medium font-outfit normal-case px-4"
              >
                <div className="flex items-center gap-2">
                  <span>Protsessor belgisi</span>
                </div>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenuCPU ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>

            <MenuList className="max-h-72 w-full max-w-[272px]">
              <MenuItem
                key="Protsessor belgisi"
                className="flex items-center gap-2 font-outfit normal-case text-lg sm:text-xl font-medium"
              >
                Protsessor belgisi
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu open={openMenuDevices} handler={setOpenMenuDevices}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="flex items-center justify-between w-full h-[60px] text-lg sm:text-xl md:text-2xl font-medium font-outfit normal-case px-4"
              >
                <div className="flex items-center gap-2">
                  <span>Uskuna turi</span>
                </div>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenuDevices ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>

            <MenuList className="max-h-72 w-full max-w-[272px]">
              <MenuItem
                key="Uskuna turi"
                className="flex items-center gap-2 font-outfit normal-case text-lg sm:text-xl font-medium"
              >
                Uskuna turi
              </MenuItem>
            </MenuList>
          </Menu>

          <div className="flex items-center justify-between">
            <Typography className="font-outfit font-medium lg:text-2xl md:text-xl text-[#292929] leading-6 mb-2">
              Ma’muriyat bilan
            </Typography>
            <Switch
              id="custom-switch-component1"
              ripple={false}
              className="h-full w-full checked:bg-[#2C2C2C]"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <Typography
              variant="variant"
              className="font-outfit font-medium   lg:text-2xl  md:text-xl text-[#29292299] leading-6 mb-2"
            >
              Sotish
            </Typography>
            <Switch
              id="custom-switch-component2"
              ripple={false}
              className="h-full w-full checked:bg-[#2C2C2C]"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>

          <div className="">
            <Button className="flex items-center justify-center normal-case w-[272px] min-h-14 text-white font-outfit font-medium text-2xl bg-[#EE2F5E] gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Filtrlarni tiklash
            </Button>
          </div>
        </div>
      </div>

      <div className="months w-full max-w-[954px] ">
        <ThemeProvider value={theme}>
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
            <TabsHeader className="h-[60px] flex items-center justify-between w-full max-w-[954px]">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                >
                  <div className="flex items-center gap-2 max-w-[254px]">
                    <span>{label}</span>
                    {(label === "3 oy" ||
                      label === "6 oy" ||
                      label === "12 oy") && (
                      <span
                        className={`text-xl font-outfit rounded-lg font-medium px-1  transition-colors duration-200
                          ${
                            activeTab === value
                              ? "bg-white text-[#EE2F5E]"
                              : "bg-[#EE2F5E4D] text-[#EE2F5E]"
                          }`}
                      >
                        {label === "3 oy"
                          ? "-5%"
                          : label === "6 oy"
                          ? "-7%"
                          : "-10%"}
                      </span>
                    )}
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className="flex flex-col gap-4"
                >
                  <div className="card1">
                    <Typography
                      variant="variant"
                      className="font-outfit font-normal text-lg md:text-xl text-[#7D7D7D] leading-6 mb-2"
                    >
                      Server ijarasi E3 - 1240 / 8 / 1
                    </Typography>
                    <Card className="w-full border border-gray-200">
                      <CardBody>
                        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between pb-3">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-x-20 w-full">
                            <div className="flex flex-col justify-between">
                              <Typography
                                className="text-[#EE2F5E] font-outfit font-medium text-xl md:text-2xl"
                                variant="h6"
                              >
                                Intel Xeon E3 - 1240
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                              >
                                4 yadro 3.4 - 3.8 GHz8 oqim
                              </Typography>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-14">
                              <Typography
                                variant="lead"
                                className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                              >
                                8 GB DDR3
                              </Typography>
                              <Typography
                                variant="lead"
                                color="gray"
                                className="font-outfit font-medium text-lg md:text-xl text-[#7D7D7D]"
                              >
                                2 x 1 TB HDD
                              </Typography>

                              <div className="flex flex-col">
                                <Typography
                                  variant="lead"
                                  className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                                >
                                  5 310 P bir oy
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                                >
                                  590 P saqlang
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <IconButton className="rounded bg-[#EE2F5E] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                              <i className="fas fa-shopping-cart text-lg" />
                            </IconButton>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="card2">
                    <Typography
                      variant="variant"
                      className="font-outfit font-normal text-lg md:text-xl text-[#7D7D7D] leading-6 mb-2"
                    >
                      Server ijarasi E3 - 1240 / 8 / 1
                    </Typography>
                    <Card className="w-full border border-gray-200">
                      <CardBody>
                        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between pb-3">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-x-20 w-full">
                            <div className="flex flex-col justify-between">
                              <Typography
                                className="text-[#EE2F5E] font-outfit font-medium text-xl md:text-2xl"
                                variant="h6"
                              >
                                Intel Xeon E3 - 1240
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                              >
                                4 yadro 3.4 - 3.8 GHz8 oqim
                              </Typography>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-14">
                              <Typography
                                variant="lead"
                                className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                              >
                                8 GB DDR3
                              </Typography>
                              <Typography
                                variant="lead"
                                color="gray"
                                className="font-outfit font-medium text-lg md:text-xl text-[#7D7D7D]"
                              >
                                2 x 1 TB HDD
                              </Typography>

                              <div className="flex flex-col">
                                <Typography
                                  variant="lead"
                                  className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                                >
                                  5 310 P bir oy
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                                >
                                  590 P saqlang
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <IconButton className="rounded bg-[#EE2F5E] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                              <i className="fas fa-shopping-cart text-lg" />
                            </IconButton>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="card3">
                    <Typography
                      variant="variant"
                      className="font-outfit font-normal text-lg md:text-xl text-[#7D7D7D] leading-6 mb-2"
                    >
                      Server ijarasi E3 - 1240 / 8 / 1
                    </Typography>
                    <Card className="w-full border border-gray-200">
                      <CardBody>
                        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between pb-3">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-x-20 w-full">
                            <div className="flex flex-col justify-between">
                              <Typography
                                className="text-[#EE2F5E] font-outfit font-medium text-xl md:text-2xl"
                                variant="h6"
                              >
                                Intel Xeon E3 - 1240
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                              >
                                4 yadro 3.4 - 3.8 GHz8 oqim
                              </Typography>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-14">
                              <Typography
                                variant="lead"
                                className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                              >
                                8 GB DDR3
                              </Typography>
                              <Typography
                                variant="lead"
                                color="gray"
                                className="font-outfit font-medium text-lg md:text-xl text-[#7D7D7D]"
                              >
                                2 x 1 TB HDD
                              </Typography>

                              <div className="flex flex-col">
                                <Typography
                                  variant="lead"
                                  className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                                >
                                  5 310 P bir oy
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                                >
                                  590 P saqlang
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <IconButton className="rounded bg-[#EE2F5E] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                              <i className="fas fa-shopping-cart text-lg" />
                            </IconButton>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="card4">
                    <Typography
                      variant="variant"
                      className="font-outfit font-normal text-lg md:text-xl text-[#7D7D7D] leading-6 mb-2"
                    >
                      Server ijarasi E3 - 1240 / 8 / 1
                    </Typography>
                    <Card className="w-full border border-gray-200">
                      <CardBody>
                        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between pb-3">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-x-20 w-full">
                            <div className="flex flex-col justify-between">
                              <Typography
                                className="text-[#EE2F5E] font-outfit font-medium text-xl md:text-2xl"
                                variant="h6"
                              >
                                Intel Xeon E3 - 1240
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                              >
                                4 yadro 3.4 - 3.8 GHz8 oqim
                              </Typography>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-14">
                              <Typography
                                variant="lead"
                                className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                              >
                                8 GB DDR3
                              </Typography>
                              <Typography
                                variant="lead"
                                color="gray"
                                className="font-outfit font-medium text-lg md:text-xl text-[#7D7D7D]"
                              >
                                2 x 1 TB HDD
                              </Typography>

                              <div className="flex flex-col">
                                <Typography
                                  variant="lead"
                                  className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                                >
                                  5 310 P bir oy
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                                >
                                  590 P saqlang
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <IconButton className="rounded bg-[#EE2F5E] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                              <i className="fas fa-shopping-cart text-lg" />
                            </IconButton>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="card5">
                    <Typography
                      variant="variant"
                      className="font-outfit font-normal text-lg md:text-xl text-[#7D7D7D] leading-6 mb-2"
                    >
                      Server ijarasi E3 - 1240 / 8 / 1
                    </Typography>
                    <Card className="w-full border border-gray-200">
                      <CardBody>
                        <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between pb-3">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-x-20 w-full">
                            <div className="flex flex-col justify-between">
                              <Typography
                                className="text-[#EE2F5E] font-outfit font-medium text-xl md:text-2xl"
                                variant="h6"
                              >
                                Intel Xeon E3 - 1240
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                              >
                                4 yadro 3.4 - 3.8 GHz8 oqim
                              </Typography>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-14">
                              <Typography
                                variant="lead"
                                className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                              >
                                8 GB DDR3
                              </Typography>
                              <Typography
                                variant="lead"
                                color="gray"
                                className="font-outfit font-medium text-lg md:text-xl text-[#7D7D7D]"
                              >
                                2 x 1 TB HDD
                              </Typography>

                              <div className="flex flex-col">
                                <Typography
                                  variant="lead"
                                  className="font-outfit font-medium text-lg md:text-xl text-[#292929]"
                                >
                                  5 310 P bir oy
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-outfit font-medium text-base md:text-lg text-[#7D7D7D]"
                                >
                                  590 P saqlang
                                </Typography>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <IconButton className="rounded bg-[#EE2F5E] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                              <i className="fas fa-shopping-cart text-lg" />
                            </IconButton>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ServerRentalFilters;
