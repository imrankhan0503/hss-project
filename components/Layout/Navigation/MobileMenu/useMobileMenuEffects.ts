import { useEffect, useLayoutEffect, RefObject } from "react"

interface UseMobileMenuEffectsProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  menuRef: RefObject<HTMLDivElement | null>
}

export const useMobileMenuEffects = ({
  isOpen,
  setIsOpen,
  menuRef,
}: UseMobileMenuEffectsProps) => {
  // Screen scroll lock logic
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Click outside close logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        const target = event.target as HTMLElement
        if (!target.closest("header")) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, setIsOpen, menuRef])
}