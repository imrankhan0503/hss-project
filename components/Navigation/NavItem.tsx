"use client"
import Link from "next/link"

type NavigationProps = {
    title: string
    link: string
    active?: boolean,
    highlighted?: boolean

}

const NavItem = ({ title, link, active, highlighted }: NavigationProps) => {
    return (
        <Link
            href={link}
            aria-current={active ? "page" : undefined}
            className={`
                px-3 py-2 rounded-full text-sm transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-[#00355F]
                ${
                    highlighted
                        ? "bg-[#F4AB00] text-[#00355F] hover:bg-[#d99600]"
                    : active
                        ? "bg-[#00355F] text-white"
                        : "text-[#00355F] hover:bg-[#00355F] hover:text-white"
                }
            `}
        >
            {title}
        </Link>
    )
}

export default NavItem