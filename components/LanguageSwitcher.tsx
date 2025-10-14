"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useTransition } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === "es" ? "en" : "es";
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <button
                        onClick={toggleLanguage}
                        disabled={isPending}
                        className="relative flex items-center justify-between w-14 h-7 rounded-full bg-transparent border border-orange-300 backdrop-blur-sm px-1 transition-all duration-300 hover:bg-orange-400/30 cursor-pointer"
                    >
                        <span
                            className={`px-1 text-xs font-semibold transition-all duration-300 ${locale === "es" && "opacity-100 text-white"
                                }`}
                        >
                            ES
                        </span>
                        <span
                            className={`px-1 text-xs font-semibold transition-all duration-300 ${locale === "en" && "opacity-100 text-white"
                                }`}
                        >
                            EN
                        </span>

                        <span
                            className={`absolute w-5 h-5 bg-orange-500 rounded-full shadow-md transition-all duration-300 ${locale === "es" ? "left-1" : "right-1"
                                }`}
                        />
                    </button>
                </Tooltip.Trigger>
                <Tooltip.Content
                    side="top"
                    sideOffset={6}
                    className="bg-orange-500/90 text-white text-xs px-3 py-1 rounded-md shadow-md select-none"
                >
                    <div className="flex flex-col items-center">
                        <span className="font-semibold">
                            {locale === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
                        </span>
                    </div>
                    <Tooltip.Arrow className="fill-orange-500/90" />
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
