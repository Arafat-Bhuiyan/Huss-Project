import AboutSection from "../components/Home_Sections/AboutSection";
import { ContactSec } from "../components/Home_Sections/ContactSec";
import { Hero } from "../components/Home_Sections/Hero";
import { CategorySection } from "../components/Home_Sections/CategorySection";
import ProductsSection from "../components/Home_Sections/ProductsSection";
import SubscribeSection from "../components/Home_Sections/SubscribeSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#products") {
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <CategorySection />
      <ProductsSection />
      <AboutSection />
      <SubscribeSection />
      <ContactSec />
    </div>
  );
};

export default Home;
