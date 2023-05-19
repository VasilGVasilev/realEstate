export const metadata = {
  title: 'Инвеститор - Ixora Residence',
};

export default function Investor() {
    return (
      <div>
        {/* Container for Investor Intro */}
        <div className="p-10 md:px-56 lg:px-96 space-y-10">
          {/* Container for Investor Logo and Name */}
          <div className="flex">
            <img src="investor-logo.png" alt="" className="h-20 w-50" />
            <div className="text-2xl">Creative Studio</div>
          </div>
          {/* Container for Description of Investor */}
          <div>
            <div className="text-gray-500">
              Creative Studio е строително-инвестиционно холдингово дружество, което финансира, проектира и изгражда луксозни многофамилни и еднофамилни жилищни сгради и ги реализира на пазара. 
            </div>
            <br />
            <div className="text-gray-500">
              Мотото на компанията при изпълнение на инвестиционните проекти гласи - "Creating Excellence" или "Създаване на съвършенство".
            </div>
          </div>
        </div>
        {/* Container for Recent Projects */}
        <div className="bg-white">
          <div className="pt-5 pl-5 bg-white text-orange-500 text-left text-2xl font-bold font-mono lg:text-center">Други Проекти</div>
          {/* Container for other projects */}
          <div>

            {/* Container for Dalia*/}
            <div>
              {/* Conatiner for name and description */}
              <div className="px-10">
                <div className="pt-5 bg-white text-orange-500 text-center text-xl italic font-mono">
                  Еднофамилна къща Далия
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци. </div>
              </div>

              <div>

              </div>

            </div>

            {/* Container for West End Luxury Houses*/}
            <div>
              {/* Conatiner for name and description */}
              <div className="px-10">
                <div className="pt-5 bg-white text-orange-500 text-center text-xl italic font-mono">
                  Комплекс от къщи West End Luxury Houses
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">В процес на изграждане е луксозен комплекс от 18 самостоятелни еднофамилни къщи със собствени басейни в непосредствена близост до София -  само на 20 минути от центъра. Напълно автономно вилно селище със собствен водоизточник и допълнително соларно захранване.</div>
              </div>


            </div>
            
            {/* Container for Tilia Residence */}
            <div>
              {/* Conatiner for name and description */}
              <div className="px-10">                
                <div className="pt-5 bg-white text-orange-500 text-center text-xl italic font-mono">
                  Жилищна сграда Tilia Residence
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">Модерна жилищна сграда в квартал Връбница с южно изложение в непосредствена близост до метростанция.</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
}
  