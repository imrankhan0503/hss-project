"use client"

import { useRef } from "react"
import NavItem from "../NavItem"
import MenuCloseButton from "./MenuCloseButton"
import { useMobileMenuEffects } from "./useMobileMenuEffects"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  pathname: string
  navLinks: {
    title: string
    link: string
  }[]
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
  pathname,
  navLinks,
}: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Custom hook calling for side-effects
  useMobileMenuEffects({ isOpen, setIsOpen, menuRef })

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-[9998] md:hidden top-[72px] sm:top-[76px] bg-background backdrop-blur-md transition-all duration-500 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Main Container */}
      <div
        className={`relative flex h-full flex-col p-6 pt-16 transition-all duration-500 delay-75 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
      >
        {/* Reusable Close Button */}
        <MenuCloseButton onClick={() => setIsOpen(false)} />

        {/* Links List Container */}
        <div 
          ref={menuRef} 
          className="flex flex-col gap-4 items-center justify-center mt-8 w-full max-w-xs mx-auto"
        >
          {navLinks.map((item, index) => (
            <div 
              key={item.link} 
              className="w-full text-center transition-all duration-500"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <NavItem
                title={item.title}
                link={item.link}
                active={pathname === item.link}
                mobile
                onClick={() => setIsOpen(false)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Branding */}
        <div className={`text-center text-xs font-semibold tracking-widest text-primary/30 mt-auto pb-4 transition-all duration-700 delay-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          HÄSSELBY STRANDS SJÖSCOUTKÅR
        </div>
      </div>
    </div>
  )
}

export default MobileMenu