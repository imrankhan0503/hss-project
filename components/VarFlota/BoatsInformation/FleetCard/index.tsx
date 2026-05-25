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
    return (
        <section
            className="flex aspect-square h-full flex-col rounded-3xl border border-primary/20 bg-background bg-cover bg-center p-8"
            style={image ? { backgroundImage: `url(${image.src})` } : undefined}
        >
            {icon && (
                <Image
                    src={icon}
                    alt={title}
                />
            )}

            <h3>{title}</h3>

            {subtitle && <p>{subtitle}</p>}
            {description && <p>{description}</p>}

            {bulletPoints && (
                <ul>
                    {bulletPoints.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            )}
        </section>
    )
}
export default FleetCard