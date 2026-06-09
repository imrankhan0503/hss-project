'use client'

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import InstagramLogo from '@/assets/images/icons/Instagram.svg'
import image1 from '@/assets/images/instagram/running.jpg'
import image2 from '@/assets/images/instagram/sailingboat_one.jpg'
import image3 from '@/assets/images/instagram/outdoor_climbing.jpg'
import image4 from '@/assets/images/instagram/knitting.jpg'
import image5 from '@/assets/images/instagram/sailingboat_2.jpg'
import image6 from '@/assets/images/instagram/indoor_climbing.jpg'
import image7 from '@/assets/images/instagram/tents.jpg'
import image8 from '@/assets/images/instagram/arts.jpg'
import { PostDataProps } from "@/types/instagram";
import Post from "./Post";
import CarouselButton from "./CarouselButton";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const instagramDummyImages: PostDataProps[] = [
  {
    id: 1,
    media_url: image1,
    permalink: 'https://www.instagram.com/p/DZABmSriAD_/',
    caption: 'Kids marathon'
  },
  {
    id: 2,
    media_url: image2,
    permalink: 'https://www.instagram.com/p/DZABgHnCDOq/',
    caption: 'Sailing boat in stockholm'
  },
  {
    id: 3,
    media_url: image3,
    permalink: 'https://www.instagram.com/p/DZABYd-iJaj/',
    caption: 'Outdoor climbing'
  },
  {
    id: 4,
    media_url: image4,
    permalink: 'https://www.instagram.com/p/DZABRUKCDqg/',
    caption: 'Knitting activity'
  },
  {
    id: 5,
    media_url: image5,
    permalink: 'https://www.instagram.com/p/DZABLihiAc8/',
    caption: 'Sailboats'
  },
  {
    id: 6,
    media_url: image6,
    permalink: 'https://www.instagram.com/p/DZABEERCBWs/',
    caption: 'Rock climbing'
  },
  {
    id: 7,
    media_url: image7,
    permalink: 'https://www.instagram.com/p/DZAA4ZaiKb3/',
    caption: 'Our camping site'
  },
  {
    id: 8,
    media_url: image8,
    permalink: 'https://www.instagram.com/p/DZAAyEMCNki/',
    caption: 'Kids doing crafts'
  }

]

const InstagramSection = () => {
  useLang()
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="w-full px-6 py-12 md:px-[70]">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
        <Image src={InstagramLogo} alt="instagram logo" className="w-9 md:w-12 h-9 md:h-12" />
        <h2 className="text-xl md:text-2xl font-bold text-primary">
          {t('homepage.instagramText')}
        </h2>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {instagramDummyImages && instagramDummyImages.map(i => (
            <Post key={i.id} {...i} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-8">
        {emblaApi?.scrollSnapList().map((_, index) => (
          <CarouselButton key={index} index={index} imageIndex={selectedIndex} onChange={(index) => emblaApi.scrollTo(index)} />
        ))}
      </div>
    </section>
  )
}
export default InstagramSection;