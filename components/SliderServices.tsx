"use client"

import { serviceData } from "@/data"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function SliderServices() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            freeMode={true}
            loop={true}
            navigation={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="h-[300px] md:h-[420px] w-[270px] md:w-[350px] lg:w-[550px]"
        >

            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-8 h-auto md:h-[380px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-orange-400 border-2">
                        <div className="mb-4 text-4xl text-orange-400">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
