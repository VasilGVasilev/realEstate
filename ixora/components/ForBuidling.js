import { lato } from "@/utils/fonts";
import { motion } from "framer-motion"
import { useTranslations } from "next-intl";
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const rowVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};
// TODO: motion.div animation apply
const ForBuilding = () => {
    const t = useTranslations('forBuilding');
    return (
        <>
        <div className={`bg-orange-50 ${lato.className} p-10 md:px-32 xl:px-72`}>
            <div className=" w-full h-fit ">

                <motion.ul 
                    className="p-5 border-r-2 border-t-2 border-ixora-orange"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={rowVariant}
                    >
                        <p className="sm:text-xl text-ixora-orange font-semibold">{t('fasade')}</p>
                        <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('fasadeDesc')}</li>
                        <br />
                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('lobby')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('lobbyDesc')}</li>
                    <br />
                    
                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('joinery')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('joineryDesc')}</li>
                    <br />
                    
                    </motion.div>
                    <motion.div
                        variants={rowVariant}
                    >
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('elevator')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('elevatorDesc')} </li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('doors')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('doorsDesc')}</li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('plumbing')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('plumbingDesc')}</li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('heating')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('heatingDesc')}</li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('garages')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('garagesDesc')}</li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('security')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('securityDesc')} </li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('amenities')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('amenitiesDesc')}</li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('location')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">🚗 {t('withCar')}: <br /> ↪ {t('proia')} <br /> ↪ {t('britanica')} <br /> ↪ {t('supermarket')} <br /> ↪ {t('mall1')} <br /> ↪ {t('mall2')} </li>
                    <br />
                    
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">🚌 {t('public')}: <br /> {t('buses')}</li>
                    <br />
                    
                    </motion.div>
                                        <motion.div
                        variants={rowVariant}
                    >
                    <p className="sm:text-xl text-ixora-orange font-semibold">{t('landscaping')}</p>
                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">{t('landscapingDesc')}</li>
                    </motion.div>
                </motion.ul>
            </div>
        </div>
        </>
    )
}

export default ForBuilding
