'use client'

import { useState } from "react";


export const metadata = {
  title: 'Първи етаж - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";


export default function firstFloor() {
    const [apartment, setApartment] = useState(null);

    const updateInfo = (currentAp) => {
      setApartment(s=>currentAp);
      if(window.innerWidth > 413){
        window.scrollTo(0, 600);
      }

    }

    return (
      <div className="p-10 bg-white">
        <div className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Първи етаж</div>
        </div>

        <div className="pt-10 pb-10 flex-col text-orange-500">
          {/* four static templates */}
          {/* default */}
          {apartment === null ? <div className=" font-bold text-lg text-center">Площообразуване</div> : null}
          {/* 1 */}
          {apartment === 1 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 1</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">182,43 м²</div>
            </div>
            <div> + </div>
            <div className="flex justify-center space-x-3 ">
              <div>Двор</div>
              <div className="text-black"></div>
              <div className="font-bold">73,90 м²</div>
            </div>
            <div> = </div>
            <div className="flex justify-center space-x-3 ">
              <div>Обща площ</div>
              <div className="text-black"></div>
              <div className="font-bold">256,33 м²</div>
            </div>
          </div> : null}
          {/* 2 */}
          {apartment === 2 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 2</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">93,02 м²</div>
            </div>
            <div> + </div>
            <div className="flex justify-center space-x-3 ">
              <div>Двор</div>
              <div className="text-black"></div>
              <div className="font-bold">69,00 м²</div>
            </div>
            <div> = </div>
            <div className="flex justify-center space-x-3 ">
              <div>Обща площ</div>
              <div className="text-black"></div>
              <div className="font-bold">162,02 м²</div>
            </div>
          </div> : null}
          {/* 3 */}
          {apartment === 3 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 3</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">146,04 м²</div>
            </div>
            <div> + </div>
            <div className="flex justify-center space-x-3 ">
              <div>Двор</div>
              <div className="text-black"></div>
              <div className="font-bold">45,70 м²</div>
            </div>
            <div> = </div>
            <div className="flex justify-center space-x-3 ">
              <div>Обща площ</div>
              <div className="text-black"></div>
              <div className="font-bold">191,74 м²</div>
            </div>
          </div> : null}
          {/* 4 */}
          {apartment === 4 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 4</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">82,96 м²</div>
            </div>
            <div> + </div>
            <div className="flex justify-center space-x-3 ">
              <div>Двор</div>
              <div className="text-black"></div>
              <div className="font-bold">22,20 м²</div>
            </div>
            <div> = </div>
            <div className="flex justify-center space-x-3 ">
              <div>Обща площ</div>
              <div className="text-black"></div>
              <div className="font-bold">105,16 м²</div>
            </div>
          </div> : null}
        </div>


        <div className="relative inline-block">

          <div className={`absolute apartmentFour h-full w-full z-10 ${sold}`} onClick={()=>updateInfo(4)}></div>
          <div className={`absolute apartmentThree h-full w-full z-10 ${reserved}`} onClick={()=>updateInfo(3)}></div>
          <div className={`absolute apartmentTwo h-full w-full z-10 ${available} `} onClick={()=>updateInfo(2)}></div>
          <div className={`absolute apartmentOne h-full w-full z-10 ${available} `} onClick={()=>updateInfo(1)}></div>
          
          <img src="/plans/first-floor.webp" alt="Ixora Plan" className="relative" />

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
    )
}
  
