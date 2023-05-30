'use client'

import { useRef, useState } from "react";
import { imageLoader } from "@/app/imgLoader";
import Image from "next/image";

export const metadata = {
  title: 'Трети етаж - Ixora Residence',
};

export const revalidate = 0; // revalidate this page every 60 seconds


const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function thirdFloor() {

    const [apartment, setApartment] = useState({
      ap: null,
      plosht: null,
      zp: null,
    });

    const myRef = useRef(null)
    
    const updateInfo = (ap, plosht, zp) => {
      setApartment({
        ap,
        plosht,
        zp,
      });
      myRef.current.scrollIntoView();

    }


    return (
      <>      
        <div ref={myRef} className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Трети етаж</div>
        </div>
        <div className="p-5 xl:px-40 bg-white">

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
                      <div>( ЗП</div>
                      <div className="font-bold">{apartment.zp} м²)</div>
                    </div>
                  </div> 
                </>
                }
                
          </div>

          <div>
            <div className="relative inline-block">

              <div className={`absolute apartmentTwelve h-full w-full z-10 ${available}`} onClick={()=>updateInfo(12, 200.10, 155.10)}></div>
              <div className={`absolute apartmentEleven h-full w-full z-10 ${sold}`} onClick={()=>updateInfo(null)}></div>
              <div className={`absolute apartmentTen h-full w-full z-10 ${available} `} onClick={()=>updateInfo(10, 154.43, 119.70)}></div>
              <div className={`absolute apartmentNine h-full w-full z-10 ${available} `} onClick={()=>updateInfo(9, 100.76, 78.10)}></div>
              

              {/* <img src="/plans/third-floor.webp" alt="Ixora Plan" className="relative" /> */}

              <div className='relative '>
                <Image 
                  loader={imageLoader}
                  src='/plans/third-floor.webp'
                  alt="Ixora Plan"
                  width={3509}
                  height={4967}   
                ></Image>
              </div>

            </div>
          </div>


        </div>
      </>
    )
}
  
