"use client"

import { useEffect, useState } from "react"
import { getLang } from "./langStore"

export const useLang = () => {
  const [lang, setLang] = useState<"sv" | "en">("sv")

  useEffect(() => {
    setLang(getLang())

    const update = () => setLang(getLang())
    window.addEventListener("lang-change", update)
    return () => window.removeEventListener("lang-change", update)
  }, [])

  return lang
}