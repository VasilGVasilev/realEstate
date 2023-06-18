'use client'

import './globals.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { imageLoader } from '../utils/imgLoader'
import { lato, playfair } from '../utils/fonts'
import useMediaQuery from '../hooks/useMediaQuery'
import Navbar from '../components/Navbar'
import { usePathname } from 'next/navigation'
import Footer from '../components/Footer'


export default function RootLayout({ children }) {
  const pathName = usePathname();

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-ixora-dark" className={`scroll-smooth ${playfair.className} overflow-x-hidden`}>
      <body className='bg-ixora-dark overflow-x-hidden'>

        <Navbar
        />
 
        {/* fixed navbar requires py same for all non home pages */}
        {pathName === '/' ? (<></>) : (
        <div className='py-[6%] sm:py-[4%] md:py-[3.2%] bg-ixora-dark'></div>
        )}
        <main className='app'>
          {children}
        </main>
        <Footer toTopHandle={toTopHandle}/>
      </body>
  </html>
  )
}