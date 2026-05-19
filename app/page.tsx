import HomeHero from "@/components/HomeComponents/Hero";
import ScoutGroupsSection from "@/components/HomeComponents/ScoutGroups/ScoutGroupsSection";
import SectionBanner from "@/components/HomeComponents/SectionBanner";
import ServicesSection from "@/components/HomeComponents/Services/ServicesSection";

const Home = () => {
  return (
    <>
      <HomeHero />
      <div>
        <ServicesSection />
        <SectionBanner />
        <ScoutGroupsSection />
      </div>
    </>
  );

}

export default Home;
