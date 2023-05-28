'use client'

import { useRef, useState } from "react";


export const metadata = {
  title: 'Първи етаж - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";


export default function firstFloor() {


    const [apartment, setApartment] = useState({
      ap: null,
      plosht: null,
      dvor: null,
      total: null,
    });


    const myRef = useRef(null);

    const updateInfo = (ap, plosht, dvor, total) => {
      setApartment({
        ap,
        plosht,
        dvor,
        total,
      });
      myRef.current.scrollIntoView();

    }

    return (
      <>
        <div ref={myRef} className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Първи етаж</div>
        </div>
        <div className="p-5 bg-white">
          <div className="pt-5 flex-col text-orange-500">
              {/* default template */}
              {apartment.ap === null ?
                <div className='mb-8 bg-orange-300'>
                  <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване</div>
                </div> 
              : 
              <>
                <div className='pb-10 bg-white'>
                  <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - ап. {apartment.ap}</div>
                </div> 
                <div className="mb-5 border-r-2 border-l-2 border-orange-500 text-center" >
                  <div className="flex justify-center space-x-3 ">
                    <div>Площ</div>
                    <div className="font-bold">{apartment.plosht} м²</div>
                  </div>
                  <div className="font-bold"> + </div>
                  <div className="flex justify-center space-x-3 ">
                    <div>Двор</div>
                    <div className="font-bold">{apartment.dvor} м²</div>
                  </div>
                  <div className="font-bold"> = </div>
                  <div className="flex justify-center space-x-3 ">
                    <div>Обща площ</div>
                    <div className="font-bold">{apartment.total} м²</div>
                  </div>
                </div> 
              </>
              }
              
          </div>


          <div className="relative inline-block">

            <div className={`absolute apartmentFour h-full w-full z-10 ${available}`} onClick={()=>updateInfo(4, 82.96, 22.20, 105.16)}></div>
            <div className={`absolute apartmentThree h-full w-full z-10 ${available}`} onClick={()=>updateInfo(3, 146.04, 45.70, 191.74)}></div>
            <div className={`absolute apartmentTwo h-full w-full z-10 ${available} `} onClick={()=>updateInfo(2, 93.02, 69.00, 162.02)}></div>
            <div className={`absolute apartmentOne h-full w-full z-10 ${available} `} onClick={()=>updateInfo(1, 182.43, 73.90, 256.33)}></div>
            
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
      </>
    )
}
  
