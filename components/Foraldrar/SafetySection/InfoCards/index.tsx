'use client'

import Image from "next/image";
import { InformationCardsProps } from "@/types/safety";
import PreviewIcon from '@/assets/images/icons/preview.svg'
import DownloadIcon from '@/assets/images/icons/download.svg'
import { t } from '@/i18n/t'
import { useLang } from "@/i18n/useLang";

const InformationCards = ({ title, description, icon, isPolicyBanner }: InformationCardsProps) => {
  const lang = useLang()
  return (
    <div className="rounded-3xl border border-primary/10 bg-[linear-gradient(to_right,rgba(8,47,73,0.05)_0%,rgba(8,47,73,0.05)_33%,transparent_100%)] p-6">
      {isPolicyBanner ?
        <div className="flex flex-col items-center text-center pb-4">
          <div className="flex items-center  justify-center gap-2 md:gap-4">
            <a href='/documents/flytvästpolicy-2025.pdf'
              target="_blank"
              rel="noopener noreferrer"
              className="group relative order-1 md:order-3 transition-transform hover:scale-110">
              <div className="relative h-5 md:h-7 w-5 md:w-7 shrink-0">
                <Image
                  src={PreviewIcon}
                  alt="Preview Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs text-background whitespace-nowrap group-hover:block">
                {t('safetydocuments.documents.documentscard.preview', lang)}
              </span>
            </a>

            <div className="order-2 md:order-1 flex items-center gap-2 md:gap-4">
              <div className="relative h-7 md:h-12 w-7 md:w-12 shrink-0 overflow-hidden">
                <Image src={icon} alt={title} fill className="object-contain" />
              </div>

              <h3 className="text-sm md:text-base font-bold text-primary text-center md:text-start">
                {title}
              </h3>
            </div>

            <a href='/documents/flytvästpolicy-2025.pdf'
              download
              className="group relative order-3 md:order-4 transition-transform hover:scale-110">
              <div className="relative h-7 md:h-10 w-7 md:w-10 shrink-0">
                <Image
                  src={DownloadIcon}
                  alt="Download Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs text-background whitespace-nowrap group-hover:block">
                {t('safetydocuments.documents.documentscard.download', lang)}
              </span>
            </a>
          </div>
        </div>
        :
        <div className="flex flex-col items-center md:items-start text-center">
          <div className="flex items-center md:justify-start gap-2 md:gap-4">
            <div className="relative h-7 md:h-12 w-7 md:w-12 shrink-0 overflow-hidden">
              <Image src={icon} alt={title} fill className="object-contain" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-primary text-center md:text-start">
              {title}
            </h3>
          </div>
        </div>
      }
      <p className={`mt-2 ${isPolicyBanner ? 'text-base' : 'text-sm'} leading-6 text-primary/80 text-center ${isPolicyBanner ? 'md:text-center' : 'md:text-start'}`}>
        {description}
      </p>
    </div>
  )
}
export default InformationCards;