"use client";

import Link from "next/link";
// import Image from "next/image";
// import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import BuildingProcess from "@/components/BuildingProcess";
import { useEffect, useState } from "react";

const imagesExteriorUpdated = [];

const imagesBeforeAct16 = [
    {
        original: "/buildProcess/pre-act16/image0.webp",
        thumbnail: "/buildProcess/pre-act16/image0.webp",
    },
    {
        original: "/buildProcess/pre-act16/image1.webp",
        thumbnail: "/buildProcess/pre-act16/image1.webp",
    },
    {
        original: "/buildProcess/pre-act16/image2.webp",
        thumbnail: "/buildProcess/pre-act16/image2.webp",
    },
    {
        original: "/buildProcess/pre-act16/image3.webp",
        thumbnail: "/buildProcess/pre-act16/image3.webp",
    },
    {
        original: "/buildProcess/pre-act16/image4.webp",
        thumbnail: "/buildProcess/pre-act16/image4.webp",
    },
    {
        original: "/buildProcess/pre-act16/image5.webp",
        thumbnail: "/buildProcess/pre-act16/image5.webp",
    },
];

const imagesExterior = [
    {
        original: "/gallery/exterior/image0.webp",
        thumbnail: "/gallery/exterior/image0.webp",
    },
    {
        original: "/gallery/exterior/image1.webp",
        thumbnail: "/gallery/exterior/image1.webp",
    },
    {
        original: "/gallery/exterior/image2.webp",
        thumbnail: "/gallery/exterior/image2.webp",
    },
    {
        original: "/gallery/exterior/image3.webp",
        thumbnail: "/gallery/exterior/image3.webp",
    },
    {
        original: "/gallery/exterior/image4.webp",
        thumbnail: "/gallery/exterior/image4.webp",
    },
    {
        original: "/gallery/exterior/image5.webp",
        thumbnail: "/gallery/exterior/image5.webp",
    },
    {
        original: "/gallery/exterior/image6.webp",
        thumbnail: "/gallery/exterior/image6.webp",
    },
    {
        original: "/gallery/exterior/image7.webp",
        thumbnail: "/gallery/exterior/image7.webp",
    },
    {
        original: "/gallery/exterior/image8.webp",
        thumbnail: "/gallery/exterior/image8.webp",
    },
];

imagesExteriorUpdated.push(...imagesBeforeAct16, ...imagesExterior);

const imagesApartments = [
    {
        original: "/gallery/apartments/image000.webp",
        thumbnail: "/gallery/apartments/image000.webp",
    },
    {
        original: "/gallery/apartments/image001.webp",
        thumbnail: "/gallery/apartments/image001.webp",
    },
    {
        original: "/gallery/apartments/image002.webp",
        thumbnail: "/gallery/apartments/image002.webp",
    },
    {
        original: "/gallery/apartments/image003.webp",
        thumbnail: "/gallery/apartments/image003.webp",
    },
    {
        original: "/gallery/apartments/image004.webp",
        thumbnail: "/gallery/apartments/image004.webp",
    },
    {
        original: "/gallery/apartments/image005.webp",
        thumbnail: "/gallery/apartments/image005.webp",
    },
    {
        original: "/gallery/apartments/image006.webp",
        thumbnail: "/gallery/apartments/image006.webp",
    },
    {
        original: "/gallery/apartments/image007.webp",
        thumbnail: "/gallery/apartments/image007.webp",
    },
    {
        original: "/gallery/apartments/image008.webp",
        thumbnail: "/gallery/apartments/image008.webp",
    },
];

const imagesInterior = [
    {
        original: "/gallery/interior/image0.webp",
        thumbnail: "/gallery/interior/image0.webp",
    },
    {
        original: "/gallery/interior/image1.webp",
        thumbnail: "/gallery/interior/image1.webp",
    },
    {
        original: "/gallery/interior/image2.webp",
        thumbnail: "/gallery/interior/image2.webp",
    },
    {
        original: "/gallery/interior/image3.webp",
        thumbnail: "/gallery/interior/image3.webp",
    },
    {
        original: "/gallery/interior/image4.webp",
        thumbnail: "/gallery/interior/image4.webp",
    },
    {
        original: "/gallery/interior/image5.webp",
        thumbnail: "/gallery/interior/image5.webp",
    },
];

const imagesSpa = [
    {
        original: "/gallery/spa/image00.webp",
        thumbnail: "/gallery/spa/image00.webp",
    },
    {
        original: "/gallery/spa/image1.webp",
        thumbnail: "/gallery/spa/image1.webp",
    },
    {
        original: "/gallery/spa/image2.webp",
        thumbnail: "/gallery/spa/image2.webp",
    },
    {
        original: "/gallery/spa/image3.webp",
        thumbnail: "/gallery/spa/image3.webp",
    },
    {
        original: "/gallery/spa/image4.webp",
        thumbnail: "/gallery/spa/image4.webp",
    },
    {
        original: "/gallery/spa/image5.webp",
        thumbnail: "/gallery/spa/image5.webp",
    },
];

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Gallery() {


    return (
        <>
            <div>
                {/* Container for images */}
                <div className="bg-ixora-dark">
                    <motion.div
                        className="bg-gradient-ixora py-4"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <div className="text-white text-center text-3xl font-bold">
                            Апартаменти
                        </div>
                    </motion.div>

                    <BuildingProcess
                        images={imagesApartments}
                    
                    ></BuildingProcess>
                    <motion.div
                        className="bg-gradient-ixora py-4"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <div className="text-white text-center text-3xl font-bold">
                            Интериор
                        </div>
                    </motion.div>

                    <BuildingProcess images={imagesInterior}></BuildingProcess>

                    <motion.div
                        className="bg-gradient-ixora py-4"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <div className="text-white text-center text-3xl font-bold">
                            Екстериор
                        </div>
                    </motion.div>

                    <BuildingProcess images={imagesExteriorUpdated}></BuildingProcess>
                    <motion.div
                        className="bg-gradient-ixora py-4"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <div className="text-white text-center text-3xl font-bold">
                            СПА
                        </div>
                    </motion.div>

                    <BuildingProcess images={imagesSpa}></BuildingProcess>
                </div>
            </div>
        </>
    );
}
