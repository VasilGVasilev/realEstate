"use client";

import Link from "next/link";
// import Image from "next/image";
// import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import BuildingProcess from "@/components/BuildingProcess";

const imagesOutside = [
    {
        original: "/gallery/outside/image0.jpeg",
        thumbnail: "/gallery/outside/image0.jpeg",
    },
    {
        original: "/gallery/outside/image1.jpeg",
        thumbnail: "/gallery/outside/image1.jpeg",
    },
    {
        original: "/gallery/outside/image2.jpeg",
        thumbnail: "/gallery/outside/image2.jpeg",
    },
    {
        original: "/gallery/outside/image3.jpeg",
        thumbnail: "/gallery/outside/image3.jpeg",
    },
    {
        original: "/gallery/outside/image4.jpeg",
        thumbnail: "/gallery/outside/image4.jpeg",
    },
    {
        original: "/gallery/outside/image5.jpeg",
        thumbnail: "/gallery/outside/image5.jpeg",
    },
    {
        original: "/gallery/outside/image6.jpeg",
        thumbnail: "/gallery/outside/image6.jpeg",
    },
    {
        original: "/gallery/outside/image7.jpeg",
        thumbnail: "/gallery/outside/image7.jpeg",
    },
    {
        original: "/gallery/outside/image8.jpeg",
        thumbnail: "/gallery/outside/image8.jpeg",
    },
];

const imagesInside = [
    {
        original: "/gallery/apartments/image0.jpeg",
        thumbnail: "/gallery/apartments/image0.jpeg",
    },
    {
        original: "/gallery/apartments/image1.jpeg",
        thumbnail: "/gallery/apartments/image1.jpeg",
    },
    {
        original: "/gallery/apartments/image2.jpeg",
        thumbnail: "/gallery/apartments/image2.jpeg",
    },
    {
        original: "/gallery/apartments/image3.jpeg",
        thumbnail: "/gallery/apartments/image3.jpeg",
    },
    {
        original: "/gallery/apartments/image4.jpeg",
        thumbnail: "/gallery/apartments/image4.jpeg",
    },
    {
        original: "/gallery/apartments/image5.jpeg",
        thumbnail: "/gallery/apartments/image5.jpeg",
    },
    {
        original: "/gallery/apartments/image6.jpeg",
        thumbnail: "/gallery/apartments/image6.jpeg",
    },
    {
        original: "/gallery/apartments/image7.jpeg",
        thumbnail: "/gallery/apartments/image7.jpeg",
    },
    {
        original: "/gallery/apartments/image8.jpeg",
        thumbnail: "/gallery/apartments/image8.jpeg",
    },
];

const imagesSpa = [
    {
        original: "/gallery/spa/image0.jpeg",
        thumbnail: "/gallery/spa/image0.jpeg",
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
    {
        original: "/gallery/spa/image6.jpeg",
        thumbnail: "/gallery/spa/image6.jpeg",
    },
    {
        original: "/gallery/spa/image7.jpeg",
        thumbnail: "/gallery/spa/image7.jpeg",
    },
    {
        original: "/gallery/spa/image8.jpeg",
        thumbnail: "/gallery/spa/image8.jpeg",
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
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Екстериор</div>
            </motion.div>

            <BuildingProcess images={imagesOutside}></BuildingProcess>
            
            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Интериор</div>
            </motion.div>

            <BuildingProcess images={imagesInside}></BuildingProcess>


            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">СПА</div>
            </motion.div>

            <BuildingProcess images={imagesSpa}></BuildingProcess>
                </div>
            </div>
        </>
    );
}
