"use client"
import Image from "next/image";
import TransitionComponent from "./TransitionComponent";


export default function AvatarPortfolio() {
  return (
    <TransitionComponent position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
        <Image src="/avatar-works.png" width={300} height={300} className="w-full h-full" alt="Avatar Portfolio" />
    </TransitionComponent>
  )
}
