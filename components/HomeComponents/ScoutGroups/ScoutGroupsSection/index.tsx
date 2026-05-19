import SjohumlorIcon from '@/assets/images/icons/sjöhumlor_icon.png'
import KaparnaIcon from '@/assets/images/icons/kaparna_icon.png'
import KonvojenIcon from '@/assets/images/icons/konvojen_icon.png'
import UtmanareIcon from '@/assets/images/icons/utmanare_icon.png'
import ScoutGroupCard from '../ScoutGroupCard'

const scoutGroupsSectionData = [
  {
    id: 1,
    title: 'Sjöhumlor',
    description: 'Spårare 8-9 år',
    color: 'bg-card-one',
    href: '/sjohumlor',
    icon: SjohumlorIcon
  },
  {
    id: 2,
    title: 'Kaparna',
    description: 'Upptäckare 10-11 år',
    color: 'bg-card-two',
    href: '/kaparna',
    icon: KaparnaIcon
  },
  {
    id: 3,
    title: 'Konvojen',
    description: 'Äventyrare 12-14 år',
    color: 'bg-card-three',
    href: '/konvojen',
    icon: KonvojenIcon
  },
  {
    id: 4,
    title: 'Utmanare',
    description: 'Utmanare 15+',
    color: 'bg-card-four',
    href: '/sjohumlor',
    icon: UtmanareIcon
  },

]

const ScoutGroupsSection = () => {
  return (
    <section className="px-6 py-12 md:px-[70px] md:py-16 bg-(--primary)/20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mx-auto">
        {scoutGroupsSectionData && scoutGroupsSectionData.map(s => (
          <ScoutGroupCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  )
}

export default ScoutGroupsSection;