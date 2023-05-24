'use client'

import { useState } from "react";


export const metadata = {
  title: 'Втори етаж - Ixora Residence',
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
          <div className="py-4 text-white text-center text-2xl font-extrabold">Втори етаж</div>
        </div>

        <div className="pt-10 pb-10 flex-col text-orange-500">
          {/* four static templates */}
          {/* default */}
          {apartment === null ? <div className=" font-bold text-lg text-center">Площообразуване</div> : null}
          {/* 8 */}
          {apartment === 8 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 8</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">200,10 м²</div>
            </div>
            <div className="flex justify-center space-x-3 ">
              <div>( ЗП</div>
              <div className="text-black"></div>
              <div className="font-bold">155,10 м²)</div>
            </div>
          </div> : null}
          {/* 7 */}
          {apartment === 7 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 7</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">124,76 м²</div>
            </div>
            <div className="flex justify-center space-x-3 ">
              <div>( ЗП</div>
              <div className="text-black"></div>
              <div className="font-bold">96,70 м²)</div>
            </div>
          </div> : null}
          {/* 6 */}
          {apartment === 6 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 6</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">154,43 м²</div>
            </div>
            <div className="flex justify-center space-x-3 ">
              <div>( ЗП</div>
              <div className="text-black"></div>
              <div className="font-bold">119,70 м²)</div>
            </div>
          </div> : null}
          {/* 5 */}
          {apartment === 5 ? <div className="border-r-2 border-l-2 border-orange-500 text-center" >
            <div className="pb-4 text-lg font-bold">Площообразуване - ап. 5</div>
            <div className="flex justify-center space-x-3 ">
              <div>Площ</div>
              <div className="text-black"></div>
              <div className="font-bold">100,76 м²</div>
            </div>
            <div className="flex justify-center space-x-3 ">
              <div>( ЗП</div>
              <div className="text-black"></div>
              <div className="font-bold">78,10 м²)</div>
            </div>
          </div> : null}
        </div>

        <div className="relative inline-block">

          <div className={`absolute apartmentEight h-full w-full z-10 ${available}`} onClick={()=>updateInfo(8)}></div>
          <div className={`absolute apartmentSeven h-full w-full z-10 ${sold}`} onClick={()=>updateInfo(null)}></div>
          <div className={`absolute apartmentSix h-full w-full z-10 ${available} `} onClick={()=>updateInfo(6)}></div>
          <div className={`absolute apartmentFive h-full w-full z-10 ${available} `} onClick={()=>updateInfo(5)}></div>
          

          <img src="/plans/second-floor.webp" alt="Ixora Plan" className="relative" />



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
  
