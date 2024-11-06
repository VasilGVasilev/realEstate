"use client";

import Link from "next/link";
// import Image from "next/image";
// import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import BuildingProcess from "@/components/BuildingProcess";

const imagesExterior = [
    {
        original: "/gallery/exterior/image0.jpeg",
        thumbnail: "/gallery/exterior/image0.jpeg",
    },
    {
        original: "/gallery/exterior/image1.jpeg",
        thumbnail: "/gallery/exterior/image1.jpeg",
    },
    {
        original: "/gallery/exterior/image2.jpeg",
        thumbnail: "/gallery/exterior/image2.jpeg",
    },
    {
        original: "/gallery/exterior/image3.jpeg",
        thumbnail: "/gallery/exterior/image3.jpeg",
    },
    {
        original: "/gallery/exterior/image4.jpeg",
        thumbnail: "/gallery/exterior/image4.jpeg",
    },
    {
        original: "/gallery/exterior/image5.jpeg",
        thumbnail: "/gallery/exterior/image5.jpeg",
    },
    {
        original: "/gallery/exterior/image6.jpeg",
        thumbnail: "/gallery/exterior/image6.jpeg",
    },
    {
        original: "/gallery/exterior/image7.jpeg",
        thumbnail: "/gallery/exterior/image7.jpeg",
    },
    {
        original: "/gallery/exterior/image8.jpeg",
        thumbnail: "/gallery/exterior/image8.jpeg",
    },
];

const imagesApartments = [
    {
        original: "/gallery/apartments/image000.jpeg",
        thumbnail: "/gallery/apartments/image000.jpeg",
    },
    {
        original: "/gallery/apartments/image001.jpeg",
        thumbnail: "/gallery/apartments/image001.jpeg",
    },
    {
        original: "/gallery/apartments/image002.jpeg",
        thumbnail: "/gallery/apartments/image002.jpeg",
    },
    {
        original: "/gallery/apartments/image003.jpeg",
        thumbnail: "/gallery/apartments/image003.jpeg",
    },
    {
        original: "/gallery/apartments/image004.jpeg",
        thumbnail: "/gallery/apartments/image004.jpeg",
    },
    {
        original: "/gallery/apartments/image005.jpeg",
        thumbnail: "/gallery/apartments/image005.jpeg",
    },
    {
        original: "/gallery/apartments/image006.jpeg",
        thumbnail: "/gallery/apartments/image006.jpeg",
    },
    {
        original: "/gallery/apartments/image007.jpeg",
        thumbnail: "/gallery/apartments/image007.jpeg",
    },
    {
        original: "/gallery/apartments/image008.jpeg",
        thumbnail: "/gallery/apartments/image008.jpeg",
    },
];

const imagesInterior = [
    {
        original: "/gallery/interior/image0.jpeg",
        thumbnail: "/gallery/interior/image0.jpeg",
    },
    {
        original: "/gallery/interior/image1.jpeg",
        thumbnail: "/gallery/interior/image1.jpeg",
    },
    {
        original: "/gallery/interior/image2.jpeg",
        thumbnail: "/gallery/interior/image2.jpeg",
    },
    {
        original: "/gallery/interior/image3.jpeg",
        thumbnail: "/gallery/interior/image3.jpeg",
    },
    {
        original: "/gallery/interior/image4.jpeg",
        thumbnail: "/gallery/interior/image4.jpeg",
    },
    {
        original: "/gallery/interior/image5.jpeg",
        thumbnail: "/gallery/interior/image5.jpeg",
    },
];

const imagesSpa = [
    {
        original: "/gallery/spa/image00.jpeg",
        thumbnail: "/gallery/spa/image00.jpeg",
    },
    {
        original: "/gallery/spa/image1.jpeg",
        thumbnail: "/gallery/spa/image1.jpeg",
    },
    {
        original: "/gallery/spa/image2.jpeg",
        thumbnail: "/gallery/spa/image2.jpeg",
    },
    {
        original: "/gallery/spa/image3.jpeg",
        thumbnail: "/gallery/spa/image3.jpeg",
    },
    {
        original: "/gallery/spa/image4.jpeg",
        thumbnail: "/gallery/spa/image4.jpeg",
    },
    {
        original: "/gallery/spa/image5.jpeg",
        thumbnail: "/gallery/spa/image5.jpeg",
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

                    <BuildingProcess images={imagesExterior}></BuildingProcess>
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
