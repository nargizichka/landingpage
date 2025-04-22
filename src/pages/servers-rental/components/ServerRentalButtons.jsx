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

import React, { useState } from "react";

function ServerRentalButtons() {
  const [selectedPlan, setSelectedPlan] = useState("standard");

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
      <div className="flex flex-col items-center justify-center mt-6 ">
        <Typography
          variant="h1"
          className="text-center text-4xl md:text-5xl lg:text-7xl mx-auto my-6 font-semibold font-outfit"
        >
          Ijara uchun maxsus <br /> serverlar
        </Typography>

        <Typography
          variant="lead"
          className="text-center text-lg max-w-[986px] md:text-xl lg:text-2xl mx-auto font-medium font-outfit text-black"
        >
          Biznes va texnik jamoalar uchun kuchli serverlar - tayyor va maxsus
          qurilishlar; toza server yoki oldindan tuzilgan dasturiy ta&apos;minot
          bilan.
        </Typography>
      </div>

      <div className="variatButtons mt-16 mx-auto flex items-center justify-center px-4  ">
        <ThemeProvider value={theme}>
          <Tabs
            value={activeTab}
            className="rounded-full gap-2   w-[660px] border-2 border-gray-300"
          >
            <TabsHeader className=" min-h-[65px]  flex flex-col items-center justify-between mx-auto  sm:flex-row">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-[#292929]" : ""}
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

      <div className="buttons flex justify-center items-center mt-8 gap-4">
        <div className="two-buttons flex flex-col sm:flex-row gap-5">
          <Button
            onClick={() => setSelectedPlan("standard")}
            className={`flex items-center justify-center text-black bg-[#f5f6fa] normal-case font-outfit font-medium text-2xl  w-[229px] h-16 `}
          >
            Tayyor serverlar
          </Button>
          <Button
            onClick={() => setSelectedPlan("premium")}
            className={`flex items-center justify-center normal-case font-outfit font-medium text-2xl w-[229px] h-16 bg-[#EE2F5E] text-white`}
          >
            Maxsus qurish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServerRentalButtons;
