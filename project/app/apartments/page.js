'use client'

import Link from 'next/link';

export const metadata = {
  title: 'Свободни Апартаменти - Ixora Residence',
};

export default function Apartments() {

    return (
      <div className="p-4 ">
        <div className=" pb-4 text-orange-500 text-center text-2xl font-bold font-mono underline">План</div>
        <div className="relative inline-block border-4 border-orange-500">

          <Link href={'apartments/penthouse'}><div className="absolute penthouse cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
          <Link href={'apartments/third-floor'}><div className="absolute thirdFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
          <Link href={'apartments/second-floor'}><div className="absolute secondFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40"></div></Link>
          <Link href={'apartments/first-floor'}><div className="absolute firstFloor cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>
          <Link href={'apartments/parking'}><div className="absolute parking cursor-pointer h-full w-full z-10 hover:bg-black hover:opacity-40 active:bg-black active:opacity-40" ></div></Link>

          <img src="ixora-apartments.webp" alt="Ixora Plan" className="relative" />

        </div>

      </div>
    )
}
  
