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
        <nav className='px-12 bg-gray-800'>
            <div className='flex justify-start py-5 px-3 text-lg'>
              <div className='flex items-center text-white'>
                <Link className='p-3 lg:p-6 lg:text-2xl hover:text-red-600 hover:bg-slate-700' href={'/'} >Начало</Link>
                <Link className='p-3 lg:p-5 lg:text-2xl hover:text-red-600 hover:bg-slate-700' href={'/description'}>Информация</Link>
                <Link className='p-3 lg:p-5 lg:text-2xl hover:text-red-600 hover:bg-slate-700' href={'/apartments'}>Апартаменти</Link>
                <Link className='p-3 lg:p-5 lg:text-2xl hover:text-red-600 hover:bg-slate-700' href={'/investor'}>Инвеститор</Link>
                <Link className='p-3 lg:p-5 lg:text-2xl hover:text-red-600 hover:bg-slate-700' href={'/contacts'}>Контакти</Link>
              </div>

            </div>
        </nav>
          <a className='absolute top-0 right-12 h-28 w-24 flex justify-center bg-orange-400 border-x-2 border-white lg:h-32' href={`tel:00359886849995`}>
            <Image
              src="/green-phone.svg"
              alt="Phone Ring"
              className="bg-transparent hover:animate-bounce"
              width={60}
              height={24}
              priority
            />
          </a>
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
