'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "./imgLoader"

export const metadata = {
  title: 'Ixora Residence by Creative Studio',
  description: 'Ixora Residence',
}

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
          <div className="py-5 border-orange-500 border-t-2 border-b-2">
            <div className="py-5 text-orange-600 text-left text-2xl italic font-semibold">Ixora Luxury Residence: </div>
            <div className="text-left font-semibold text-gray-700">Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Ixora Residence се състои от 13 просторни апартамента и 17 гаража. Апартаментите разкриват чудесна панорамна гледка към София и Витоша, а сградата разполага с напълно оборудвани спа център и фитнес зала за ексклузивно ползване от бъдещите обитатели. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.</div>
          </div>
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
      <div className="bg-orange-300">
        <Link href={'/description'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">Етапи</div></Link>
      </div>

      <div className="flex flex-col justify-around lg:flex-row items-center bg-orange-100">
        <div className="group m-10 h-48 w-48 bg-gradient-to-r from-orange-500 from-10% via-orange-300 via-80% to-orange-300 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500">
            <div className="text-center">
              <div className="text-2xl">
                Юни 2021
              </div>
              <div className="group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                Проектиране и регулация
              </div>
            </div>
          </div>
        <div className="group m-10 h-48 w-48 bg-gradient-to-r from-orange-500 from-10% via-orange-300 via-80% to-orange-300 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 active:scale-125 duration-500">
            <div className="text-center">
              <div className="text-2xl">
                Юни 2022
              </div>
              <div className="group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                РС, строителна площадка и <br />  първа копка
              </div>
            </div>
          </div>
        <div className="group m-10 h-48 w-48 bg-gradient-to-r from-orange-500 from-10% via-orange-300 via-80% to-orange-300 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500">
            <div className="text-center">
              <div className="text-2xl">
                Март 2023
              </div>
              <div className="group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
              Груб строеж <br /> завършен <br /> Акт 14 
              </div>
            </div>
          </div>
        <div className="group m-10 h-48 w-48 bg-gradient-to-r from-orange-500 from-10% via-orange-300 via-80% to-orange-300 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500">
            <div className="text-center">
              <div className="text-2xl">
                Април 2024
              </div>
              <div className="group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300 text-orange-100 ">
                Въвеждане в експлоатация <br /> Акт 16
              </div>
            </div>
          </div>
      </div>

      {/* Prompt to view plan container */}
      <div className='bg-orange-300'>
        <Link href={'/apartments'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">План</div></Link>
      </div>
      <div className="bg-orange-100">
        <Link href={'/apartments'} className="">
          <Image 
            loader={imageLoader}
            src="/ixora-apartments.webp"
            alt="Ixora Plan"
            className="opacity-75 hover:opacity-100 active:opacity-100" 
            width={5000}
            height={2813} 
          >
          </Image>
        </Link>
      </div>

      {/* Location */}
      <div>
        <div className="bg-orange-300">
          <Link href={'/contacts'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">Местоположение</div></Link>
        </div>
        <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.0903967890047!2d23.32379292250246!3d42.62140208151248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83e41f60d98d%3A0x74c031759acb7205!2z0YPQuy4g4oCe0J_QuNGA0LjQvdGB0LrQuCDQtdC00LXQu9Cy0LDQudGB4oCcIDMsIDE0MTUg0LIu0LcuINCh0LjQvNC10L7QvdC-0LLQviAtINCU0YDQsNCz0LDQu9C10LLRhtC4LCDQodC40LzQtdC-0L3QvtCy0L4t0JTRgNCw0LPQsNC70LXQstGG0Lg!5e1!3m2!1sbg!2sbg!4v1684919335340!5m2!1sbg!2sbg" 
            width="100%" 
            height="400" 
          ></iframe>
        </div>
      </div>
    </div>
  )
}
