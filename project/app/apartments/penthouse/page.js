'use client'

import { useEffect } from "react";

export const metadata = {
  title: 'Пентхаус - Ixora Residence',
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
      <div className="p-4 ">
        <div className=" pb-4 text-orange-500 text-center text-2xl font-bold font-mono underline">Пентхаус</div>
        <div className="relative inline-block border-4 border-orange-500">

          <div className={`absolute apartmentThirteen h-full w-full z-10 ${available}`}></div>

          <img src="/plans/penthouse.webp" alt="Ixora Plan" className="relative" />

          <div className="flex justify-center absolute top-10 left-3 items-center py-7 ">
            <div className="flex-col">
              
              <div>
                <div className="w-3 h-3 bg-red-700 opacity-40  text-sm"></div>
                <div>Продаден</div>
              </div>

              <div>
                <div className="w-3 h-3 bg-green-400 opacity-40"></div>
                <div>Свободен</div>
              </div>

              <div>
                <div className="w-3 h-3 bg-blue-400 opacity-40"></div>
                <div>Резервиран</div>
              </div>

            </div>
          </div>



        </div>

      </div>
    )
}
  
