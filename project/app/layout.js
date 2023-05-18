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
      <body className='bg-orange-50'>
        {/* persisting easy call button */}
        <a className='absolute top-0 left-6 h-16 w-16 flex justify-center bg-orange-400 border-x-2 border-green-500 md:h-28 md:w-24 lg:h-36' href={`tel:00359886849995`}>
          <Image
            src="/green-phone.svg"
            alt="Phone Ring"
            className="bg-transparent hover:animate-bounce"
            width={45}
            height={24}
            priority
          />
        </a>
        <div>

          <nav className='px-12 flex justify-end py-5 text-base bg-gray-800 border-b-2 border-gray-500'>
            
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
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate-700' href={'/'} >Начало</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate-700' href={'/description'}>Информация</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate-700' href={'/apartments'}>Апартаменти</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate-700' href={'/investor'}>Инвеститор</Link>
            <Link className='flex justify-center p-3 text-base active:text-red-600 active:bg-slate-700' href={'/contacts'}>Контакти</Link>
          </div>

        </div>
        <main className='app'>
          <div className='py-24 text-center'>
            <h1 className='italic font-bold text-3xl'>Ixora Luxury Residence</h1>
          </div>
          {children}
        </main>
        </body>
    </html>
  )
}
