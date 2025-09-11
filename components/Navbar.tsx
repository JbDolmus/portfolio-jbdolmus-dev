"use client"

import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TransitionComponent from "./TransitionComponent";

export default function Navbar() {
    const router = usePathname();

    return (
        <TransitionComponent position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                {itemsNavbar.map((item) => (
                    <div key={item.id}
                        className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-orange-400 ${router === item.link && 'bg-orange-400'}`}
                    >
                        <Link href={item.link}>{item.icon}</Link>
                    </div>
                ))}
            </nav>
        </TransitionComponent>
    )
}
