import Navigation from "@/components/Navigation";
import Offers from "../components/Offers";
import InnerDomainHeader from "./components/InnerDomainHeader";
import InnerSearchBar from "./components/InnerSearchBar";
import RegistrationGuide from "./components/RegistrationGuide";
import RegistrationTerms from "./components/RegistrationTerms";

export default function Domen() {
  return (
    <>
      <InnerDomainHeader />
      <InnerSearchBar />
      <Navigation />
      <RegistrationGuide />
      <Offers />
      <RegistrationTerms />
    </>
  );
}
