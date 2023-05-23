import Link from "next/link"

export const metadata = {
  title: 'Ixora Residence by Creative Studio',
  description: 'Ixora Residence',
}

export default function Home() {
  return (
    <div className="">
      {/* description container */}
      <div className="p-10 bg-white md:px-32 lg:px-40">
        <div className="py-5 bg-white text-orange-500 text-left text-xl italic font-mono">Кратък текст за описание: </div>
        <div>Изпълнението и всички довършителни работи са заложени в изключително висок, бутиков класИзпълнението и всички довършителни работи са заложени в изключително висок, бутиков класИзпълнението и всички довършителни работи са заложени в изключително висок, бутиков класИзпълнението и всички довършителни работи са заложени в изключително висок, бутиков клас</div>
      </div>
      {/* prompt to view plan container */}
      <div className="p-4 bg-white">
          <div className='bg-orange-500'>
            <div className="py-4 text-white text-center text-3xl font-bold">План</div>
          </div>
          <div className="inline-block ">

            <Link href={'apartments'} className=""><img src="ixora-apartments.webp" alt="Ixora Plan" className="opacity-50" /></Link>

          </div>

        </div>
    </div>
  )
}
