import sv from "./sv.json"
import en from "./en.json"
import { getLang } from "./langStore"

const dict = { sv, en }

export const t = (key: string) => {
  const lang = getLang()

  return key.split(".").reduce((obj: any, k) => obj?.[k], dict[lang])
}