"use client";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "../utils/imgLoader";
import LineGradient from "../components/LineGradient";
import Maps from "@/components/Location";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import { motion } from "framer-motion";
import PromptToPlan from "@/components/PromptToPlan";
import WelcomeText from "@/components/WelcomeText";
import { noto, playfair } from "@/utils/fonts";
import { useInView } from "react-intersection-observer";

export const revalidate = 0; // revalidate this page every 60 seconds
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const containerGalleryPrompt = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div>
            {/* WELCOME VIDEO */}

            <div className="relative">
                <video
                    className="w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src="/sofia-panorama.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-[15%] left-0 w-full h-full flex items-end justify-center ">
                    <motion.div
                        className={`${playfair.className} welcomeTextOnImg text-white text-center text-2xl md:text-4xl lg:text-6xl xl:text-[80px]`}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.span variants={letterVariant}>В</motion.span>
                        <motion.span variants={letterVariant}>а</motion.span>
                        <motion.span variants={letterVariant}>ш</motion.span>
                        <motion.span variants={letterVariant}>и</motion.span>
                        <motion.span variants={letterVariant}>я</motion.span>
                        <motion.span variants={letterVariant}>т</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>л</motion.span>
                        <motion.span variants={letterVariant}>у</motion.span>
                        <motion.span variants={letterVariant}>к</motion.span>
                        <motion.span variants={letterVariant}>с</motion.span>
                        <motion.span variants={letterVariant}>о</motion.span>
                        <motion.span variants={letterVariant}>з</motion.span>
                        <motion.span variants={letterVariant}>е</motion.span>
                        <motion.span variants={letterVariant}>н</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>н</motion.span>
                        <motion.span variants={letterVariant}>о</motion.span>
                        <motion.span variants={letterVariant}>в</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>д</motion.span>
                        <motion.span variants={letterVariant}>о</motion.span>
                        <motion.span variants={letterVariant}>м</motion.span>
                    </motion.div>
                </div>
            </div>
            <LineGradient></LineGradient>

            {/* WELCOME TEXT AND IMG */}
            <div className="lg:flex lg:justify-between lg:items-center lg:p-10 bg-orange-50">
                {/* WELCOME TEXT */}
                <div className="lg:basis-[30%]">
                    <div className={` p-10`}>
                        <motion.div
                            className="py-5 text-ixora-orange text-left text-3xl font-extrabold"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            Ixora Luxury Residence:{" "}
                        </motion.div>
                        <WelcomeText></WelcomeText>
                    </div>
                </div>

                {/* WELCOME IMAGE */}
                <motion.div
                    className="lg:basis-[70%] "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div
                        className="p-5 md:p-10 relative before:absolute before:top-[3%] before:left-[1%]
                    before:w-full before:h-full before:border-l-2 before:border-t-2 before:border-[#f83600] before:z-10"
                    >
                        {/* Parallax effect on hover */}
                        <div className="relative w-full h-fit overflow-hidden mx-auto z-20 group">
                            <Link href={"/gallery"}>
                                <div className="relative">
                                    <Image
                                        className="transition-transform duration-700 ease-in-out group-hover:scale-125 blur-sm group-hover:blur-none"
                                        loader={imageLoader}
                                        src="/ixora-welcome.webp"
                                        width={5000}
                                        height={2813}
                                        alt="Image"
                                    />
                                    {/* Overlay text */}

                                    <motion.div
                                        className={`absolute inset-0 flex items-center justify-center ${noto.className} welcomeTextOnImg text-white text-center text-[80px] xl:text-[120px]`}
                                        variants={containerGalleryPrompt}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <motion.span variants={letterVariant}>
                                            Г
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            а
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            л
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            е
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            р
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            и
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            я
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            <LineGradient></LineGradient>

            {/* TIMELINE */}
            <Timeline></Timeline>
            <LineGradient></LineGradient>
            <div ref={ref}>
                {inView && (
                    <video
                        className="w-full h-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    >
                        <source src="/vitosha-view.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <LineGradient></LineGradient>

            {/* DESCRIPTION */}
            <ForBuilding></ForBuilding>
            <LineGradient></LineGradient>

            {/* PROMPT IMG TO PLAN */}
            <Link
                href={"/apartments"}
                className={`flex justify-center items-center text-center py-5 lg:py-0 lg:pt-10 text-white text-lg sm:text-3xl hover:scale-110`}
            >
                Изберете Вашия луксозен нов дом сега.
            </Link>
            <PromptToPlan></PromptToPlan>
            <LineGradient></LineGradient>

            {/* LOCATION */}
            <>
                <Maps></Maps>
            </>
            <LineGradient></LineGradient>
        </div>
    );
}
