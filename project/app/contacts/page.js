'use client'

import Image from "next/image";

export const metadata = {
  title: 'Контакти - Ixora Residence',
};

export default function Contacts() {
  

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


            {/* Container to flex on Desktop */}
            <div className="flex-col w-full h-fit lg:w-full">

              <div className="bg-white">
                <div className="flex justify-center text-orange-500 py-4 pt-10 text-center text-3xl font-bold">Sales офис</div>
              </div>

              <div className="flex justify-center p-8 lg:p-20">              
                <div className="flex justify-center h-56 w-96 p-5 shadow-xl bg-gradient-to-b from-gray-50 to-white lg:w-full lg:h-96">
                  <div className="space-y-10 flex flex-col justify-center">

                    <div className="flex space-x-3 lg:p-5">
                      <Image
                        src="/location.svg"
                        alt="Location"
                        className="bg-transparent hover:animate-bounce"
                        width={24}
                        height={10}
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-500 ">ул. „Пирински еделвайс“ 3, 1415 в.з. Симеоново - Драгалевци, Симеоново-Драгалевци</div>

                    </div>

                    <div className="flex space-x-3 lg:p-5">

                      <Image
                        src="/green-phone.svg"
                        alt="Phone Ring"
                        className="bg-transparent hover:animate-bounce"
                        width={27}
                        height={14}
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-500"><a href={`tel:00359886849995`}>00359886849995</a></div>

                    </div>

                    <div className="flex space-x-3 lg:p-5">

                      <Image
                        src="/email.svg"
                        alt="Email"
                        className="bg-transparent hover:animate-bounce"
                        width={28}
                        height={12}
                      />

                      <div className="text-sm sm:text-base font-bold text-gray-500"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        {/* div for Picture */}
          <div className="flex-col justify-center py-10 lg:p-10 bg-white lg:bg-inherit lg:w-1/2">
            <div className="text-center font-bold text-xl text-orange-400 lg:text-white lg:py-4 mb-10 lg:text-3xl lg:font-bold">Вашият бъдещ дом</div>
            <img
              src="/ixora-apartments.webp"
              alt="description"
              className="shadow-3xl"
              fill="true"
            />
          </div>
      </div>
      </>
    )
}
  