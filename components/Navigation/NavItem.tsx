"use client"

import Link from "next/link"

type NavigationProps = {
  title: string
  link: string
  active?: boolean
  highlighted?: boolean
  mobile?: boolean
  external?: boolean
  onClick?: () => void
}

const NavItem = ({
  title,
  link,
  active,
  highlighted,
  mobile,
  external,
  onClick,
}: NavigationProps) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm md:text-base font-medium 
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary whitespace-nowrap
                  ${mobile ? "w-full text-center" : "w-auto md:w-[130px] lg:w-[140px]"}
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