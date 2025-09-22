import AvatarPortfolio from "@/components/AvatarPortfolio";
import CircleImage from "@/components/CircleImage";
import ContainerPage from "@/components/ContainerPage";
import PortfolioBox from "@/components/PortfolioBox";
import TransitionPage from "@/components/TransitionPage";
import { dataPortfolio } from "@/data";


export default function PortfolioPage() {
    return (
        <ContainerPage>
            <TransitionPage />
            {/* <AvatarPortfolio /> */}
            <CircleImage />

            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    Mis últimos {' '}
                    <span className="font-bold text-orange-400">trabajos realizados</span>
                </h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    )
}
