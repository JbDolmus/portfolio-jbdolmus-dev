import Avatar from "@/components/Avatar";
import ContainerPage from "@/components/ContainerPage";
import CounterServices from "@/components/CounterServices";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/TransitionPage";
import { getTranslations } from "next-intl/server";

export default async function AboutMePage() {

    const t = await getTranslations('AboutMePage');

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">{t('title1')} {' '}
                    <span className="font-bold text-orange-400">{t('title2')}</span>
                </h1>

                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </>
    )
}
