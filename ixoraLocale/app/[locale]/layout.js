'use client'

import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { usePathname } from 'next/navigation'


// you must async await, otherwise you get the json as a json, not an object
export default async function LocaleLayout({children}) {
  const pathName = usePathname();

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  


// #837667
// #716657
// #464646

  return (
    
    <html className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-ixora-dark overflow-x-hidden'>
          <Navbar/>
          {/* fixed navbar requires py same for all non home pages */}
          {pathName === '/bg/' || pathName === '/en/' ?  
            (<></>) 
            : 
            (
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
