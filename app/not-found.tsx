'use client'

import Link from "next/link";
import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/t";

const NotFound = () => {
  const lang = useLang()
  return (
    <>
      <div className="min-h-screen px-6 flex items-center justify-center bg-background text-primary">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="mt-4 text-2xl font-semibold"> {t("notFound.subtitle", lang)}</h2>
          <p className="mt-4 text-sm opacity-80">{t("notFound.description", lang)}</p>
          <div className="mt-8">
            <Link href="/" className="px-6 py-3 rounded-full bg-primary text-background font-semibold">
              {t("notFound.button", lang)}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound;