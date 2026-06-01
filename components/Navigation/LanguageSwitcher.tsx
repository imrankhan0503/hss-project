"use client"

import { useEffect, useState } from "react"
import { getLang, setLang } from "@/i18n/langStore"
import Image from "next/image"

import EnglishLang from "../../assets/images/icons/circle-flags_lang-en.svg"
import SwedishLang from "../../assets/images/icons/circle-flags_lang-sv.svg"

const LanguageSwitcher = () => {
  const [lang, setLangState] = useState("sv")

  useEffect(() => {
    setLangState(getLang())

    const update = () => setLangState(getLang())
    window.addEventListener("lang-change", update)

    return () => window.removeEventListener("lang-change", update)
  }, [])

  const toggle = () => {
    setLang(lang === "sv" ? "en" : "sv")
  }

  return (
    <button
      onClick={toggle}
      className="
        flex flex-col items-center justify-center
        px-2 py-1
        rounded-full
        text-[#00355F]
        hover:bg-[#00355F]
        hover:text-white
        transition-all duration-200
        min-w-[44px]
      "
    >
      {/* FLAG TOP */}
      <div className="relative w-5 h-5 rounded-full overflow-hidden mb-1">
        <Image
          src={lang === "sv" ? EnglishLang : SwedishLang}
          alt="language flag"
          fill
          className="object-cover"
        />
      </div>

      {/* TEXT BELOW */}
      <span className="text-[12px] font-semibold leading-none">
        {lang === "sv" ? "EN" : "SV"}
      </span>
    </button>
  )
}

export default LanguageSwitcher