import FAQ from "./components/FAQ";
import HostingChapter1 from "./components/HostingChapter1";
import HostingChapter3 from "./components/HostingChapter3";
import HostingChapter5 from "./components/HostingChapter5";
import HostingChapter6 from "./components/HostingChapter6";
import HostingChapter7 from "./components/HostingChapter7";
import HostingPlanCards from "./components/HostingPlanCards";
import UniversalFeatures from "./components/UniversalFeatures";

export default function Hosting() {
  return (
    <>
      <div className="container w-[85%] mx-auto ">
        <HostingChapter1 />
        <HostingPlanCards />
        <HostingChapter3 />
        <UniversalFeatures />
        <HostingChapter5 />
        <HostingChapter6 />
        <HostingChapter7 />
        <FAQ />
      </div>
    </>
  );
}
