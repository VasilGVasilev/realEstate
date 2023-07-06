'use client'
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


const Modal = ({ isOpen, onClose, apartment, unit }) => {

    if (!isOpen) return null;
    const pathname = usePathname();

    const parking = pathname === '/en/apartments/parking/' || pathname === '/bg/apartments/parking/'
    const firstOrLastFloor = pathname === '/en/apartments/first-floor/' || pathname === '/en/apartments/penthouse/' || pathname === '/bg/apartments/first-floor/' || pathname === '/bg/apartments/penthouse/'
    const secondOrThirdFloor = pathname === '/en/apartments/second-floor/' || pathname === '/en/apartments/third-floor/' || pathname === '/bg/apartments/second-floor/' || pathname === '/bg/apartments/third-floor/'

    const t = useTranslations('Modal');



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div 
                className="flex flex-col bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Add your modal content here */}
                <>
                    {parking &&
                        <>
                            <div className='mb-8 bg-ixora-orange'>
                                <div className="p-4 text-white text-center text-2xl font-extrabold">{t.ploshtoobrazuvane} <br /> {unit?.mqsto}</div>
                            </div>
                            <div className="mb-5 border-r-2 border-l-2 border-ixora-orange text-center" >
                                <div className="flex justify-center space-x-3 ">
                                    <div>{t.plosht}</div>
                                    <div className="font-bold text-ixora-orange">{unit?.plosht} {t.m2}</div>
                                </div>
                            </div>
                        </>
                    }

                    {firstOrLastFloor &&
                    <>
                    
                        <div className='mb-8 bg-ixora-orange'>
                            <div className="p-4 text-white text-center text-2xl font-extrabold">{t.ploshtoobrazuvane} <br /> {t.ap} {apartment?.ap}</div>
                        </div>
                        <div className="mb-5 border-r-2 border-l-2 border-ixora-orange text-center" >
                            <div className="flex justify-center space-x-3 ">
                                <div>{t.plosht}</div>
                                <div className="font-bold text-ixora-orange">{apartment?.plosht} {t.m2}</div>
                            </div>
                            <div className="font-bold"> + </div>
                            <div className="flex justify-center space-x-3 ">
                                <div>{t.dvor}</div>
                                <div className="font-bold text-ixora-orange">{apartment?.dvor} {t.m2}</div>
                            </div>
                            <div className="font-bold"> = </div>
                            <div className="flex justify-center space-x-3 ">
                                <div>{t.obshtaplosht}</div>
                                <div className="font-bold text-ixora-orange">{apartment?.total} {t.m2}</div>
                            </div>
                        </div>
                    </>
                    }
                    
                    {secondOrThirdFloor &&
                        <>
                            <div className='mb-8 bg-ixora-orange'>
                                <div className="p-4 text-white text-center text-2xl font-extrabold">{t.ploshtoobrazuvane} <br /> {t.ap} {apartment?.ap}</div>
                            </div>
                            <div className="mb-5 border-r-2 border-l-2 border-ixora-orange text-center" >
                                <div className="flex justify-center space-x-3 ">
                                    <div>{t.plosht}</div>
                                    <div className="font-bold text-ixora-orange">{apartment?.plosht} {t.m2}</div>
                                </div>
                                <div className="font-bold"> + </div>
                                <div className="flex justify-center space-x-3 ">
                                    <div>( {t.zp}</div>
                                    <div className="font-bold text-ixora-orange">{apartment?.zp} {t.m2})</div>
                                </div>
                            </div>
                        </>
                    }

                </>
                <button
                    className="mt-4 px-4 py-2 bg-ixora-orange text-white rounded"
                    onClick={onClose}
                >
                    X
                </button>
            </motion.div>
        </div >
    )
}

export default Modal
