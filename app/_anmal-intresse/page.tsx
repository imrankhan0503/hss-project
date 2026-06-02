import Steps from "@/components/AnmalanIntresse/Steps";
import InterestForm from "@/components/AnmalanIntresse/InterestForm";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";

const AnmalIntresse = () => {
  return (
    <main className="bg-primary/5 w-full overflow-x-hidden">
      <HeroSection {...heroSectionData.anmalIntresse} />

      <Steps />

      <div className="flex justify-center px-4 py-16">
        <InterestForm />
      </div>
    </main>
  );
};

export default AnmalIntresse;