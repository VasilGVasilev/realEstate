'use client'


export const metadata = {
  title: 'Паркинг - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function firstFloor() {


    return (
      <>
        <div className='bg-orange-500'>
          <div className=" py-4 text-white text-center text-2xl font-extrabold">Гаражи</div>
        </div>
        <div className="p-10 bg-white">

          <div className="relative inline-block">

            <div className={`absolute parkOutOne h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkOutTwo h-full w-full z-10 ${sold}`}></div>
            <div className={`absolute parkOutThree h-full w-full z-10 ${sold}`}></div>

            <div className={`absolute parkingOne h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingTwo h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingThree h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingFour h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingFive h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingSix h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingSeven h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingEight h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingNine h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingTen h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingEleven h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingTwelve h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingThirteen h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingFourteen h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingFifteen h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingSixteen h-full w-full z-10 ${available}`}></div>
            <div className={`absolute parkingSeventeen h-full w-full z-10 ${available}`}></div>

            <img src="/plans/parking.webp" alt="Ixora Plan" className="relative" />

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
      </>
    )
}
  