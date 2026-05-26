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
            className={`min-h-96 rounded-3xl bg-cover bg-center p-8 ${image
                ? "flex flex-col justify-end bg-primary/20 text-secondary"
                : "border border-primary/25 bg-background text-primary"
                }`}
            style={image ? { backgroundImage: `url(${image.src})` } : undefined}
        >
            {image ? (
                /* If card has image */
                <div className={`flex flex-col ${imageTextPosition}`}>
                    <h3 className="text-2xl font-bold leading-8">
                        {title}
                    </h3>

                    {subtitle && (
                        <p className="mt-2 max-w-md text-xl font-medium leading-8">
                            {subtitle}
                        </p>
                    )}
                </div>
            ) : (
                /* If card doesn't have image */
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
                        <p className="mt-6 max-w-md text-base leading-9">
                            {description}
                        </p>
                    )}

                    {bulletPoints && (
                        <ul className="mt-6 list-disc space-y-2 pl-6 text-base font-medium leading-8">
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