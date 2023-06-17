'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import LineGradient from "../components/LineGradient"
import Maps from "@/components/Location"
import Plan from "@/components/Plan"
import Timeline from "@/components/Timeline"
import ForBuilding from "@/components/ForBuidling"
import { motion } from "framer-motion"
import { playfair } from "@/utils/fonts"
import PlanButtons from "@/components/PlanButtons"
import useMediaQuery from "@/hooks/useMediaQuery"
export const revalidate = 0; // revalidate this page every 60 seconds

export default function Home() {
    const isDesktop = useMediaQuery("(min-width: 1000px)");
    return (
        <div>
            {/* WELCOME VIDEO */}
            <div>
                <video className="w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} >
                    <source src="/video.MP4" type="video/MP4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <LineGradient></LineGradient>

            {/* WELCOME TEXT AND IMG */}
            <div className="lg:flex lg:justify-between lg:items-center">
                {/* WELCOME TEXT */}
                <motion.div 
                    className="lg:basis-[30%]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className={`${playfair.className} p-10`}>
                        <div className="py-5 text-ixora-orange text-left text-2xl font-extrabold">Ixora Luxury Residence: </div>
                        <div className="text-justify text-white">Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Ixora Residence се състои от 13 просторни апартамента и 17 гаража. Апартаментите разкриват чудесна панорамна гледка към София и Витоша, а сградата разполага с напълно оборудвани спа център и фитнес зала за ексклузивно ползване от бъдещите обитатели. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.</div>
                    </div>
                </motion.div>

                {/* WELCOME IMAGE */}
                <motion.div 
                    className="lg:basis-[70%]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="p-5 md:p-10 ">
                        {/* Parallax effect on hover */}
                        <div className="w-full h-fit overflow-hidden mx-auto">

                            <Image
                                className="transition-transform duration-700 ease-in-out hover:scale-150"
                                loader={imageLoader}
                                src="/ixora-welcome.webp"
                                width={5000}
                                height={2813}
                                alt="Image"
                            />
                        </div>


                    </div>
                </motion.div>
            </div>
            <LineGradient></LineGradient>


            {/* TIMELINE */}
            <Timeline></Timeline>
            <LineGradient></LineGradient>

            
            {/* DESCRIPTION */}
            <ForBuilding></ForBuilding>
            <LineGradient></LineGradient>

            {/* PLAN */}
            <div className="flex justify-center items-center">
                <Plan
                    penthouse={'/'}
                    thirdF={'/'}
                    secondF={'/'}
                    firstF={'/'}
                    parking={'/'}
                >
                </Plan>
            </div>
            <LineGradient></LineGradient>

            {/* LOCATION */}
            <>
                <Maps></Maps>
            </>
            <LineGradient></LineGradient>
        </div>
    )
}
