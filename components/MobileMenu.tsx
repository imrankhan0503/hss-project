"use client"

import { useEffect, useRef } from "react"
import NavItem from "./Navigation/NavItem"

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

        <div ref={menuRef} className="md:hidden w-full bg-white flex flex-col p-5">

            {/* CLOSE BUTTON */}
            <button
                onClick={() => setIsOpen(false)}
                className="self-end text-2xl font-bold pb-1.5"
                aria-label="Close Menu"
            >
                ✕
            </button>

            {/* NAV LINKS */}
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

    )
}

export default MobileMenu