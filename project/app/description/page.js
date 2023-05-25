'use client'

import { useEffect } from "react";

export const metadata = {
  title: 'За сградата - Ixora Residence',
};

export default function Description() {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  

    return (
      <div>
        {/* Container for List */}
        <div>

          <div className="bg-orange-500 py-4">
            <div className="text-white text-center text-3xl font-bold">За сградата</div>
          </div>

          <div className="p-10 bg-white md:px-32 lg:px-40">
            <div className="bg-white w-full h-fit ">
            
              <ul className="p-5 border-r-2 border-l-2 border-orange-500">
                <p className="sm:text-lg text-orange-500 font-semibold">Фасадата</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify"> Окачена, вентилируема, с каменна облицовка. </li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Дограмата</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify"> Най-висок клас Schüco.</li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Асансъор</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify">Безшумни електрически КОНЕ </li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Врати</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify">Блиндирани входни врати SOLID, обърнати с мрамор.</li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Отопление</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify">Газово захранвано подово със самостоятелен термостат за всяко помещение на два от етажите, останалите два са с висок клас белгийски радиатори на Jaga, съобразявайки се с разнообразните предпочитания на клиентите. </li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Гаражи</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify">Голям брой гаражи в сутерена и допълнителни паркоместа извън сградата. </li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Сигурност</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify">Ограда и контролиран достъп с чип и лицево разпознаване до двора и сградата. </li>
                <br />
                <p className="sm:text-lg text-orange-500 font-semibold">Удобства</p>
                <li className="text-xs sm:text-sm text-gray-500 text-justify">Самостоятелен фитнес и спа център с джакузи, парна баня и сауна, заедно с топли лежанки - напълно оборудвани за бъдещите обитатели. </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Container for Parallax Image */}

        <div className="bg-[url('../public/ixora-description.webp')] h-96 bg-center bg-contain bg-no-repeat bg-white md:min-h-96 md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
        </div>
        {/* Container for Location*/}
        <div>
          <div className="py-10 bg-white text-orange-500 text-center text-2xl font-bold font-mono">Местоположение</div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.0903967890047!2d23.32379292250246!3d42.62140208151248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83e41f60d98d%3A0x74c031759acb7205!2z0YPQuy4g4oCe0J_QuNGA0LjQvdGB0LrQuCDQtdC00LXQu9Cy0LDQudGB4oCcIDMsIDE0MTUg0LIu0LcuINCh0LjQvNC10L7QvdC-0LLQviAtINCU0YDQsNCz0LDQu9C10LLRhtC4LCDQodC40LzQtdC-0L3QvtCy0L4t0JTRgNCw0LPQsNC70LXQstGG0Lg!5e1!3m2!1sbg!2sbg!4v1684919335340!5m2!1sbg!2sbg" 
            width="100%" 
            height="400" 
          ></iframe>
        </div>
        {/* Container for Link to Building Plan */}
        <div></div>
      </div>
    )
}
  