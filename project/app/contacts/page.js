import Image from "next/image";

export const metadata = {
  title: 'Контакти - Ixora Residence',
};

export default function Contacts() {
    return (
      <>
      {/* div for maps */}
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
          <div className="lg:p-10">
            <div className="flex-col w-full h-fit bg-white">
              <div className="flex justify-center p-8 text-4xl text-gray-500">Контакти</div>
              <div className="flex justify-center p-10">              
                <div className="flex justify-center h-56 w-96 shadow-3xl bg-gray-50">
                  <div className="space-y-10 flex flex-col justify-center">
                    <div className="flex">
                      <Image
                        src="/location.png"
                        alt="Location"
                        className="bg-transparent hover:animate-bounce"
                        width={24}
                        height={10}
                        priority
                      />
                      <div className="text-xl font-bold text-gray-500">гр. София, ул, кв, офис</div>
                    </div>

                    <div className="flex">

                      <Image
                        src="/green-phone.svg"
                        alt="Phone Ring"
                        className="bg-transparent hover:animate-bounce"
                        width={27}
                        height={14}
                        priority
                      />
                      <div className="text-xl font-bold text-gray-500"><a href={`tel:00359886849995`}>00359886849995</a></div>
                    </div>

                    <div className="flex">

                      <Image
                        src="/email.png"
                        alt="Email"
                        className="bg-transparent hover:animate-bounce"
                        width={28}
                        height={12}
                        priority
                      />
                      <div className="text-xl font-bold text-gray-500"><a href="mailto:office@creativestudiobg.com">office@creativestudiobg.com</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* div for Form */}
          <div class="flex justify-center p-10">
            <form class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 class="text-gray-200 mb-4 text-2xl font-semibold">
                Запитване
              </h2>

              <div class="mb-4">
                <input
                  class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullname"
                  type="text"
                  placeholder="Вашето име"
                />
              </div>
              <div class="mb-4">
                <input
                  class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Вашият имейл"
                />
              </div>
              <div class="mb-4">
                <input
                  class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="about"
                  type="text"
                  placeholder="Относно"
                />
              </div>
              <div class="mb-4">
                <textarea
                  class="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="textarea"
                  placeholder="Съобщение"
                />
              </div>
      
              <button
                class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
  