'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import LineGradient from "../components/LineGradient"
import Maps from "@/components/Location"
import Plan from "@/components/Plan"
import Timeline from "@/components/Timeline"
import ForBuilding from "@/components/ForBuidling"
export const revalidate = 0; // revalidate this page every 60 seconds



export default function Home() {

    return (
        <div>
            {/* WELCOME VIDEO */}
            <div>
                <video className="w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} >
                    <source src="/video.MP4" type="video/MP4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* WELCOME TEXT */}
            <>
                <div className="p-10 bg-gradient-to-l from-orange-100 from-0% via-orange-50 via-20% to-orange-100 to-90% md:px-32 lg:px-40">
                    <LineGradient></LineGradient>
                    <div className="py-5 text-ixora-orange text-left text-2xl font-extrabold">Ixora Luxury Residence: </div>
                    <div className="text-justify text-gray-700">Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Ixora Residence се състои от 13 просторни апартамента и 17 гаража. Апартаментите разкриват чудесна панорамна гледка към София и Витоша, а сградата разполага с напълно оборудвани спа център и фитнес зала за ексклузивно ползване от бъдещите обитатели. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.</div>
                    <LineGradient></LineGradient>

                </div>
            </>

            {/* WELCOME IMAGE */}
            <div className="relative">

                <Image
                    loader={imageLoader}
                    src="/ixora-welcome.webp"
                    width={5000}
                    height={2813}
                    alt="Image"
                />

                <div className="absolute bottom-[10%] left-0 w-full h-full flex items-end justify-center ">
                    <div className="text-white text-center text-2xl md:text-4xl lg:text-6xl font-bold">
                        Вашият луксозен нов дом
                    </div>
                </div>
            </div>

            {/* TIMELINE */}
            <Timeline></Timeline>

            {/* DESCRIPTION */}
            <ForBuilding></ForBuilding>

            {/* PLAN */}
            <>
                <div className='bg-ixora-orange'>
                    <Link href={'/apartments'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">План</div></Link>
                </div>
                <Plan
                    penthouse={'/'}
                    thirdF={'/'}
                    secondF={'/'}
                    firstF={'/'}
                    parking={'/'}
                >
                </Plan>
            </>

            {/* LOCATION */}
            <>
                <div className="bg-ixora-orange">
                    <Link href={'/contacts'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">Местоположение</div></Link>
                </div>
                <Maps></Maps>
            </>
        </div>
    )
}
