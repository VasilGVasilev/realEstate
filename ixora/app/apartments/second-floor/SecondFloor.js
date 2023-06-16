
'use client'

import { useRef, useState } from "react";
import { imageLoader } from "@/app/imgLoader";
import Image from "next/image";
import Link from "next/link";


export const revalidate = 0; // revalidate this page every 60 seconds


const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function SecondFloor() {

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

        
        <div ref={myRef} className='bg-ixora-orange'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Втори етаж</div>
        </div>

        {/* Container for buttons */}
        <div className='p-5 flex justify-around bg-orange-50 '>
          <Link href={'/apartments/parking'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Паркинг</div></Link>
          <Link href={'/apartments/first-floor'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Етаж  1</div></Link>
          <Link href={'/apartments/second-floor'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-700 scale-110 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100">Етаж  2</div></Link>
          <Link href={'/apartments/third-floor'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Етаж  3</div></Link>
          <Link href={'/apartments/penthouse'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Етаж 4</div></Link>
        </div>

        {/* Container for floor plan */}
        <div className="p-5 xl:px-40 bg-white">

          <div className="pt-5 flex-col text-ixora-orange">
              {/* default template */}
              {apartment.ap === null ?
                <div className='mb-8 bg-orange-300'>
                  <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване</div>
                </div> 
              : 
              <>
                <div className='pb-10 bg-white'>
                  <div className="text-ixora-orange text-center text-2xl font-extrabold underline">Площообразуване - ап. {apartment.ap}</div>
                </div> 
                <div className="mb-5 border-r-2 border-l-2 border-ixora-orange text-center" >
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

          <div className="relative inline-block">

            <div className={`absolute apartmentEight h-full w-full z-10 ${available}`} onClick={()=>updateInfo(8, 200.10, 155.10)}></div>
            <div className={`absolute apartmentSeven h-full w-full z-10 ${sold}`} onClick={()=>updateInfo(null)}></div>
            <div className={`absolute apartmentSix h-full w-full z-10 ${available} `} onClick={()=>updateInfo(6, 154.43, 119.70)}></div>
            <div className={`absolute apartmentFive h-full w-full z-10 ${available} `} onClick={()=>updateInfo(5, 100.76, 78.10)}></div>
            

            {/* <img src="/plans/second-floor.webp" alt="Ixora Plan" className="relative" /> */}

            <div className='relative '>
              <Image 
                loader={imageLoader}
                src='/plans/second-floor.webp'
                alt="Ixora Plan"
                width={3509}
                height={4967}   
              ></Image>
            </div>



          </div>

        </div>
      </>
    )
}
  
