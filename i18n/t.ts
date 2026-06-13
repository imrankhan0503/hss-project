import enNav from "./locales/en/navigation.json";
import enLogo from "./locales/en/logo.json";
import enHero from "./locales/en/herosection.json";
import enHomepage from "./locales/en/homepagesection.json";
import enFooter from "./locales/en/footer.json";
import enFleetSection from './locales/en/fleetsection.json';
import enMapSection from './locales/en/mapsection.json';
import enVerksamhet from "./locales/en/verksamhet.json";
import enFormSection from './locales/en/formsection.json';
import enSafetyAndDocumentsSection from './locales/en/safetydocumentsection.json'
import enFAQ from './locales/en/faq.json'
import enInstagramSection from './locales/en/instagram.json'
import enNotFound from './locales/en/not-found.json'

import svNav from "./locales/sv/navigation.json";
import svLogo from "./locales/sv/logo.json";
import svHero from "./locales/sv/herosection.json";
import svHomepage from "./locales/sv/homepagesection.json";
import svFooter from "./locales/sv/footer.json";
import svFleetSection from './locales/sv/fleetsection.json';
import svMapSection from './locales/sv/mapsection.json';
import svVerksamhet from "./locales/sv/verksamhet.json";
import svFormSection from './locales/sv/formsection.json'
import svSafetyAndDocumentsSection from './locales/sv/safetydocumentsection.json'
import svFAQ from './locales/sv/faq.json'
import svInstagramSection from './locales/sv/instagram.json'
import svNotFound from './locales/sv/not-found.json'

import { getLang } from "./langStore";

const dict = {
  en: {
    nav: enNav,
    headerlogotext: enLogo,
    herosection: enHero,
    homepage: enHomepage,
    fleetsection: enFleetSection,
    mapsection: enMapSection,
    footer: enFooter,
    verksamhet: enVerksamhet,
    form: enFormSection,
    safetydocuments: enSafetyAndDocumentsSection,
    faq: enFAQ,
    instagram: enInstagramSection,
    notFound: enNotFound
  },
  sv: {
    nav: svNav,
    headerlogotext: svLogo,
    herosection: svHero,
    homepage: svHomepage,
    fleetsection: svFleetSection,
    mapsection: svMapSection,
    footer: svFooter,
    verksamhet: svVerksamhet,
    form: svFormSection,
    safetydocuments: svSafetyAndDocumentsSection,
    faq: svFAQ,
    instagram: svInstagramSection,
    notFound: svNotFound
  },
};

export const t = (key: string, lang?: "sv" | "en"): string => {
  if (!key) return "";
  const activeLang = lang ?? getLang();
  return (
    (key
      .split(".")
      .reduce((obj: any, k) => obj?.[k], dict[activeLang]) as string) || ""
  );
};
