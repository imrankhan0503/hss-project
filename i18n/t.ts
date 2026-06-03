import enNav from './locales/en/navigation.json'
import enLogo from './locales/en/logo.json'
import enHero from './locales/en/herosection.json'
import enHomepage from './locales/en/homepagesection.json'

import svNav from './locales/sv/navigation.json'
import svLogo from './locales/sv/logo.json'
import svHero from './locales/sv/herosection.json'
import svHomepage from './locales/sv/homepagesection.json'

import { getLang } from "./langStore"

const dict = {
  en: {
    nav: enNav,
    headerlogotext: enLogo,
    herosection: enHero,
    homepage: enHomepage
  },
  sv: {
    nav: svNav,
    headerlogotext: svLogo,
    herosection: svHero,
    homepage: svHomepage
  }
}

export const t = (key: string): string => {
  if (!key) return "";
  const lang = getLang();


  return (key.split(".").reduce((obj: any, k) => obj?.[k], dict[lang]) as string) || "";
}
