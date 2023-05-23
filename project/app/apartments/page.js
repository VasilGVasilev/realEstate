'use client'

import Link from 'next/link';

export const metadata = {
  title: 'Свободни Апартаменти - Ixora Residence',
};

export default function Apartments() {


    return (
      <>
      
        <div className='bg-orange-500'>
          <div className="py-4 text-white text-center text-3xl font-bold">Разпределение</div>
        </div>
        <div className="p-4 bg-white">
          
          <div className="relative inline-block ">

            <Link href={'apartments/penthouse'}><div className="absolute penthouse cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
            <Link href={'apartments/third-floor'}><div className="absolute thirdFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
            <Link href={'apartments/second-floor'}><div className="absolute secondFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40"></div></Link>
            <Link href={'apartments/first-floor'}><div className="absolute firstFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
            <Link href={'apartments/parking'}><div className="absolute parking cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>

            <img src="ixora-apartments.webp" alt="Ixora Plan" className="relative" />

          </div>

        </div>
      </>
    )
}
  
