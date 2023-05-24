'use client'

import { useEffect } from "react";

export const metadata = {
  title: 'Инвеститор - Ixora Residence',
};


export default function Investor() {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  

    return (
      <div>
        {/* Container for Investor Intro */}
        <div className="p-10 lg:px-64 space-y-10">
          {/* Container for Investor Logo and Name */}
          <div className="flex">
            <img src="/investor-logo.webp" alt="" className="h-20 w-50" />
          </div>
          {/* Container for Description of Investor */}
          <div className="">
            <div className="text-gray-300">
              Creative Studio е строително-инвестиционно холдингово дружество, което финансира, проектира и изгражда луксозни многофамилни и еднофамилни жилищни сгради и ги реализира на пазара. 
            </div>
            <br />
            <div className="text-gray-300">
              Мотото на компанията при изпълнение на инвестиционните проекти гласи - "Creating Excellence" или "Създаване на съвършенство".
            </div>
          </div>
        </div>
        {/* Container for Recent Projects */}
        <div className="bg-white">
          <div className='bg-orange-500'>
            <div className="py-4 text-white text-center text-3xl font-bold">Текущи проекти</div>
          </div>
          {/* Container for projects */}
          <div>

            {/* Container for Dalia*/}
            <div className="py-10">
              {/* Conatiner for name and description */}
              <div className="px-10">
                <div className="py-5 bg-white underline text-orange-500 text-center text-xl italic font-mono">
                  Еднофамилна къща Далия
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци. </div>
              </div>

              <div className="bg-white px-10 w-full h-full flex-col justify-center space-y-5">
                  <img src={`/dalia/dalia-two.webp`} className="transition transform hover:-translate-y-1 active:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none" alt="image" />
                  <img src={`/dalia/dalia-three.webp`} className="transition transform hover:-translate-y-1 active:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none" alt="image" />
                  <img src={`/dalia/dalia-four.webp`} className="transition transform hover:-translate-y-1 active:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none" alt="image" />

              </div>

            </div>

            {/* Container for West End Luxury Houses*/}
            <div className="py-10">
              {/* Conatiner for name and description */}
              <div className="px-10">
                <div className="py-5 bg-white underline text-orange-500 text-center text-xl italic font-mono">
                  Комплекс от къщи West End Luxury Houses
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">В процес на изграждане е луксозен комплекс от 18 самостоятелни еднофамилни къщи със собствени басейни в непосредствена близост до София -  само на 20 минути от центъра. Напълно автономно вилно селище със собствен водоизточник и допълнително соларно захранване.</div>
              </div>

              <div className="bg-white px-10 w-full h-full flex-col justify-center space-y-5">
                  <img src={`/west-end/west-end-one.webp`} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" alt="image" />
                  <img src={`/west-end/west-end-two.webp`} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" alt="image" />
                  <img src={`/west-end/west-end-three.webp`} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" alt="image" />

              </div>

            </div>
            
            {/* Container for Tilia Residence */}
            <div className="py-10">
              {/* Conatiner for name and description */}
              <div className="px-10">                
                <div className="py-5 bg-white underline text-orange-500 text-center text-xl italic font-mono">
                  Жилищна сграда Tilia Residence
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">Модерна жилищна сграда в квартал Връбница с южно изложение в непосредствена близост до метростанция.</div>
              </div>

              <div className="bg-white px-10 w-full h-full flex-col justify-center space-y-5">
                  <img src={`/tilia/tilia-one.webp`} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" alt="image" />
                  <img src={`/tilia/tilia-two.webp`} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" alt="image" />
                  <img src={`/tilia/tilia-three.webp`} className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" alt="image" />

              </div>

            </div>

          </div>
        </div>
      </div>
    )
}
  