"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Introduction() {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="500" height="500" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">El código es creatividad hecha realidad: <br />
                        <TypeAnimation
                            sequence={[
                                'puedes innovar',
                                1000,
                                'puedes crear',
                                1000,
                                'puedes impactar',
                                1000,
                                'puedes transformar',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-orange-400"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como Desarrollador Full Stack construyo aplicaciones web completas, escalables y centradas en el usuario. Transformo ideas en soluciones digitales innovadoras, combinando interfaces intuitivas con arquitecturas sólidas que generan impacto real y aportan valor a cada proyecto.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-orange-400 border-orange-400 rounded-xl hover:shadow-xl hover:shadow-orange-400" >
                            Contáctame
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
