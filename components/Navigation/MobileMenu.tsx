"use client"

import { useEffect, useRef } from "react"
import NavItem from "./NavItem"

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 top-full z-50 flex flex-col bg-white p-5 shadow-lg md:hidden"  >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="self-end pb-1.5 text-2xl font-bold text-[#00355F]"
        aria-label="Close Menu">
        ✕
      </button>

      <div className="flex flex-col gap-2">
        {navLinks.map((item) => (
          <NavItem
            key={item.link}
            title={item.title}
            link={item.link}
            active={pathname === item.link}
            mobile
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  )
}

export default MobileMenu