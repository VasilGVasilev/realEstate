'use client'

import Image from "next/image"
import { imageLoader } from "../imgLoader";



export const revalidate = 0; // revalidate this page every 60 seconds


export default function Description() {

    return (
      <>
      <div>
        <div>

        <div className="bg-ixora-orange py-4">
          <div className="text-white text-center text-3xl font-bold">За сградата</div>
        </div>

        {/* Container for List */}

        <div className="p-10 bg-white md:px-32 xl:px-72">
            <div className="bg-white w-full h-fit ">
            
              <ul className="p-5 border-r-2 border-l-2 border-ixora-orange">
                <p className="sm:text-lg text-ixora-orange font-semibold">Фасада</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Окачена, вентилируема, с каменна облицовка от варовик и декоративни елементи от композитен панел - еталбонд. Топлоизолация от каменна вата. </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Фоайе и общи части</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">По специален интериорен проект с каменно оформление от мрамор и оникс.</li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Дограма</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Алуминиева дограма от най-висок клас "WEISS PROFIL" THERMO PRO 85 с цвят антрацит. </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Асансьор</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Висок клас асансьор - КОНЕ. </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Врати</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Блиндирани входни врати SOLID с цвят дъб - модел "iDoor 20-22" Серия 50.</li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">ВиК</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Обезшумяваща канализационна система - Пайплайф MASTER 3</li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Отопление</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Централно газоснабдена сграда. Етаж 1 и 2 са заложени с висок клас енергоефективни радиатори тип Jaga. Етаж 3 и 4 са изпълнени с подово отопление със самостоятелен термостат за всяко помещение.  </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Гаражи</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Голям брой гаражи в сутерена и допълнителни паркоместа извън сградата. </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Сигурност</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Ограда. Контролиран достъп с чип и разпознаване на автомобилен номер. 24/7 жива охрана. </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Удобства</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Самостоятелен фитнес с уреди TECHNOGYM. Спа център с джакузи, парна баня и сауна, оборудвани с топли лежанки. </li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Комуникативна локация</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">🚗 С кола: <br /> ↪ 1 минута ресторант Проя и супермаркет Макс <br /> ↪ 3 минути BRITANICA Park School и няколко детски градини <br /> ↪ 4 минути супермаркет ФАНТАСТИКО <br /> ↪ 7 минути Paradise Center <br /> ↪ 9 минути Sofia Ring Mall </li>
                <br />
                <li className="text-xs sm:text-sm text-gray-700 text-justify">🚌 Публичен транспорт: <br /> Автобуси 68 и 98</li>
                <br />
                <p className="sm:text-lg text-ixora-orange font-semibold">Озеленяване</p>
                <li className="text-xs sm:text-sm text-gray-700 text-justify">Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда. </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Container for timeline */}
        <>
          <div className="bg-ixora-orange py-4">
            <div className="text-white text-center text-3xl font-bold">Етапи</div>
          </div>

          <div className="flex flex-col justify-around lg:flex-row items-center bg-ixora-deep-blue">
            <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-ixora-orange via-80% to-ixora-orange to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
              <div className="text-center">
                <div className="text-xl lg:text-2xl">
                  Юни 2021
                </div>
                <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                  Проектиране и регулация
                </div>
              </div>
            </div>
            <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-ixora-orange via-80% to-ixora-orange to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 active:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
              <div className="text-center">
                <div className="text-xl lg:text-2xl">
                  Юни 2022
                </div>
                <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                  РС, строителна площадка и <br />  първа копка
                </div>
              </div>
            </div>
            <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-ixora-orange via-80% to-ixora-orange to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
              <div className="text-center">
                <div className="text-xl lg:text-2xl">
                  Март 2023
                </div>
                <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                Груб строеж <br /> завършен <br /> Акт 14 
                </div>
              </div>
            </div>
            <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-ixora-orange via-80% to-ixora-orange to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
              <div className="text-center">
                <div className="text-xl lg:text-2xl">
                  Април 2024
                </div>
                <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300 text-ixora-orange ">
                  Въвеждане в експлоатация <br /> Акт 16
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Container for actual building footage */}
        <div>
          <div className="bg-ixora-orange py-4">
            <div className="text-white text-center text-2xl font-bold">Етап на проекта - Акт 14</div>
          </div>
          <div className="flex-col p-10 bg-gray-900">
            <div className="pb-10 flex justify-center transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <Image 
                loader={imageLoader}
                src="/buildProcessOne.webp"
                alt="Build Process"
                width={1310}
                height={887} 
              >
              </Image>
            </div>
            
            <div className="pb-10 flex justify-center transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" >
              <Image 
                loader={imageLoader}
                src="/buildProcessTwo.webp"
                alt="Build Process"
                width={1600}
                height={1200} 
              >
              </Image>
            </div>
            <div className="flex justify-center transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <Image 
                loader={imageLoader}
                src="/buildProcessThree.webp"
                alt="Build Process"
                width={1600}
                height={1200} 
              >
              </Image>
            </div>
          </div>
        </div>

        {/* Container for Parallax Image */}
        <>
          <div className="bg-ixora-orange py-4">
            <div className="text-white text-center text-2xl font-bold">Ixora Luxury Residence</div>
          </div>
          <div className="bg-[url('../public/ixora-description.webp')] h-60 bg-center bg-cover bg-no-repeat bg-white md:min-h-[32rem] md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
          </div>
        </>
        
        {/* Container for Location*/}
        <div>
          <div className="bg-ixora-orange py-4">
            <div className="text-white text-center text-2xl font-bold">Местоположение</div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.0903967890047!2d23.32379292250246!3d42.62140208151248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83e41f60d98d%3A0x74c031759acb7205!2z0YPQuy4g4oCe0J_QuNGA0LjQvdGB0LrQuCDQtdC00LXQu9Cy0LDQudGB4oCcIDMsIDE0MTUg0LIu0LcuINCh0LjQvNC10L7QvdC-0LLQviAtINCU0YDQsNCz0LDQu9C10LLRhtC4LCDQodC40LzQtdC-0L3QvtCy0L4t0JTRgNCw0LPQsNC70LXQstGG0Lg!5e1!3m2!1sbg!2sbg!4v1684919335340!5m2!1sbg!2sbg" 
            width="100%" 
            height="400" 
          ></iframe>
        </div>
      </div>
      </>
    )
}
  