'use client'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const metadata = {
  title: 'Ixora Residence by Creative Studio',
  description: 'Ixora Residence',
}

export default function RootLayout({ children }) {
  const [toggleClicked, setToggleClick] = useState(false); 

  const toggleNavbar = () => {
    setToggleClick(state => !state);
  }

  return (
    <html lang="bg">
      <body className='bg-gradient-to-r from-white from-10% via-amber-50 via-60% to-green-50 to-90%'>
        {/* persisting easy call button */}
        <a className='absolute top-0 left-6 h-16 w-16 flex justify-center bg-gradient-to-b from-orange-500 to-orange-300 border-x-2 border-green-500 md:h-28 md:w-24 lg:h-36' href={`tel:00359886849995`}>
          <Image
            src="/green-phone.svg"
            alt="Phone Ring"
            className="bg-transparent hover:animate-bounce"
            width={45}
            height={24}
            priority
          />
        </a>
        <header>

          <nav className='px-12 py-5 flex justify-end  text-base bg-gradient-to-b from-gray-900 to-gray-700 border-b-2 border-gray-500'>
            
            {/* desktop menu */}
              <div className='flex items-center text-white' >
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/'} >Начало</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/description'}>Информация</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/apartments'}>Апартаменти</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/investor'}>Инвеститор</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/contacts'}>Контакти</Link>
              </div>

            {/* mobile button */}
            <div className='md:hidden flex items-center' onClick={toggleNavbar}>
              <div className="space-y-2 cursor-pointer">
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
                <span className="block w-8 h-0.5 bg-white"></span>
              </div>
            </div>

          </nav>

          {/* mobile menu */}
          <div onClick={toggleNavbar} className={ toggleClicked === true ? 'md:hidden flex flex-col bg-gray-800 text-white' : 'hidden'}>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate- hover:text-red-600 hover:bg-slate-700' href={'/'} >Начало</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate- hover:text-red-600 hover:bg-slate-700' href={'/description'}>Информация</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate- hover:text-red-600 hover:bg-slate-700' href={'/apartments'}>Апартаменти</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate- hover:text-red-600 hover:bg-slate-700' href={'/investor'}>Инвеститор</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate- hover:text-red-600 hover:bg-slate-700' href={'/contacts'}>Контакти</Link>
          </div>

        </header>
        <main className='app'>
          <div className='py-24 text-center'>
            <div className='italic font-bold text-3xl'>Ixora Luxury Residence</div>
          </div>
          {children}
        </main>
        <footer>
          <div className="h-fit w-full flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700 md:px-60">
            <div className='p-10'>
              <div className='text-orange-500 font-mono text-xl'>Ixora Luxury Residence</div>
              <div className='p-3 text-white font-mono text-sm'>Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша. Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша. Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша</div>
              <div className='text-orange-500 font-mono text-xl'>Контакти</div>
              <div className='p-3'>
                <div className="py-2 flex space-x-3 items-center">
                  <Image
                    src="/green-phone.svg"
                    alt="Phone Ring"
                    className="bg-transparent hover:animate-bounce"
                    width={20}
                    height={8}
                    priority
                  />
                  <div className="text-sm text-white"><a href={`tel:00359886849995`}>00359886849995</a></div>
                </div>
                <div className="py-2 flex space-x-2 items-center">
                  <Image
                    src="/email.png"
                    alt="Email"
                    className="bg-transparent hover:animate-bounce"
                    width={20}
                    height={8}
                    priority
                  />
                  <div className="text-sm text-white"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
  </html>
  )
}
