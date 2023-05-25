'use client'
import Link from "next/link"
import { useEffect } from "react";

export const metadata = {
  title: 'Ixora Residence by Creative Studio',
  description: 'Ixora Residence',
}

export default function Home() {



  return (
    <div>
      {/* Welcome image */}
      <div>
        <img src="/ixora-welcome.webp" alt="ixora-welcome"  />
      </div>

      {/* Description container */}
      <div className="p-10 bg-white md:px-32 lg:px-40">
        <div className="py-5 bg-white text-orange-500 text-left text-2xl italic font-mono">Ixora Luxury Residence: </div>
        <div>Изпълнението и всички довършителни работи са заложени в изключително висок, бутиков класИзпълнението и всички довършителни работи са заложени в изключително висок, бутиков класИзпълнението и всички довършителни работи са заложени в изключително висок, бутиков класИзпълнението и всички довършителни работи са заложени в изключително висок, бутиков клас</div>
      </div>

      {/* Prompt to view plan container */}
      <div className="p-4 bg-white">
          <div className='bg-orange-500'>
            <Link href={'/apartments'} className=""><div className="py-4 text-white text-center text-3xl font-bold">План</div></Link>
          </div>
          <div className="inline-block ">

            <Link href={'/apartments'} className=""><img src="/ixora-apartments.webp" alt="Ixora Plan" className="opacity-50" /></Link>

          </div>

        </div>
    </div>
  )
}
