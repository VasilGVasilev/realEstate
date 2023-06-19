
'use client'

import { useRef, useState } from "react";
import Image from 'next/image';
import { imageLoader } from "../../../utils/imgLoader";
import Link from "next/link";
import { motion } from "framer-motion";
import PlanButtons from "@/components/PlanButtons";

import Modal from "@/components/Modal";


export const revalidate = 0; // revalidate this page every 60 seconds

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";

// TODO: add modals for ploshtoobrazuvane

export default function FirstFloor() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };
    const [apartment, setApartment] = useState({
      ap: null,
      plosht: null,
      dvor: null,
      total: null,
    });


    const myRef = useRef(null);

    const updateInfo = (ap, plosht, dvor, total) => {
      setApartment({
        ap,
        plosht,
        dvor,
        total,
      });
      myRef.current.scrollIntoView();

    }

    return (
      <>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={openModal}
          >
            Open Modal
          </button>

          <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
        <motion.div
          ref={myRef} 
          className='bg-gradient-ixora'
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 1 }}
          >
          <div className="py-4 text-white text-center text-2xl font-extrabold">Първи етаж</div>
        </motion.div>

        {/* Container for buttons */}

        <PlanButtons></PlanButtons>

        {/* Container for floor plan */}
        <div className="p-5 xl:px-40 bg-gradient-to-b from-ixora-dark from-10% via-ixorafrom-ixora-dark via-70% to-[#2e281f] to-90% ">

          <div className="pt-5 flex-col text-white">
              {/* default template */}
              {apartment.ap === null ?
                  <div className='mb-8 bg-ixora-orange'>
                    <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване</div>
                  </div> 
                : 
                <>
                  <div className='mb-8 bg-ixora-orange'>
                    <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване - ап. {apartment.ap}</div>
                  </div>
                <div className="mb-5 border-r-2 border-l-2 border-ixora-orange text-center" >
                  <div className="flex justify-center space-x-3 ">
                    <div>Площ</div>
                    <div className="font-bold text-ixora-orange">{apartment.plosht} м²</div>
                  </div>
                  <div className="font-bold"> + </div>
                  <div className="flex justify-center space-x-3 ">
                    <div>Двор</div>
                    <div className="font-bold text-ixora-orange">{apartment.dvor} м²</div>
                  </div>
                  <div className="font-bold"> = </div>
                  <div className="flex justify-center space-x-3 ">
                    <div>Обща площ</div>
                    <div className="font-bold text-ixora-orange">{apartment.total} м²</div>
                  </div>
                </div> 
              </>
              }
              
          </div>

          <div className="relative">

            <div className={`absolute apartmentFour h-full w-full z-10 ${available}`} onClick={()=>updateInfo(4, 82.96, 22.20, 105.16)}></div>
            <div className={`absolute apartmentThree h-full w-full z-10 ${available}`} onClick={()=>updateInfo(3, 146.04, 45.70, 191.74)}></div>
            <div className={`absolute apartmentTwo h-full w-full z-10 ${available} `} onClick={()=>updateInfo(2, 93.02, 69.00, 162.02)}></div>
            <div className={`absolute apartmentOne h-full w-full z-10 ${available} `} onClick={()=>updateInfo(1, 182.43, 73.90, 256.33)}></div>
            
            {/* <img src="/plans/first-floor.webp" alt="Ixora Plan" className="relative" /> */}
            
            <div className="relative">
              <Image 
                loader={imageLoader}
                src='/plans/first-floor.webp'
                alt="Ixora Plan"
                width={3509}
                height={4967}  
              ></Image>
            </div>

          </div>


        </div>
      </>
    )
}
  
