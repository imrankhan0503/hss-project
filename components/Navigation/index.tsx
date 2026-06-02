"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavItem from "./NavItem"
import MobileMenu from "./MobileMenu"
import HeaderLogo from "../../assets/images/logo/HSSLogo.png"
import HamburgerMenu from "../../assets/images/hamburger.svg"
import LanguageSwitcher from "./LanguageSwitcher"
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang"

const Navigation = () => {
  useLang()

  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: t("nav.home"), link: "/" },
    { title: t("nav.fleet"), link: "/var-flotta" },
    { title: t("nav.activity"), link: "/verksamhet" },
    { title: t("nav.parents"), link: "/foraldrar" },
    { title: t("nav.contact"), link: "/kontakta-oss" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="relative mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={HeaderLogo}
              alt="HSS Logo"
              width={52}
              height={52}
              priority />

            <div className="text-sm leading-tight text-[#00355F]">
              <p className="text-sm font-semibold">
                {t("headerlogotext.line1")}
              </p>
              <p className="text-sm font-semibold">
                {t("headerlogotext.line2")}
              </p>
              <p className="text-xs">
                {t("headerlogotext.line3")}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5">
              {navLinks.map((item) => (
                <NavItem
                  key={item.link}
                  title={item.title}
                  link={item.link}
                  active={pathname === item.link}
                />
              ))}

              <NavItem
                title={t("nav.join")}
                link="https://www.scoutnet.se/register/in/group/764"
                highlighted
              />

              <LanguageSwitcher />
            </div>
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="ml-auto flex shrink-0 items-center gap-1 md:hidden">
            <div className="text-sm">
              <NavItem
                title={t("nav.join")}
                link="https://www.scoutnet.se/register/in/group/764"
                highlighted
              />
            </div>

            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              className="flex shrink-0 items-center justify-center p-2">
              <Image
                src={HamburgerMenu}
                alt=""
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pathname={pathname}
          navLinks={navLinks}
        />
      </nav>
    </header>
  )
}

export default Navigation