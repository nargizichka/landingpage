import React, { useState } from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  ThemeProvider,
} from "@material-tailwind/react";
import Image from "next/image";

function HostingChapter1() {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [selectedDuration, setSelectedDuration] = useState("yillik");

  const [activeTab, setActiveTab] = React.useState("hosting");

  const data = [
    {
      label: "Home",
      value: "home",
    },
    {
      label: "Domen",
      value: "domen",
    },
    {
      label: "Hosting",
      value: "hosting",
    },
    {
      label: "Server",
      value: "server",
    },
    {
      label: "VPS/VDS",
      value: "vps/vds",
    },
  ];

  const isActive = (type, value) => {
    return type === value ? "bg-black text-white" : "bg-white text-black  ";
  };

  const theme = {
    tab: {
      defaultProps: {
        className: "",
        activeClassName: "  ",
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
              width: "w-24",
              height: "h-14",
              position: "relative",
              bg: "bg-transparent",
              py: "py-1",
              px: "px-2",
              color: "text-black",
              fontSmoothing: "antialiased",
              fontFamily: "font-inter",
              fontSize: "text-base",
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
            bg: "bg-white",
            color: "text-white",
            borderRadius: "rounded-full",
            boxShadow: "shadow",
            borderRadius: "rounded-full",
            border: "border-2 border-gray-300",
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
          bg: "bg-[#F5F6FA]",
          bgOpacity: "none",
          borderRadius: "rounded-full",
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
          fontFamily: "font-inter",
          fontSize: "text-base",
          fontWeight: "font-medium",
          lineHeight: "leading-relaxed",
        },
      },
    },
  };

  return (
    <div className="pt-4">
      <div className="flex flex-col items-center justify-center mt-6">
        <Typography
          variant="h1"
          className="text-center text-4xl md:text-5xl lg:text-7xl mx-auto my-6 font-semibold font-outfit"
        >
          Veb-saytlar uchun <br /> virtual xosting
        </Typography>

        <Typography
          variant="lead"
          className="text-center text-lg md:text-xl lg:text-2xl mx-auto font-medium font-outfit text-black"
        >
          Har qanday saytlar uchun universal yaratish va joylashtirish xizmati.
        </Typography>
      </div>
      <div className="buttons bg-[#F5F6FA] rounded-3xl py-10 px-5 min-h-[155px] flex flex-wrap lg:flex-wrap items-center justify-center lg:justify-center gap-20 mt-6">
        {/* Tariflar */}
        <div className="two-buttons flex flex-col sm:flex-row gap-5">
          <Button
            onClick={() => setSelectedPlan("standard")}
            className={`flex items-center gap-3 normal-case font-outfit font-medium text-base w-40 h-12 ${isActive(
              selectedPlan,
              "standard"
            )}`}
          >
            <Image src="/flash.png" width={24} height={24} alt="flash" />
            Standart
          </Button>
          <Button
            onClick={() => setSelectedPlan("premium")}
            className={`flex items-center gap-3 normal-case font-outfit font-medium text-base w-40 h-12 ${isActive(
              selectedPlan,
              "premium"
            )}`}
          >
            <Image src="/crown.png" width={24} height={24} alt="crown" />
            Premium
          </Button>
        </div>

        {/* Davomiylik */}
        <div className="three-buttons flex flex-col sm:flex-row gap-5">
          <Button
            onClick={() => setSelectedDuration("yillik")}
            className={`normal-case font-outfit font-medium text-base w-40 h-12 ${isActive(
              selectedDuration,
              "yillik"
            )}`}
          >
            Yillik
          </Button>
          <Button
            onClick={() => setSelectedDuration("oylik")}
            className={`normal-case font-outfit font-medium text-base w-40 h-12 ${isActive(
              selectedDuration,
              "oylik"
            )}`}
          >
            Oylik
          </Button>
          <Button
            onClick={() => setSelectedDuration("kunlik")}
            className={`normal-case font-outfit font-medium text-base w-40 h-12 ${isActive(
              selectedDuration,
              "kunlik"
            )}`}
          >
            Kunlik
          </Button>
        </div>

        {/* Tanlash */}
        <div className="one-buttons flex gap-5">
          <Button className="normal-case font-outfit font-medium text-base bg-[#EE2F5E] w-40 h-12 text-white">
            Tarif tanlash
          </Button>
        </div>
      </div>
      <div className="variatButtons mt-16 mx-auto flex items-center justify-center px-4  ">
        <ThemeProvider value={theme}>
          <Tabs
            value={activeTab}
            className="rounded-full gap-2 max-w-[660px] border-2 border-gray-300"
          >
            <TabsHeader className=" min-h-[65px]  flex flex-col items-center justify-between mx-auto  sm:flex-row">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-gray-900" : ""}
                >
                  <div
                    className="flex items-center justify-center gap-2 font-inter font-semibold 
              text-sm sm:text-base md:text-base lg:text-lg"
                  >
                    {label}
                  </div>
                </Tab>
              ))}

              <Button
                className="rounded-full bg-[#EE2F5E] py-1 px-4 
          w-[90px] sm:w-[100px] md:w-[110px] lg:w-[119px] 
          h-[45px] sm:h-[50px] md:h-[55px] lg:h-[57px] 
          text-sm sm:text-base md:text-base 
          font-inter font-semibold normal-case 
          flex items-center justify-center tracking-wide"
              >
                Bog&apos;lanish
              </Button>
            </TabsHeader>
          </Tabs>
        </ThemeProvider>
      </div>
      <div className="services mt-12 mx-auto px-4 py-8 ">
        <div
          className="serviceInfo max-w-[1173px] w-full flex flex-col content-center lg:flex-row flex-wrap 
             items-center justify-center gap-10 mx-auto sm:items-start sm:content-center xs:items-start xs:content-center"
        >
          {/* 24/7 Yordam */}
          <div className="service24 flex flex-row items-center gap-4">
          <Image
            src="/24hours.svg"
            alt="24 hours service"
            width={65}
            height={65}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-[65px] md:h-[65px]"
          />
            <Typography
              variant="lead"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-outfit leading-snug text-left"
            >
              Malakali va do&apos;stona <br />
              yordam xizmati 24/7
            </Typography>
          </div>

          {/* 99.98% Uptime */}
          <div className="endlessWork flex flex-row items-center  gap-4 content-center">
            <Image
              src="/clock.svg"
              alt="uptime"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-[65px] md:h-[65px]"
            />
            <Typography
              variant="lead"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-outfit leading-snug text-left"
            >
              Serverlarning uzluksiz ishlashiga <br />
              99,98% darajasida kafolat
            </Typography>
          </div>

          {/* Panel */}
          <div className="panel flex flex-row items-center gap-4 content-center">
            <Image
              src="/panel.svg"
              alt="control panel"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-[65px] md:h-[65px]"
            />
            <Typography
              variant="lead"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-outfit leading-snug text-left"
            >
              Tushunarli va qulay <br />
              boshqaruv paneli
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingChapter1;
