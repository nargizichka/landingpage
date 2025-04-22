import Clients from "./components/Clients";
import FAQs from "./components/FAQs";
import Form from "./components/Form";
import HeroSection from "./components/HeroSection";
import Inducement from "./components/Inducement";
import Navigation from "../components/Navigation";
import News from "./components/News";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Navigation/>
    <Inducement/>
    <Services/>
    <News/>
    <Testimonials/>
    <Clients/>
    <FAQs/>
    <Form/>
    </>
  );
}
