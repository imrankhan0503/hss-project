'use client'

import Image from "next/image";
import InstagramLogo from '@/assets/images/icons/Instagram.svg'
import image1 from '@/assets/images/instagram/ig_1.png'
import image2 from '@/assets/images/instagram/ig_2.png'
import image3 from '@/assets/images/instagram/ig_3.png'
import image4 from '@/assets/images/instagram/ig_4.png'
import { PostDataProps } from "@/types/instagram";
import Post from "./Post";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import CarouselButton from "./CarouselButton";

const instagramDummyImages: PostDataProps[] = [
  {
    id: 1,
    image: image2
  },
  {
    id: 2,
    image: image1
  },
  {
    id: 3,
    image: image3
  },
  {
    id: 4,
    image: image4
  },
  {
    id: 5,
    image: image1
  },
  {
    id: 6,
    image: image3
  },
  {
    id: 7,
    image: image4
  },
  {
    id: 8,
    image: image2
  }

]

const InstagramSection = () => {
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
          Live från havet
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