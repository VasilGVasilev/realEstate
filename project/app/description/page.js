export const metadata = {
  title: 'За сградата - Ixora Residence',
};

export default function Description() {
    return (
      <div>
        {/* Container for List */}
        <div>
          
          <div className="p-10 md:px-56 lg:px-96">
            <div className=" bg-white w-full h-fit ">
            
              <ul className="p-10 border-2 border-gray-900">
                <div className="pb-7 bg-white text-orange-500 text-left text-2xl font-bold font-mono">За сградата</div>
                <p className="text-orange-500 font-semibold">Фасадата</p>
                <li className="text-gray-500"> Окачена, вентилируема, с каменна облицовка. </li>
                <br />
                <p className="text-orange-500 font-semibold">Дограмата</p>
                <li className="text-gray-500"> Най-висок клас Schüco.</li>
                <br />
                <p className="text-orange-500 font-semibold">Асансиор</p>
                <li className="text-gray-500">Безшумни електрически КОНЕ </li>
                <br />
                <p className="text-orange-500 font-semibold">Врати</p>
                <li className="text-gray-500">Блиндирани входни врати SOLID, обърнати с мрамор.</li>
                <br />
                <p className="text-orange-500 font-semibold">Отопление</p>
                <li className="text-gray-500">Газово захранвано подово със самостоятелен термостат за всяко помещение на два от етажите, останалите два са с висок клас белгийски радиатори на Jaga, съобразявайки се с разнообразните предпочитания на клиентите. </li>
                <br />
                <p className="text-orange-500 font-semibold">Гаражи</p>
                <li className="text-gray-500">Голям брой гаражи в сутерена и допълнителни паркоместа извън сградата. </li>
                <br />
                <p className="text-orange-500 font-semibold">Сигурност</p>
                <li className="text-gray-500">Ограда и контролиран достъп с чип и лицево разпознаване до двора и сградата. </li>
                <br />
                <p className="text-orange-500 font-semibold">Удобства</p>
                <li className="text-gray-500">Самостоятелен фитнес и спа център с джакузи, парна баня и сауна, заедно с топли лежанки - напълно оборудвани за бъдещите обитатели. </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Container for Futuristic Picture */}
        <div>
          <img src="ixora-description.jpg" alt="" />
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
  