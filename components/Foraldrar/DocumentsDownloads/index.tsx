import Image from 'next/image'
import DownloadIcon from '@/assets/images/icons/download.svg'

const documents = [
    {
        id: 1,
        title: "Årsredovisning",
        file: "/documents/1-arsredovisning.pdf"
    },
    {
        id: 2,
        title: "Revisionsberättelse",
        file: "/documents/2-revisionsberattelse.pdf"
    },
    {
        id: 3,
        title: "Verksamhetsplan",
        file: "/documents/3-verksamhetsplan.pdf"
    },
    {
        id: 4,
        title: "Budget 2025-2026",
        file: "/documents/4-budget-2025-2026.pdf"
    },
    {
        id: 5,
        title: "Sjöscoutkår",
        file: "/documents/5-sjoscoutkar.pdf"
    },
    {
        id: 6,
        title: "Anvisningar",
        file: "/documents/6-anvisningar.pdf"
    },
    {
        id: 7,
        title: "Kårstämma protololl",
        file: "/documents/7-karstamma-protokoll.pdf"
    },
    {
        id: 8,
        title: "Förslag på avgifter",
        file: "/documents/8-forslag-pa-avgifter.pdf"
    },
    {
        id: 9,
        title: "Verksamhetsberättelse",
        file: "/documents/9-verksamhetsberattelse.pdf"
    }
]

const DocumentsStorage = () => {
    return (
        <section>
            <h2>Documents & Nedladdningar</h2>

            <div>
                {documents.map((document) => (
                    <a
                        key={document.id}
                        href={document.file}
                        download
                    >
                        <span>{document.title}</span>
                        <Image src={DownloadIcon} alt="Download Icon" />
                    </a>
                ))}
            </div>
        </section>
    )
}

export default DocumentsStorage