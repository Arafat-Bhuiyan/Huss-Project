import AboutSection from "../components/Home_Sections/AboutSection";
import { ContactSec } from "../components/Home_Sections/ContactSec";
import { Hero } from "../components/Home_Sections/Hero";
import { CategorySection } from "../components/Home_Sections/CategorySection";
import ProductsSection from "../components/Home_Sections/ProductsSection";
import SubscribeSection from "../components/Home_Sections/SubscribeSection";

const Home = () => {
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
