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
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sofia,%20Bulgaria,%20Europe+(Ixora%20Luxury%20Residence)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
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
                <div className="flex justify-center text-orange-500 py-4 text-center text-3xl font-bold">Контакти</div>
              </div>
              <div className="flex justify-center p-8">              
                <div className="flex justify-center h-56 w-96 shadow-xl bg-gradient-to-b from-gray-50 to-white lg:w-full lg:h-80">
                  <div className="space-y-10 flex flex-col justify-center">
                    <div className="flex space-x-3">
                      <Image
                        src="/location.png"
                        alt="Location"
                        className="bg-transparent hover:animate-bounce"
                        width={24}
                        height={10}
                        priority
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-500 ">гр. София, ул, кв, офис</div>
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
                        src="/email.png"
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
  