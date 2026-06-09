import HomeHero from "@/components/Home/Hero";
import ScoutGroupsSection from "@/components/Home/ScoutGroups/ScoutGroupsSection";
import SectionBanner from "@/components/Home/SectionBanner";
import ServicesSection from "@/components/Home/Services/ServicesSection";

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
