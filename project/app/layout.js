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
  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
// #837667
// #716657
// #464646
  return (
    <html lang="bg-[#464646]" className='scroll-smooth'>
      <body className='bg-[#464646]'>
        <header>

          <nav className={`fixed z-20 flex-col w-full text-base bg-gradient-to-b from-[#464646] from-10% via-[#716657] via-70% to-[#716657] to-90%`}>
            <div className='px-10 py-3 flex justify-between'>
              <div>

                <a className='hover:scale-110 duration-200 relative h-8 w-20 flex justify-center md:h-10 md:w-24 lg:h-16 lg:w-44 border-2 border-white md:border-none md:hover:border-2 md:hover:border-white ' href={`/`}>
                  <img src="/ixora.webp" alt="Ixora Logo" />
                </a>
              </div>

              <div>

                {/* desktop menu */}
                <div className='flex items-center text-white' >
                  <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/'} >Начало</Link>
                  <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm text-center' href={'/description'}>За сградата</Link>
                  <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/apartments'}>Апартаменти</Link>
                  <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/investor'}>Инвеститор</Link>
                  <Link className='hidden p-3 hover:scale-125 hover:font-bold duration-200 lg:flex lg:p-5 lg:text-xl md:flex md:p-3 md:text-base hover:text-red-500  rounded-sm' href={'/contacts'}>Контакти</Link>
                </div>

                {/* mobile button */}
                <div className='md:hidden flex items-center pt-1' onClick={toggleNavbar}>
                  <div className="space-y-2 cursor-pointer">
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                  </div>
                </div>

              </div>
            </div>

            <div className=''>

              {/* mobile menu */}
              <div onClick={toggleNavbar} className={ toggleClicked === true ? 'md:hidden flex flex-col bg-gradient-to-b from-[#464646] to-[#716657] w-full text-white' : 'hidden'}>
                <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-stone-800 hover:text-red-500 hover:bg-stone-800' href={'/'} >Начало</Link>
                <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-stone-800 hover:text-red-500 hover:bg-stone-800' href={'/description'}>За сградата</Link>
                <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-stone-800 hover:text-red-500 hover:bg-stone-800' href={'/apartments'}>Апартаменти</Link>
                <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-stone-800 hover:text-red-500 hover:bg-stone-800' href={'/investor'}>Инвеститор</Link>
                <Link className='flex justify-center p-3 text-base active:text-red-500 active:bg-stone-800 hover:text-red-500 hover:bg-stone-800' href={'/contacts'}>Контакти</Link>
              </div>

            </div>
            

          </nav>



        </header>
        <main className='app'>
{/* fixed navbar requires relative pt here */}
          <div className='grid place-items-center pt-14 md:pt-16 lg:pt-[92px]'>

          </div>
          {children}
        </main>
        <footer>
          <div className="h-fit w-full flex-col p-10 bg-gradient-to-t from-[#464646] from-10% via-[#716657] via-70% to-[#716657] to-90% lg:px-40">
            <div className='flex justify-center relative bottom-9'>
              <img src="/up-to-top.svg" className="w-10 h-10 cursor-pointer animate-bounce" onClick={toTopHandle} alt="up-to-top-btn" />
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
                      <div className="text-sm text-white"><a href={`tel:00359886849995`}>00359886849995</a></div>
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