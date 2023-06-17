'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Description() {

    return (
        <>

            {/* DESCRIPTION */}

            <ForBuilding></ForBuilding>

            {/* Container for timeline */}
            <Timeline></Timeline>

            {/* Container for actual building footage */}
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

            {/* Container for Parallax Image */}
            <>
                <div className="bg-gradient-ixora py-4">
                    <div className="text-white text-center text-2xl font-bold">Ixora Luxury Residence</div>
                </div>
                <div className="bg-[url('../public/ixora-description.webp')] h-60 bg-center bg-cover bg-no-repeat bg-white md:min-h-[32rem] md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
                </div>
            </>

            {/* Container for Location*/}
            <div>
                <div className="bg-gradient-ixora py-4">
                    <div className="text-white text-center text-2xl font-bold">Местоположение</div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.0903967890047!2d23.32379292250246!3d42.62140208151248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83e41f60d98d%3A0x74c031759acb7205!2z0YPQuy4g4oCe0J_QuNGA0LjQvdGB0LrQuCDQtdC00LXQu9Cy0LDQudGB4oCcIDMsIDE0MTUg0LIu0LcuINCh0LjQvNC10L7QvdC-0LLQviAtINCU0YDQsNCz0LDQu9C10LLRhtC4LCDQodC40LzQtdC-0L3QvtCy0L4t0JTRgNCw0LPQsNC70LXQstGG0Lg!5e1!3m2!1sbg!2sbg!4v1684919335340!5m2!1sbg!2sbg"
                    width="100%"
                    height="400"
                ></iframe>
            </div>

        </>
    )
}
