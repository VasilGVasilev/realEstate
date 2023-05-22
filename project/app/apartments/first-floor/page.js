'use client'

import { useEffect } from "react";

export const metadata = {
  title: 'Първи етаж - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";


export default function firstFloor() {

    // autoscroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
      <div className="p-10 bg-white">
        <div className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Първи етаж</div>
        </div>

        <div className="relative inline-block">

          <div className={`absolute apartmentFour h-full w-full z-10 ${sold}`}>
            
          </div>
          <div className={`absolute apartmentThree h-full w-full z-10 ${reserved}`} >

          </div>
          <div className={`absolute apartmentTwo h-full w-full z-10 ${available} `} ></div>
          <div className={`absolute apartmentOne h-full w-full z-10 ${available} `} ></div>
          

          <img src="/plans/first-floor.webp" alt="Ixora Plan" className="relative" />



        </div>

        <div className="flex justify-center">


            <div className="w-3 h-3 text-red-700 opacity-40 font-extrabold">Продаден</div>


            <div className="w-3 h-3 text-green-400 opacity-40 font-extrabold">Свободен</div>



            <div className="w-3 h-3 text-blue-400 opacity-40 font-extrabold">Резервиран</div>


        </div>


      </div>
    )
}
  
