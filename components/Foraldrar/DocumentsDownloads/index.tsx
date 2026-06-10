'use client'

import Image from 'next/image'
import DocumentDownloads from '@/assets/images/icons/dokument&nedladdningar.svg'
import DownloadIcon from '@/assets/images/icons/download.svg'
import PreviewIcon from '@/assets/images/icons/preview.svg'
import { t } from '@/i18n/t'
import { useLang } from '@/i18n/useLang'

type DocumentProps = {
  id: number
  title: string
  file: string
}

const DocumentsStorage = () => {
  const lang = useLang()

  const documents: DocumentProps[] = [
    {
      id: 1,
      title: t('safetydocuments.documents.documentscard.documents.annualReport', lang),
      file: '/documents/1-arsredovisning.pdf',
    },
    {
      id: 2,
      title: t('safetydocuments.documents.documentscard.documents.auditReport', lang),
      file: '/documents/2-revisionsberattelse.pdf',
    },
    {
      id: 3,
      title: t('safetydocuments.documents.documentscard.documents.activityPlan', lang),
      file: '/documents/3-verksamhetsplan.pdf',
    },
    {
      id: 4,
      title: t('safetydocuments.documents.documentscard.documents.budget', lang),
      file: '/documents/4-budget-2025-2026.pdf',
    },
    {
      id: 5,
      title: t('safetydocuments.documents.documentscard.documents.seaScoutGroup', lang),
      file: '/documents/5-sjoscoutkar.pdf',
    },
    {
      id: 6,
      title: t('safetydocuments.documents.documentscard.documents.instructions', lang),
      file: '/documents/6-anvisningar.pdf',
    },
    {
      id: 7,
      title: t('safetydocuments.documents.documentscard.documents.annualMeetingMinutes', lang),
      file: '/documents/7-karstamma-protokoll.pdf',
    },
    {
      id: 8,
      title: t('safetydocuments.documents.documentscard.documents.feeProposal', lang),
      file: '/documents/8-forslag-pa-avgifter.pdf',
    },
    {
      id: 9,
      title: t('safetydocuments.documents.documentscard.documents.activityReport', lang),
      file: '/documents/9-verksamhetsberattelse.pdf',
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex items-center justify-center md:mb-14 md:justify-start">
          <Image src={DocumentDownloads} alt="Document section Icon" />
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            {t('safetydocuments.documents.title', lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-10">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex h-12 w-full items-center justify-between rounded-xl border border-primary/5 bg-primary/5 px-3"
            >
              <a
                href={document.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-transform hover:scale-110"
              >
                <Image src={PreviewIcon} alt="Preview Icon" />

                <span className="absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs text-background group-hover:block">
                  {t('safetydocuments.documents.documentscard.preview', lang)}
                </span>
              </a>

              <span className="text-center text-lg text-primary md:text-base lg:text-lg">
                {document.title}
              </span>

              <a
                href={document.file} download
                className="group relative transition-transform hover:scale-110"
              >
                <Image src={DownloadIcon} alt="Download Icon" />

                <span className="absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs text-background whitespace-nowrap group-hover:block">
                  {t('safetydocuments.documents.documentscard.download', lang)}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentsStorage