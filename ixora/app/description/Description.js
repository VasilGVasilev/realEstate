'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import Maps from "@/components/Location";

export const revalidate = 0; // revalidate this page every 60 seconds


export default function Description() {

    return (
        <>

            {/* DESCRIPTION */}
            <div className="bg-gradient-ixora py-4">
                <div className="text-white text-center text-3xl font-bold">Описание</div>
            </div>
            <ForBuilding></ForBuilding>

            {/* TIMELINE */}
            <div className="bg-gradient-ixora py-4">
                <div className="text-white text-center text-3xl font-bold">Етапи</div>
            </div>
            <Timeline></Timeline>

            {/* BUILDING PROGRESS */}
            <div>
                <div className="bg-gradient-ixora py-4">
                    <div className="text-white text-center text-2xl font-bold">Етап на проекта - Акт 14</div>
                </div>
                <div className="flex-col p-10 bg-gray-900">
                    <div className="pb-10 flex justify-center transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <Image
                            loader={imageLoader}
                            src="/buildProcessOne.webp"
                            alt="Build Process"
                            width={1310}
                            height={887}
                        >
                        </Image>
                    </div>

                    <div className="pb-10 flex justify-center transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" >
                        <Image
                            loader={imageLoader}
                            src="/buildProcessTwo.webp"
                            alt="Build Process"
                            width={1600}
                            height={1200}
                        >
                        </Image>
                    </div>
                    <div className="flex justify-center transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <Image
                            loader={imageLoader}
                            src="/buildProcessThree.webp"
                            alt="Build Process"
                            width={1600}
                            height={1200}
                        >
                        </Image>
                    </div>
                </div>
            </div>

            {/* AKT 16 */}
            <>
                <div className="bg-gradient-ixora py-4">
                    <div className="text-white text-center text-2xl font-bold">Ixora Luxury Residence</div>
                </div>
                <div className="bg-[url('../public/ixora-description.webp')] h-60 bg-center bg-cover bg-no-repeat bg-white md:min-h-[32rem] md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
                </div>
            </>

            {/* LOCATION*/}
            <div>
                <div className="bg-gradient-ixora py-4">
                    <div className="text-white text-center text-2xl font-bold">Местоположение</div>
                </div>
                <Maps></Maps>
            </div>

        </>
    )
}
