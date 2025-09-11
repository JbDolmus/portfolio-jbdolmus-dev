"use client"
import TransitionPage from '@/components/TransitionPage'
import { dataTestimonials } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function TestimonialsPage() {
    return (
        <>
            <TransitionPage />

            <div className='flex flex-col justify-center h-lvh'>
                <h1 className='text-2xl leading-tight text-center md:text-4xl md:mb-5'>
                    Algunos cometarios
                    <span className='block font-bold text-orange-400'>de nuestros clientes</span>
                </h1>
                <div className='flex items-center justify-center'>
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                        >
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-5 text-center">
                                        {description}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
