'use client'

import Link from 'next/link';
import Image from 'next/image';
import { imageLoader } from '../imgLoader'

export const metadata = {
  title: 'Свободни Апартаменти - Ixora Residence',
};


export default function Apartments() {



    return (
      <>
      
        <div className='bg-orange-500'>
          <div className="py-4 text-white text-center text-3xl font-bold">Разпределение</div>
        </div>
        <div className="p-4 bg-white lg:px-36">
          
          <div className="relative inline-block ">

            <Link href={'/apartments/penthouse'}><div className="absolute bFour cursor-pointer h-full w-full z-10" ></div></Link>
            <Link href={'/apartments/third-floor'}><div className="absolute bThree cursor-pointer h-full w-full z-10" ></div></Link>
            <Link href={'/apartments/second-floor'}><div className="absolute bTwo cursor-pointer h-full w-full z-10" ></div></Link>
            <Link href={'/apartments/first-floor'}><div className="absolute bOne cursor-pointer h-full w-full z-10" ></div></Link>
            <Link href={'/apartments/parking'}><div className="absolute bParking cursor-pointer h-full w-full z-10" ></div></Link>
            
            <Link href={'/apartments/penthouse'}><div className="absolute penthouse cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
            <Link href={'/apartments/third-floor'}><div className="absolute thirdFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
            <Link href={'/apartments/second-floor'}><div className="absolute secondFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40"></div></Link>
            <Link href={'/apartments/first-floor'}><div className="absolute firstFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
            <Link href={'/apartments/parking'}><div className="absolute parking cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>

            {/* <img src="/ixora-apartments-plan.webp" alt="Ixora Plan" className="relative" /> */}
                
            <div className='relative '>
              <Image 
                loader={imageLoader}
                src='/ixora-apartments-plan.webp'
                alt="Ixora Plan"
                width={5000}
                height={2813}   
              ></Image>
            </div>
          

          </div>

        </div>
      </>
    )
}
  
