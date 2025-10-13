"use client"

import TransitionPage from '@/components/TransitionPage'
import { dataTechnologies } from '@/data'
import Image from 'next/image'
import { useRef } from 'react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from "swiper";
import { useTranslations } from 'next-intl'

export default function TechnologiesPage() {

    const t = useTranslations('TechnologiesPage');

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (
        s: SwiperType,
        time: number,
        progress: number
    ) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty("--progress", String(1 - progress));
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <>
            <TransitionPage />

            <div className='flex flex-col justify-center h-lvh'>
                <h1 className='text-2xl leading-tight text-center md:text-4xl md:mb-5'>
                    {t('title1')}
                    <span className='block font-bold text-orange-400'> {t('title2')} </span>
                </h1>
                <div className='flex items-center justify-center mt-4'>
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            freeMode={true}
                            loop={true}
                            navigation={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                        >
                            {dataTechnologies.map(({ id, nameKey, descriptionKey, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={nameKey} width="100" height="100" className="mx-auto rounded-full bg-white" />
                                    <h4 className='text-center'>{nameKey}</h4>
                                    <div className="mt-5 text-center">
                                        {t(descriptionKey)}
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
