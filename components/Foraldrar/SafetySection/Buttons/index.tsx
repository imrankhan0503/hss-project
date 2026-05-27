import Link from "next/link"

type ButtonProps = {
  text: string,
  link: string
}

const ButtonLinks = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link} className="rounded-3xl bg-primary px-6 md:px-14 py-4 text-sm font-bold leading-6 text-secondary text-center transition hover:opacity-90" target="_blank">
      {text}
    </Link>
  )
}
export default ButtonLinks