import BoatsInformation from "@/components/VarFlota/BoatsInformation";
import LocationsInformation from "@/components/VarFlota/LocationsInformation";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";

const VarFlotta = () => {
  return (
    <main>
      <HeroSection {...heroSectionData.varFlotta} />

      <BoatsInformation />
      <LocationsInformation />
    </main>
  );
};

export default VarFlotta;