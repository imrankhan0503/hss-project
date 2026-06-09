'use client'
import SjohumlorIcon from "@/assets/images/icons/sjohumlor_icon.png";
import KaparnaIcon from "@/assets/images/icons/kaparna_icon.png";
import KonvojenIcon from "@/assets/images/icons/konvojen_icon.png";
import UtmanareIcon from "@/assets/images/icons/utmanare_icon.png";
import FamiljescoutIcon from "@/assets/images/icons/familyscout_icon.png";
import ScoutGroupCard from "../ScoutGroupCard";
import { ScoutGroupCardData } from "@/types/home";
import { t } from "@/i18n/t";
import { useLang } from "@/i18n/useLang";

const ScoutGroupsSection = () => {
  useLang()

  const scoutGroupsSectionData: ScoutGroupCardData[] = [
    {
      id: 1,
      title: "Sjöhumlor",
      description: t("homepage.groups.sjöhumlor.description"),
      color: "bg-card-one",
      href: "/verksamhet/sjohumlor",
      icon: SjohumlorIcon,
    },
    {
      id: 2,
      title: "Kaparna",
      description: t("homepage.groups.kaparna.description"),
      color: "bg-card-two",
      href: "/verksamhet/kaparna",
      icon: KaparnaIcon,
    },
    {
      id: 3,
      title: "Konvojen",
      description: t("homepage.groups.konvojen.description"),
      color: "bg-card-three",
      href: "/verksamhet/konvojen",
      icon: KonvojenIcon,
    },
    {
      id: 4,
      title: "Utmanare",
      description: t("homepage.groups.utmanare.description"),
      color: "bg-card-four",
      href: "/verksamhet/utmanare",
      icon: UtmanareIcon,
    },
    {
      id: 5,
      title: t("homepage.groups.familyscout.title"),
      description: t("homepage.groups.familyscout.description"),
      color: "bg-card-five",
      href: "/verksamhet/familjescout",
      icon: FamiljescoutIcon,
    },
  ];

  return (
    <section className="px-6 py-12 md:px-[70px] md:py-16 bg-(--primary)/20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8 mx-auto">
        {scoutGroupsSectionData &&
          scoutGroupsSectionData.map((s) => (
            <ScoutGroupCard key={s.id} {...s} />
          ))}
      </div>
    </section>
  );
};

export default ScoutGroupsSection;
