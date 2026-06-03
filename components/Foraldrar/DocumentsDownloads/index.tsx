import Image from 'next/image'
import DocumentDownloads from '@/assets/images/icons/dokument&nedladdningar.svg'
import DownloadIcon from '@/assets/images/icons/download.svg'
import PreviewIcon from '@/assets/images/icons/preview.svg'

type DocumentProps = {
    id: number
    title: string
    file: string
}

const documents: DocumentProps[] = [
    {
        id: 1,
        title: 'Årsredovisning',
        file: '/documents/1-arsredovisning.pdf',
    },
    {
        id: 2,
        title: 'Revisionsberättelse',
        file: '/documents/2-revisionsberattelse.pdf',
    },
    {
        id: 3,
        title: 'Verksamhetsplan',
        file: '/documents/3-verksamhetsplan.pdf',
    },
    {
        id: 4,
        title: 'Budget 2025-2026',
        file: '/documents/4-budget-2025-2026.pdf',
    },
    {
        id: 5,
        title: 'Sjöscoutkår',
        file: '/documents/5-sjoscoutkar.pdf',
    },
    {
        id: 6,
        title: 'Anvisningar',
        file: '/documents/6-anvisningar.pdf',
    },
    {
        id: 7,
        title: 'Kårstämma protokoll',
        file: '/documents/7-karstamma-protokoll.pdf',
    },
    {
        id: 8,
        title: 'Förslag på avgifter',
        file: '/documents/8-forslag-pa-avgifter.pdf',
    },
    {
        id: 9,
        title: 'Verksamhetsberättelse',
        file: '/documents/9-verksamhetsberattelse.pdf',
    },
]

const DocumentsStorage = () => {
    return (
        <section className="w-full py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 flex items-center justify-center md:mb-14 md:justify-start">
                    <Image src={DocumentDownloads} alt="Document section Icon" />
                    <h2 className="text-base font-bold text-primary md:text-2xl">
                        Dokument & Nedladdningar
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
                                    Preview
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

                                <span className="absolute left-1/2 top-full z-10 mt-2 hidden -translate-x-1/2 rounded-md bg-primary px-2 py-1 text-xs text-background group-hover:block">
                                    Download
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