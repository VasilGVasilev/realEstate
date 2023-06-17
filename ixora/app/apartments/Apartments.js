'use client'

import Link from 'next/link';
import Image from 'next/image';
import { imageLoader } from '../../utils/imgLoader';
import Plan from '@/components/Plan';


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartments() {



    return (
      <>

        
        <div className='bg-gradient-ixora'>
          <div className="py-4 text-white text-center text-3xl font-bold">Разпределение</div>
        </div>

        {/* Container for buttons */}

        <div className='p-5 flex justify-around bg-orange-50 '>
          <Link href={'/apartments/parking'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Паркинг</div></Link>
          <Link href={'/apartments/first-floor'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Етаж  1</div></Link>
          <Link href={'/apartments/second-floor'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100">Етаж  2</div></Link>
          <Link href={'/apartments/third-floor'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Етаж  3</div></Link>
          <Link href={'/apartments/penthouse'}><div className="text-white text-xs p-7 md:text-base md:p-10 text-center font-bold flex justify-center items-center bg-orange-400 cursor-pointer h-10 w-10 hover:scale-125 hover:opacity-100 active:scale-125 duration-100 active:opacity-100" >Етаж 4</div></Link>
        </div>

        {/* Container for clickable floor plan */}
        
        <div className="p-4 pt-0 bg-orange-50 flex">


          {/* Container for plan */}

          <Plan 
            penthouse={'/penthouse/'} 
            thirdF={'/third-floor/'}
            secondF={'/second-floor/'}
            firstF={'/first-floor/'}
            parking={'/parking/'}
            ></Plan>

        </div>
      </>
    )
}
  
