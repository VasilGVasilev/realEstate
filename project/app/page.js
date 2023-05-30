'use client'
import Link from "next/link"
import Image from "next/image"
import { imageLoader } from "./imgLoader"

export const metadata = {
  title: 'Ixora Residence by Creative Studio',
  description: 'Ixora Residence',
}

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

      {/* Prompt to view plan container */}
      <div className="p-4 bg-white">
          <div className='bg-orange-500'>
            <Link href={'/apartments'} className=""><div className="hover:scale-110 duration-200 py-4 text-white text-center text-3xl font-bold">План</div></Link>
          </div>
          <div className="inline-block ">
            <Link href={'/apartments'} className="">
              <Image 
                loader={imageLoader}
                src="/ixora-apartments.webp"
                alt="Ixora Plan"
                className="opacity-50 hover:opacity-100 active:opacity-100" 
                width={5000}
                height={2813} 
              >
              </Image>
            </Link>
          </div>
      </div>

      {/* Location */}
      <div>
        <div className="bg-orange-500">
          <div className="text-center py-4 text-3xl text-white font-bold">Местоположение</div>
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
