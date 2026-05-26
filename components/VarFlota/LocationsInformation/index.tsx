'use client'
import { useState } from 'react'
import Image from "next/image"
import LocationIcon from "@/assets/images/icons/maps.svg"

const locations = [
    {
        id: "ruffen",
        label: "Ruffen",
        title: "Kårlokal Ruffen",
        address: "Kårlokal Ruffen, vid Hässelby strandbad ",
        description: "Detta är vår huvudsakliga plats vid vattnet, där vi håller våra veckomöten.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.1868692705673!2d17.819429476991672!3d59.36322007463075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9f000adaa135%3A0xf7c26dadb80cbb2f!2sRuffen%20%7C%20Hässelby%20Strands%20Sjöscoutkår!5e0!3m2!1sen!2sse!4v1779819942863!5m2!1sen!2sse",
    },
    {
        id: "myset",
        label: "Myset",
        title: "Hajkstugan Myset",
        address: "Kyrkhamnsvägen, Järfälla (Mellan Kyrkhamn och Gåseborg)",
        description: "Vår mysiga stuga i skogen som används för övernattningar, hajk och landbaserade aktiviteter.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.161037187684!2d17.765679692509906!3d59.39702570927691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fa128809e851d%3A0xb0d426cb47615c42!2sScoutstugan%20Myset!5e0!3m2!1sen!2sse!4v1779820100522!5m2!1sen!2sse"
    },
    {
        id: "båtklubben",
        label: "Båtklubben",
        title: "Båtklubben HSBK (Hamn)",
        address: "HSBK ligger längst ner på Sparrisbacken",
        description: "Här har vi våra hamnplatser för kårens större båtar under sommarhalvåret.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.5161070541003!2d17.829436476991244!3d59.357724874628076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7560392fb73d%3A0xa15b8231b471acfb!2sHasselby%20beach%20%26%20boat%20club!5e0!3m2!1sen!2sse!4v1779820171039!5m2!1sen!2sse"
    },
    {
        id: "varvet",
        label: "Varvet",
        title: "Varvet IRS (Skeppsbyggeri)",
        address: "IRS ligger på Kanaans väg mot Kanaanbadet",
        description: "Detta är vårt båtvarv där vi utför underhåll, reparationer och vinterförvaring.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.0877052552748!2d17.860526176990614!3d59.34818377462341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f757057e6558b%3A0xbed2e8f83a8d3203!2zSVJTIOKAkyBJbnRyZXNzZWbDtnJlbmluZ2VuIFLDpWNrc3RhIFNqw7ZoYWdl!5e0!3m2!1sen!2sse!4v1779820266061!5m2!1sen!2sse"
    }
]

const LocationsInformation = () => {
    const [activeLocation, setActiveLocation] = useState(locations[0])

    return (
        <section className="w-full md:mb-20 md:px-28">
            <div className="mx-auto max-w-300">

                <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                    <Image
                        src={LocationIcon}
                        alt="Våra Lokaler"
                        className="w-8"
                    />

                    <h2 className="text-2xl font-bold text-primary">
                        Våra Lokaler
                    </h2>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-3 px-6 md:grid-cols-4 md:px-0">
                    {locations.map((location) => (
                        <button
                            key={location.id}
                            type="button"
                            onClick={() => setActiveLocation(location)}
                            className={`h-10 rounded-3xl text-lg ${activeLocation.id === location.id
                                ? "bg-primary font-bold text-secondary"
                                : "bg-secondary font-normal text-primary"
                                }`}
                        >
                            {location.label}
                        </button>
                    ))}
                </div>

                <div className="grid overflow-hidden md:h-96 md:grid-cols-[400px_1fr] md:rounded-3xl">

                    <div className="bg-primary p-8 text-secondary md:min-h-full">
                        <h3 className="mb-6 text-xl font-bold">
                            {activeLocation.title}
                        </h3>

                        <p className="text-xl font-medium">
                            Adress:
                        </p>

                        <p className="mt-2 text-xl ">
                            {activeLocation.address}
                        </p>

                        <p className="mt-8 text-xl font-semibold">
                            {activeLocation.description}
                        </p>
                    </div>

                    <iframe
                        src={activeLocation.mapUrl}
                        className="h-72 w-full border-0 md:h-full"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </section>
    )
}

export default LocationsInformation