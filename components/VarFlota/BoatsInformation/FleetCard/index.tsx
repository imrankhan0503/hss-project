import Image, { StaticImageData } from 'next/image'

type BoatsGroupCardProps = {
    title: string
    subtitle?: string
    description?: string
    bulletPoints?: string[]
    icon?: StaticImageData
    image?: StaticImageData
}

const FleetCard = ({ title, subtitle, description, bulletPoints, icon, image }: BoatsGroupCardProps) => {

    // Unique position of texts for 2nd, 3rd, 4th cards
    const imageTextPosition =
        title === "Optimist"
            ? "items-center text-center"
            : title === "2-kronor"
                ? "items-end text-left"
                : "items-start text-left"

    return (
        <section

            // If card has image: use image background and secondary text. If no image: use white background and primary text.
            className={`rounded-3xl ${image
                ? "text-secondary"
                : "min-h-96 border border-primary/25 bg-background p-8 text-primary"
                }`}
        >
            {image ? (
                /* If card has image */
                <div className="flex flex-col">

                    {/* Mobile: title above image  */}
                    <h3 className="mb-3 text-center text-2xl font-bold text-primary md:hidden">
                        {title}
                    </h3>

                    {/* Image card: used on both mobile and desktop */}
                    <div
                        className="relative flex h-72 overflow-hidden rounded-3xl bg-cover bg-center p-8 md:min-h-96 md:flex-col md:justify-end"
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Desktop: title and subtitle inside image */}
                        <div className={`relative hidden flex-col md:flex ${imageTextPosition}`}>
                            <h3 className="text-2xl font-bold leading-8 drop-shadow-lg">
                                {title}
                            </h3>

                            {subtitle && (
                                <p className="mt-2 max-w-md text-xl font-medium leading-8 drop-shadow-lg">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Mobile: subtitle below image */}
                    {subtitle && (
                        <p className="mt-3 text-center text-lg font-medium text-primary md:hidden">
                            {subtitle}
                        </p>
                    )}
                </div>
            ) : (
                /* If card doesn't have image: description + bullet points */
                <div>
                    <div className="mb-6 flex items-center gap-4">
                        {icon && (
                            <Image
                                src={icon}
                                alt={title}
                                className="w-10"
                            />
                        )}

                        <h3 className="text-2xl font-bold">
                            {title}
                        </h3>
                    </div>

                    {description && (
                        <p className="mt-6 max-w-md text-lg leading-9">
                            {description}
                        </p>
                    )}

                    {bulletPoints && (
                        <ul className="mt-6 list-disc space-y-2 pl-6 text-lg font-medium leading-8">
                            {bulletPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </section>
    )
}

export default FleetCard