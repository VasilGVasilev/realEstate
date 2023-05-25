'use client'

import { useState } from "react";


export const metadata = {
  title: 'Пентхаус - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function penthouseFloor() {

    const [apartment, setApartment] = useState(null);

    const updateInfo = (currentAp) => {
      setApartment(s=>currentAp);
      if(window.innerWidth > 413){
        window.scrollTo(0, 600);
      }

    }

    return (
      <>
        <div className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Пентхаус</div>
        </div>
        <div className="p-5 bg-white">

          <div className="pt-5 flex-col text-orange-500">
            {/* one static template */}
            {/* default */}
            {apartment === null ?
              <div className='mb-8 bg-orange-300'>
                <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване</div>
              </div> 
            : null}
            {/* 13 */}
            {apartment === 13 ? 
            <>
            <div className='pb-10 bg-white'>
              <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - Пентхаус</div>
            </div> 
            <div className="mb-5 border-r-2 border-l-2 border-orange-500 text-center" >
              <div className="flex justify-center space-x-3 ">
                <div>Площ</div>
                <div className="text-black"></div>
                <div className="font-bold">368,85 м²</div>
              </div>
              <div className="font-bold"> + </div>
              <div className="flex justify-center space-x-3 ">
                <div>Прилежащ озеленен покрив</div>
                <div className="text-black"></div>
                <div className="font-bold">193,90 м²</div>
              </div>
              <div className="font-bold"> = </div>
              <div className="flex justify-center space-x-3 ">
                <div>Обща площ</div>
                <div className="text-black"></div>
                <div className="font-bold">562,75 м²</div>
              </div>
            </div> </>: null}
            

          </div>

          <div className="relative inline-block">

            <div className={`absolute apartmentThirteen h-full w-full z-10 ${available}`} onClick={()=>updateInfo(13)}></div>

            <img src="/plans/penthouse.webp" alt="Ixora Plan" className="relative" />

          </div>
          <div className="py-7">
              <div className="flex justify-around">
                
                <div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-700 opacity-40"></div>
                  <div>Продаден</div>
                </div>

                <div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-400 opacity-40"></div>
                  <div>Свободен</div>
                </div>

                <div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-400 opacity-40"></div>
                  <div>Резервиран</div>
                </div>

              </div>
          </div>
        </div>
      </>
    )
}
  
