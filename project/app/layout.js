import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Ixora Residence by Creative Studio',
  description: 'Ixora Residence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>
        <a className='absolute top-0 left-6 h-16 w-16 flex justify-center bg-orange-400 border-x-2 border-white md:h-28 md:w-24 lg:h-36' href={`tel:00359886849995`}>
          <Image
            src="/green-phone.svg"
            alt="Phone Ring"
            className="bg-transparent hover:animate-bounce"
            width={45}
            height={24}
            priority
          />
        </a>
        <nav className='px-12 bg-gray-800 flex justify-end py-5 text-base'>
              <div className='flex items-center text-white'>
                <Link className='hidden p-3 lg:flex lg:p-6 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/'} >Начало</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/description'}>Информация</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/apartments'}>Апартаменти</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/investor'}>Инвеститор</Link>
                <Link className='hidden p-3 lg:flex lg:p-5 lg:text-2xl md:flex md:p-3 md:text-xl hover:text-red-600 hover:bg-slate-700' href={'/contacts'}>Контакти</Link>
            </div>
        </nav>

        <main className='app'>
          <div className='py-32 text-center'>
            <h1 className='font-extrabold text-4xl'>End of RootLayout</h1>
          </div>
          {children}
        </main>
        </body>
    </html>
  )
}
