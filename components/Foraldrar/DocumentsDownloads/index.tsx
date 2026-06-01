import Image from 'next/image'
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
        <section>
            <h2>Documents & Nedladdningar</h2>

            <div>
                {documents.map((document) => (
                    <div key={document.id}>
                        <a
                            href={document.file}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={PreviewIcon}
                                alt="Preview Icon"
                            />
                        </a>

                        <span>{document.title}</span>

                        <a
                            href={document.file}
                            download
                        >
                            <Image
                                src={DownloadIcon}
                                alt="Download Icon"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DocumentsStorage