"use client"

import { useState, useEffect } from "react"
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
  const lang = useLang()

  const navLinks = [
    { title: t("nav.home"), link: "/" },
    { title: t("nav.fleet"), link: "/var-flotta" },
    { title: t("nav.activity"), link: "/verksamhet" },
    { title: t("nav.parents"), link: "/foraldrar" },
    { title: t("nav.contact"), link: "/kontakta-oss" },
  ]

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {

    if (isOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }

    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }

  }, [isOpen])


  return (

    <header className="w-full sticky top-0 z-50 bg-white">


      <nav className="max-w-7xl mx-auto px-4 py-3 relative overflow-x-hidden">

        <div className="flex items-center justify-between gap-6">

          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center gap-3 shrink-0"
          >

            <Image
              src={HeaderLogo}
              alt="HSS Logo"
              width={52}
              height={52}
              priority
            />

            <div className="text-[#00355F] leading-tight text-sm -mr-4">

              <p className="font-semibold text-sm">
                Hässelby Strands
              </p>

              <p className="font-semibold text-sm">
                Sjöscoutkår
              </p>

              <p className="text-xs">
                sedan 1959
              </p>

            </div>

          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden md:flex flex-1 items-center justify-center min-w-0">

            <div className="flex items-center justify-center gap-3 lg:gap-5 flex-wrap">

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

          {/* MOBILE MENU */}

          <div className="flex items-center gap-1 md:hidden ml-auto shrink-0">


            {/* CTA OUTSIDE */}
            <div className="text-sm">
              <NavItem
                title={t("nav.join")}
                link="https://www.scoutnet.se/register/in/group/764"
                highlighted
              />
            </div>
            <LanguageSwitcher />

            {/* HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              className="p-2 flex items-center justify-center shrink-0"
            >

              <Image
                src={HamburgerMenu}
                alt="Menu"
                width={28}
                height={28}
              />

            </button>

          </div>

        </div>

        {/* MOBILE DROPDOWN */}
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