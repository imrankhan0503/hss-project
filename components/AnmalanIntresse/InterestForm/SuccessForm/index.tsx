import Image from "next/image"
import LogoImage from "@/assets/images/background/logo-title.jpg"
import SuccessIcon from "@/assets/images/icons/success-icon.svg"

const SuccessForm = () => {
    return (
        <div className="flex min-h-155 flex-col items-center justify-center px-8 py-10 text-center text-primary">
            <Image
                src={LogoImage}
                alt="Hässelby Strands Sjöscoutkår"
                className="mb-16 w-72"
            />

            <Image
                src={SuccessIcon}
                alt="Success icon"
                className="mb-8 w-24"
            />

            <h2 className="mb-8 text-2xl font-bold">
                Tack för ditt intresse!
            </h2>

            <p className="max-w-md text-lg leading-10">
                Vi har mottagit din anmälan och kommer att kontakta dig inom kort med mer
                information om hur ni kan prova på.
            </p>
        </div>
    )
}

export default SuccessForm