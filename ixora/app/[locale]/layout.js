'use client'

import './globals.css'
import Navbar from '../../components/Navbar'
import { usePathname } from 'next/navigation'
import Footer from '../../components/Footer'

import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
 
export function generateStaticParams() {
  return [{locale: 'bg'}, {locale: 'en'}];
}

// you must async await, otherwise you get the json as a json, not an object
export default async function RootLayout({children, params: {locale}}) {
  const pathName = usePathname();

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

// #837667
// #716657
// #464646

  return (
    
    <html lang={locale} className={`scroll-smooth overflow-x-hidden`}>
      <body className='bg-ixora-dark overflow-x-hidden'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar/>
          {/* fixed navbar requires py same for all non home pages */}
          {pathName === '/' ?  
            (<></>) 
            : 
            (
              <div className='py-[6%] sm:py-[4%] md:py-[3.2%] bg-ixora-dark'></div>
            )}
          <main className='app'>
            {children}
          </main>
          <Footer toTopHandle={toTopHandle}/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
