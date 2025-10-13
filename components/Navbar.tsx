"use client";

import { itemsNavbar } from "@/data";
import { Link, usePathname } from "@/src/i18n/routing";
import TransitionComponent from "./TransitionComponent";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const router = usePathname();
    const t = useTranslations('navbar');

    return (
        <TransitionComponent
            position="right"
            className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
        >
            <Tooltip.Provider delayDuration={100}>
                <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
                    {itemsNavbar.map((item) => (
                        <Tooltip.Root key={item.id}>
                            <Tooltip.Trigger asChild>
                                <div
                                    className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-orange-400 ${router === item.link && "bg-orange-400"
                                        }`}
                                >
                                    <Link href={item.link}>{item.icon}</Link>
                                </div>
                            </Tooltip.Trigger>

                            <Tooltip.Content
                                side="top"
                                sideOffset={6}
                                className="bg-orange-500/90 text-white text-xs px-3 py-1 rounded-md shadow-md select-none"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="font-semibold">
                                        {t(item.titleKey)}
                                    </span>
                                </div>
                                <Tooltip.Arrow className="fill-orange-500/90" />
                            </Tooltip.Content>
                        </Tooltip.Root>
                    ))}
                </nav>
            </Tooltip.Provider>
        </TransitionComponent>
    );
}
