"use client"

type Lang = "sv" | "en"

const KEY = "lang"

export const getLang = (): Lang => {
  if (typeof window === "undefined") return "sv"
  return (localStorage.getItem(KEY) as Lang) || "sv"
}

export const setLang = (lang: Lang) => {
  localStorage.setItem(KEY, lang)
  window.dispatchEvent(new Event("lang-change"))
}