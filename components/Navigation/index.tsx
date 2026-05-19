'use client'

import { useState } from "react"
import NavItem from "./NavItem"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import HeaderLogo from "../../assets/images/logo/HSSLogo.png"
import HamburgerMenu from "../../assets/images/hamburger.svg"

const Navigation = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full flex items-center justify-between px-4 py-3 relative">

            {/* LOGO */}
            <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Go to homepage"
            >

                <Image
                    src={HeaderLogo}
                    alt="HSS Logo"
                    width={48}
                    height={48}
                    priority
                />

                <div className="text-[#00355F] leading-tight">
                    <p className="font-semibold text-sm">Hässelby Strands</p>
                    <p className="font-semibold text-sm">Sjöscoutkår</p>
                    <p className="text-xs">sedan 1945</p>
                </div>

            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">

                <NavItem title="Hem" link="/" active={pathname === "/"} />
                <NavItem title="Anmäl Intresse" link="/interest" active={pathname === "/interest"} />
                <NavItem title="Vår Flotta" link="/fleet" active={pathname === "/fleet"} />
                <NavItem title="Verksamhet" link="/activities" active={pathname === "/activities"} />
                <NavItem title="För Föräldrar" link="/parents" active={pathname === "/parents"} />

                <NavItem title="Gå med" link="/join" highlighted />

            </div>

            {/* MOBILE MENU */}
            <div className="flex items-center gap-3 md:hidden">

                {/* CTA always visible */}
                <NavItem title="Gå med" link="/join" highlighted />

                {/* Hamburger (SVG) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    className="p-1"
                    aria-expanded={isOpen}
                >
                    <Image
                        src={HamburgerMenu}
                        alt="Menu"
                        width={28}
                        height={28}
                    />
                </button>

            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-2 p-4 md:hidden z-50">

                    <NavItem title="Hem" link="/" active={pathname === "/"} />
                    <NavItem title="Anmäl Intresse" link="/interest" active={pathname === "/interest"} />
                    <NavItem title="Vår Flotta" link="/fleet" active={pathname === "/fleet"} />
                    <NavItem title="Verksamhet" link="/activities" active={pathname === "/activities"} />
                    <NavItem title="För Föräldrar" link="/parents" active={pathname === "/parents"} />

                </div>
            )}

        </nav>
    )
}

export default Navigation