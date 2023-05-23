'use client'


export const metadata = {
  title: 'Първи етаж - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";


export default function firstFloor() {



    return (
      <div className="p-10 bg-white">
        <div className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Първи етаж</div>
        </div>

        <div className="relative inline-block">

          <div className={`absolute apartmentFour h-full w-full z-10 ${sold}`}></div>
          <div className={`absolute apartmentThree h-full w-full z-10 ${reserved}`} ></div>
          <div className={`absolute apartmentTwo h-full w-full z-10 ${available} `} ></div>
          <div className={`absolute apartmentOne h-full w-full z-10 ${available} `} ></div>
          

          <img src="/plans/first-floor.webp" alt="Ixora Plan" className="relative" />



        </div>




        <div className="py-7">
            <div className="flex justify-around">
              
              <div>
                <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-700 opacity-40"></div>
                <div>Продаден</div>
              </div>

              <div>
                <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-400 opacity-40"></div>
                <div>Свободен</div>
              </div>

              <div>
                <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-400 opacity-40"></div>
                <div>Резервиран</div>
              </div>

            </div>
        </div>


      </div>
    )
}
  
