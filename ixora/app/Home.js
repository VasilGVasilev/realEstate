'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "../utils/imgLoader"
import LineGradient from "../components/LineGradient"
import Maps from "@/components/Location"
import Plan from "@/components/Plan"
export const revalidate = 0; // revalidate this page every 60 seconds



export default function Home() {

  return (
    <div>
      <div>
        <video className="w-full h-full" autoPlay={true} muted={true} loop={true} playsInline={true} >
          <source src="/video.MP4" type="video/MP4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description container */}
      <div className="">
        <div className="p-10 bg-gradient-to-l from-orange-100 from-0% via-orange-50 via-20% to-orange-100 to-90% md:px-32 lg:px-40">
          <LineGradient></LineGradient>
          <div className="py-5 text-ixora-orange text-left text-2xl font-extrabold">Ixora Luxury Residence: </div>
          <div className="text-justify text-gray-700">Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Ixora Residence се състои от 13 просторни апартамента и 17 гаража. Апартаментите разкриват чудесна панорамна гледка към София и Витоша, а сградата разполага с напълно оборудвани спа център и фитнес зала за ексклузивно ползване от бъдещите обитатели. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.</div>
          <LineGradient></LineGradient>

        </div>
      </div>

      {/* Welcome image */}
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

      {/* Container for timeline */}
      <>
        <div className="bg-ixora-orange py-4">
          <div className="text-white text-center text-3xl font-bold">Етапи</div>
        </div>

        <div className="flex flex-col justify-around lg:flex-row items-center bg-ixora-yellow">
          <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
            <div className="text-center">
              <div className="text-xl lg:text-2xl">
                Юни 2021
              </div>
              <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                Проектиране и регулация
              </div>
            </div>
          </div>
          <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
            <div className="text-center">
              <div className="text-xl lg:text-2xl">
                Юни 2022
              </div>
              <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                РС, строителна площадка и <br />  първа копка
              </div>
            </div>
          </div>
          <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
            <div className="text-center">
              <div className="text-xl lg:text-2xl">
                Март 2023
              </div>
              <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
              Груб строеж <br /> завършен <br /> Акт 14 
              </div>
            </div>
          </div>
          <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
            <div className="text-center">
              <div className="text-xl lg:text-2xl">
                Април 2024
              </div>
              <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300 text-orange-100 ">
                Въвеждане в експлоатация <br /> Акт 16
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Prompt to view plan container */}
      <div className='bg-ixora-orange'>
        <Link href={'/apartments'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">План</div></Link>
      </div>
      <Plan 
        penthouse={'/'} 
        thirdF={'/'}
        secondF={'/'}
        firstF={'/'}
        parking={'/'}
        ></Plan>

      {/* Location */}
      <div>
            <div className="bg-ixora-orange">
            <Link href={'/contacts'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">Местоположение</div></Link>
            </div>
            <Maps></Maps>
        </div>
    </div>
  )
}
