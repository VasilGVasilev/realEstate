'use client'

import Image from "next/image";
import { useEffect } from "react";

export const metadata = {
  title: 'Контакти - Ixora Residence',
};

export default function Contacts() {
  
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    

    return (
      <>
      {/* div for maps */}
      <div className="bg-orange-500">
        <div className="text-center py-4 text-3xl text-white font-bold">Местоположение</div>
      </div>
      <div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.0903967890047!2d23.32379292250246!3d42.62140208151248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83e41f60d98d%3A0x74c031759acb7205!2z0YPQuy4g4oCe0J_QuNGA0LjQvdGB0LrQuCDQtdC00LXQu9Cy0LDQudGB4oCcIDMsIDE0MTUg0LIu0LcuINCh0LjQvNC10L7QvdC-0LLQviAtINCU0YDQsNCz0LDQu9C10LLRhtC4LCDQodC40LzQtdC-0L3QvtCy0L4t0JTRgNCw0LPQsNC70LXQstGG0Lg!5e1!3m2!1sbg!2sbg!4v1684919335340!5m2!1sbg!2sbg" 
          width="100%" 
          height="400" 
        ></iframe>
      </div>
      {/* Desktop res makes Contact Card and Form flex */}
      <div className="lg:flex">
        {/* div for Contact Card */}
          <div className="lg:w-1/2 bg-white">
            <div className="flex-col w-full h-fit lg:w-full">
              <div className="bg-white">
                <div className="flex justify-center text-orange-500 py-4 text-center text-3xl font-bold">Sales офис</div>
              </div>
              <div className="flex justify-center p-8">              
                <div className="flex justify-center h-56 w-96 shadow-xl bg-gradient-to-b from-gray-50 to-white lg:w-full lg:h-80">
                  <div className="space-y-10 flex flex-col justify-center">
                    <div className="flex space-x-3">
                      <Image
                        src="/location.svg"
                        alt="Location"
                        className="bg-transparent hover:animate-bounce"
                        width={24}
                        height={10}
                        priority
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-500 ">ул. „Пирински еделвайс“ 3, 1415 в.з. Симеоново - Драгалевци, Симеоново-Драгалевци</div>
                    </div>

                    <div className="flex space-x-3">

                      <Image
                        src="/green-phone.svg"
                        alt="Phone Ring"
                        className="bg-transparent hover:animate-bounce"
                        width={27}
                        height={14}
                        priority
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-500"><a href={`tel:00359886849995`}>00359886849995</a></div>
                    </div>

                    <div className="flex space-x-3">

                      <Image
                        src="/email.svg"
                        alt="Email"
                        className="bg-transparent hover:animate-bounce"
                        width={28}
                        height={12}
                        priority
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-500"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* div for Form */}
          <div className="flex justify-center p-10 bg-white lg:bg-inherit lg:w-1/2 lg:p-0">
            <form className="bg-gradient-to-b from-gray-700 to-gray-900 shadow-md lg:bg-gradient-to-b lg:from-gray-700 lg:to-gray-700 lg:shadow-none p-8 mb-4 lg:w-full lg:h-full">
              <h2 className="text-gray-200 mb-8 text-2xl lg:text-4xl">
                Свържете се с нас
              </h2>

              <div className="lg:flex lg:space-x-5">
                <div className="mb-4 lg:w-full">
                  <input
                    className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fullname"
                    type="text"
                    placeholder="Вашето име"
                  />
                </div>
                <div className="mb-4 lg:w-full">
                  <input
                    className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Вашият имейл"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="about"
                  type="text"
                  placeholder="Относно"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:h-44"
                  id="textarea"
                  placeholder="Съобщение"
                />
              </div>
      
              <button
                className="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline lg:w-3/12"
                type="button"
              >
                Изпрати
              </button>
            </form>
          </div>
      </div>
      </>
    )
}
  