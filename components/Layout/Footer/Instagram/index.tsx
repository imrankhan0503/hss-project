'use client'

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import InstagramLogo from '@/assets/images/icons/Instagram.svg'
import Post from "./Post";
import CarouselButton from "./CarouselButton";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";
import { PostDataProps } from "@/types/instagram";

const FEED_URL = process.env.NEXT_PUBLIC_BEHOLD_DUMMY_API!

const InstagramSection = () => {
  const lang = useLang()

  const [posts, setPosts] = useState<PostDataProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(false)
        const res = await fetch(FEED_URL)
        if (!res.ok) {
          throw new Error('Failed to fetch feed')
        }
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (err) {
        console.error('Instagram fetch error:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  //LOADING  and ERROR states
  if (loading) {
    return (
      <section className="w-full px-6 py-12 md:px-[70px] text-center">
        <p>Loading instagram posts..</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="w-full px-6 py-12 md:px-[70px] text-center">
        <p>Instagram feed temporarily unavailable.</p>
      </section>
    )
  }

  return (
    <section className="w-full px-6 py-12 md:px-[70px]">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
        <Image src={InstagramLogo} alt="instagram logo" className="w-9 md:w-12 h-9 md:h-12" />
        <h2 className="text-xl md:text-2xl font-bold text-primary">
          {t('homepage.instagramText', lang)}
        </h2>
      </div>
      {posts.length > 0 &&
        (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {posts.map((p) => (
                  <Post key={p.id} {...p} />
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8">
              {emblaApi?.scrollSnapList().map((_, index) => (
                <CarouselButton
                  key={index}
                  index={index}
                  imageIndex={selectedIndex}
                  onChange={(i) => emblaApi.scrollTo(i)}
                />
              ))}
            </div>
          </>
        )
      }
    </section>
  )
}

export default InstagramSection