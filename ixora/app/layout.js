'use client'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { imageLoader } from './imgLoader'
import { lato, playfair } from './fonts'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathN = usePathname();
  const pathName = pathN.slice(0,pathN.length-1)
  const [selectedPage, setSelectedPage] = useState(pathName); //where are we navigationwise
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(pathName)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-ixora-dark" className={`scroll-smooth ${lato.className}`}>
      <body className='bg-ixora-dark'>
        <header>

        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        </header>      
        {/* fixed navbar requires py same for all non home pages */}
        {pathName === '' ? (<></>) : (
        <div className='py-10 lg:py-12 bg-ixora-dark'></div>
        )}
        <main className='app'>
          {children}
        </main>
        <footer>
          <div className="h-fit w-full flex-col p-10 bg-gradient-to-t from-ixora-dark from-10% via-ixorafrom-ixora-dark via-70% to-[#2e281f] to-90% lg:px-40">
            <div className='flex justify-center relative bottom-12'>
              <img src="/up-to-top.png" className="w-16 h-16 cursor-pointer animate-bounce" onClick={toTopHandle} alt="up-to-top-btn" />
            </div>
            <div className='flex justify-center items-center'>
              <div className='md:flex md:justify-center'>

                <div className='md:text-center'>
                  <div className='text-orange-500 font-mono text-xl'>Ixora Luxury Residence</div>
                  <div className='p-3 text-white font-mono text-sm'> Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша</div>
                </div>
                <div className='md:text-center'>
                  <div className='text-orange-500 font-mono text-xl'>Контакти</div>
                  <div className='p-3'>
                    <div className="py-2 flex space-x-3 items-center">
                      <Image
                        src="/green-phone.svg"
                        alt="Phone Ring"
                        className="bg-transparent animate-pulse"
                        width={20}
                        height={8}
                      />
                      <div className="text-sm text-white"><a href={`tel:00359886879993`}>00359886879993</a></div>
                    </div>
                    <div className="py-2 flex space-x-2 items-center">
                      <Image
                        src="/email.svg"
                        alt="Email"
                        className="bg-transparent animate-pulse"
                        width={20}
                        height={8}
                      />
                      <div className="text-sm text-white"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </footer>
      </body>
  </html>
  )
}