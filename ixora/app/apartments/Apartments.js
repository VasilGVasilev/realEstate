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

        {/* FLOOR BTNS */}


        <PlanButtons classNameProps={'p-5 flex justify-around bg-orange-50'}></PlanButtons>


        {/* FLOOR PLAN */}
        
        <div className="p-4 pt-0 bg-orange-50 flex">
          <Plan></Plan>
        </div>
      </>
    )
}
  
