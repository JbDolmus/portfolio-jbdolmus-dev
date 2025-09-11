import Avatar from "@/components/Avatar";
import ContainerPage from "@/components/ContainerPage";
import CounterServices from "@/components/CounterServices";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/TransitionPage";

export default function AboutMePage() {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi {' '}
                    <span className="font-bold text-orange-400">trayectoria profesional</span>
                </h1>

                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </>
    )
}
