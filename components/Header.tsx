import { Link } from "@/src/i18n/routing"
import TransitionComponent from "./TransitionComponent"
import { socialNetworks } from "@/data"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
    return (
        <TransitionComponent position="bottom" className="absolute z-40 inline-block w-full top-0 md:top-10 px-20">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            JBDolmus
                            <span className="text-orange-400">Dev</span>
                        </h1>

                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link key={id} href={src} target="_blank" className="transition-all duration-300 hover:text-orange-400">
                                {logo}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>
        </TransitionComponent>
    )
}
