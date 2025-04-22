import Inducement from "./components/Inducement";
import DomainHeader from "./components/DomainHeader";
import Offers from "./components/Offers";
import SearchBar from "./components/SearchBar";
import Navigation from "@/components/Navigation";
import FAQs from "./components/FAQs";
import Solutions from "./components/Solutions";
import Registration from "./components/Registration";

export default function Domen() {
  return (
    <>
      <DomainHeader />
      <SearchBar />
      <Navigation />
      <Offers />
      <Solutions />
      <Registration />
      <Inducement />
      <FAQs />
    </>
  );
}
