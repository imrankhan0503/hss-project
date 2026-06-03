import SjohumlorIcon from "@/assets/images/icons/sjohumlor_icon.png";
import KaparnaIcon from "@/assets/images/icons/kaparna_icon.png";
import KonvojenIcon from "@/assets/images/icons/konvojen_icon.png";
import UtmanareIcon from "@/assets/images/icons/utmanare_icon.png";
import FamiljescoutIcon from "@/assets/images/icons/familyscout_icon.png";
import SailingIcon from '@/assets/images/homepage/segling.svg'
import PeopleIcon from '@/assets/images/homepage/gemenskap.svg'
import GrowthIcon from '@/assets/images/homepage/utveckling.svg'
import { ScoutGroupCardData } from "@/types/home";
import { ServiceCardData } from '@/types/home'
import { t } from "@/i18n/t";

export const scoutGroupsSectionData: ScoutGroupCardData[] = [
  {
    id: 1,
    title: "Sjöhumlor",
    description: t("homepage.groups.sjöhumlor.description"),
    color: "bg-card-one",
    href: "/verksamhet?expand=sjohumlor",
    icon: SjohumlorIcon,
  },
  {
    id: 2,
    title: "Kaparna",
    description: t("homepage.groups.kaparna.description"),
    color: "bg-card-two",
    href: "/verksamhet?expand=kaparna",
    icon: KaparnaIcon,
  },
  {
    id: 3,
    title: "Konvojen",
    description: t("homepage.groups.konvojen.description"),
    color: "bg-card-three",
    href: "/verksamhet?expand=konvojen",
    icon: KonvojenIcon,
  },
  {
    id: 4,
    title: "Utmanare",
    description: t("homepage.groups.utmanare.description"),
    color: "bg-card-four",
    href: "/verksamhet?expand=utmanare",
    icon: UtmanareIcon,
  },
  {
    id: 5,
    title: t("homepage.groups.familyscout.title"),
    description: t("homepage.groups.familyscout.description"),
    color: "bg-card-five",
    href: "/verksamhet?expand=familjescout",
    icon: FamiljescoutIcon,
  },
];

export const servicesSectionData: ServiceCardData[] = [
  {
    id: 1,
    title: t('homepage.services.sailing.title'),
    description: t('homepage.services.sailing.description'),
    icon: SailingIcon,
    resize: true
  },
  {
    id: 2,
    title: t('homepage.services.community.title'),
    description: t('homepage.services.community.description'),
    icon: PeopleIcon
  },
  {
    id: 3,
    title: t('homepage.services.development.title'),
    description: t('homepage.services.development.description'),
    icon: GrowthIcon
  },
]