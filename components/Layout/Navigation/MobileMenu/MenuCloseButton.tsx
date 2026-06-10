"use client"

interface MenuCloseButtonProps {
  onClick: () => void
}

const MenuCloseButton = ({ onClick }: MenuCloseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-6 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all duration-300 active:scale-90 shadow-sm"
      aria-label="Close Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

export default MenuCloseButton