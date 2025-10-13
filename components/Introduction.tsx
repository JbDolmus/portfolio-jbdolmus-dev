"use client"

import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Introduction() {

    const t = useTranslations('Introduction');
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="400" height="400" alt="Home" className="hidden md:inline-block"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">{t('title')}<br />
                        <TypeAnimation
                            sequence={[
                                t('subtitle1'),
                                1000,
                                t('subtitle2'),
                                1000,
                                t('subtitle3'),
                                1000,
                                t('subtitle4'),
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-orange-400"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        {t('description')}
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            {t('titleLinkProject')}
                        </a>
                        <Link href="mailto:jbautista.dormo.corea@gmail.com?subject=Consulta%20Profesional&body=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-orange-400 border-orange-400 rounded-xl hover:shadow-xl hover:shadow-orange-400"
                            target="_blank"
                        >
                            {t('titleLinkContact')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
