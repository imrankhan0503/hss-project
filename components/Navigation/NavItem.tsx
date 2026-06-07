"use client"

import Link from "next/link"

type NavigationProps = {
  title: string
  link: string
  active?: boolean
  highlighted?: boolean
  mobile?: boolean
  onClick?: () => void
}

const NavItem = ({
  title,
  link,
  active,
  highlighted,
  mobile,
  onClick,
}: NavigationProps) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary
        ${mobile ? "w-full text-center" : ""}
        ${highlighted
          ? "bg-secondary text-primary hover:bg-[#d99600] hover:text-background"
          : active
            ? "bg-primary text-background"
            : "text-primary hover:bg-primary hover:text-background"
        }
      `}
    >
      {title}
    </Link>
  )
}

export default NavItem