import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        titleKey: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    }
}

export default async function PortfolioBox(props: PortfolioBoxProps) {

    const t = await getTranslations("portfolio");

    const { data } = props;
    const { titleKey, image, urlGithub, urlDemo } = data;

    return (
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
                {t(titleKey)}
            </h3>
            <Image src={image} alt="Image project" width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto" />
            <div className="flex gap-5 mt-5">
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                    GitHub
                </Link>
                {urlDemo !== "#!" &&
                    <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-orange-400 hover:bg-orange-400/80">
                        Demo
                    </Link>
                }
            </div>
        </div>
    )
}
