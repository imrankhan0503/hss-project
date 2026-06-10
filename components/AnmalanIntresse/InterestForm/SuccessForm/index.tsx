import Image from "next/image"
import LogoImage from "@/assets/images/background/logo-title.jpg"
import SuccessIcon from "@/assets/images/icons/success-icon.svg"
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const SuccessForm = () => {
  const lang = useLang()
  return (
    <div className="flex min-h-120 flex-col items-center justify-center px-4 py-4 text-center text-primary">
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
        {t('form.successPage.heading', lang)}
      </h2>

      <p className="max-w-md text-lg leading-10">
        {t('form.successPage.subHeading', lang)}
      </p>
    </div>
  )
}

export default SuccessForm