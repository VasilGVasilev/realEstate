'use client'

import { useRef, useState } from "react";


export const metadata = {
  title: 'Пентхаус - Ixora Residence',
};

export const revalidate = 0; // revalidate this page every 60 seconds


const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function penthouseFloor() {

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
          <div className="py-4 text-white text-center text-2xl font-extrabold">Пентхаус</div>
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

            <div className={`absolute apartmentThirteen h-full w-full z-10 ${available}`} onClick={()=>updateInfo(13, 368.85, 193.90, 562.75)}></div>

            <img src="/plans/penthouse.webp" alt="Ixora Plan" className="relative" />

          </div>

        </div>
      </>
    )
}
  
