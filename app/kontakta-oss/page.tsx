import InterestForm from "@/components/AnmalanIntresse/InterestForm"
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";

const ContactPage = () => {
  return (
    <div className="w-full">
      <HeroSection {...heroSectionData.kontaktaOss} />
      <div className="flex justify-center px-4 py-16 bg-primary/5">
        <InterestForm />
      </div>
    </div>
  )
}

export default ContactPage;