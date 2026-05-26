import HomeHero from "@/components/HomeComponents/Hero";
import JoinCTASection from "@/components/HomeComponents/JoinCTA";
import ScoutGroupsSection from "@/components/HomeComponents/ScoutGroups/ScoutGroupsSection";
import SectionBanner from "@/components/HomeComponents/SectionBanner";
import ServicesSection from "@/components/HomeComponents/Services/ServicesSection";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <HomeHero />
      <ServicesSection />
      <SectionBanner />
      <ScoutGroupsSection />
      <JoinCTASection />
    </div>
  );

}

export default Home;
