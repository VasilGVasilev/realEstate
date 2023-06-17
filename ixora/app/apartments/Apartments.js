'use client'

import Link from 'next/link';
import Image from 'next/image';
import { imageLoader } from '../../utils/imgLoader';
import Plan from '@/components/Plan';
import PlanButtons from '@/components/PlanButtons';


export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartments() {



    return (
      <>

        
        <div className='bg-gradient-ixora'>
          <div className="py-4 text-white text-center text-3xl font-bold">Разпределение</div>
        </div>

        {/* Container for buttons */}


        <PlanButtons classNameProps={'p-5 flex justify-around bg-orange-50'}></PlanButtons>


        {/* Container for clickable floor plan */}
        
        <div className="p-4 pt-0 bg-orange-50 flex">


          {/* Container for plan */}

          <Plan 
            penthouse={'/penthouse/'} 
            thirdF={'/third-floor/'}
            secondF={'/second-floor/'}
            firstF={'/first-floor/'}
            parking={'/parking/'}
            ></Plan>

        </div>
      </>
    )
}
  
