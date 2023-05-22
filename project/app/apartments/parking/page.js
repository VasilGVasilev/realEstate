'use client'

import { useEffect } from "react";

export const metadata = {
  title: 'Паркинг - Ixora Residence',
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
          <div className=" py-4 text-white text-center text-2xl font-extrabold">Паркинг</div>
        </div>

        <div className="relative inline-block">

          <div className={`absolute parkingOne h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingTwo h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingThree h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingFour h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingFive h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingSix h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingSeven h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingEight h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingNine h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingTen h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingEleven h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingTwelve h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingThirteen h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingFourteen h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingFifteen h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingSixteen h-full w-full z-10 ${available}`}></div>
          <div className={`absolute parkingSeventeen h-full w-full z-10 ${available}`}></div>

          <img src="/plans/parking.webp" alt="Ixora Plan" className="relative" />
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
  