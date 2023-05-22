'use client'

export const metadata = {
  title: 'За сградата - Ixora Residence',
};

export default function Description() {

    return (
      <div>
        {/* Container for List */}
        <div>
          
              <div className="bg-orange-500 p-5">

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
                <p className="sm:text-lg text-orange-500 font-semibold">Асансиор</p>
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
        {/* Container for Futuristic Picture */}
        <div>
          <img src="ixora-description.webp" alt="" />
        </div>
        {/* Container for Location*/}
        <div>
          <div className="py-10 bg-white text-orange-500 text-center text-2xl font-bold font-mono">Местоположение</div>
          <iframe 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sofia,%20Bulgaria,%20Europe+(Ixora%20Luxury%20Residence)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
            width="100%" 
            height="400"
          ></iframe>
        </div>
        {/* Container for Link to Building Plan */}
        <div></div>
      </div>
    )
}
  