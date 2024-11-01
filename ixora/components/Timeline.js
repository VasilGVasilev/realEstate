import { lato } from "@/utils/fonts";
import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const bubbleVariant = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
};

const Bubble = ({ title, subtitle, opacity, gradientDone }) => {
    const gradientDoneClass = gradientDone ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-60% to-orange-400 to-100%';
    return (
      <motion.div 
        className={` p-5 m-7 h-36 w-36 lg:m-5 lg:h-52 lg:w-52 ${gradientDoneClass} text-white font-semibold flex justify-center items-center`}  
        variants={bubbleVariant}
        style={{ opacity: opacity }}
        >
            <div className={`${lato.className} timelineBubble text-center`} >
                <div className="text-xl lg:text-2xl">
                    {title}
                </div>
                <div className="text-sm lg:text-base">
                    {subtitle}
                </div>
            </div>
      </motion.div>
    );
  };

const Timeline = () => {
    return (
        <motion.div
            className="flex flex-col items-center md:flex-row md:justify-around bg-ixora-yellow p-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <Bubble title={'Юни 2021'} subtitle={'Проектиране и регулация'} opacity={0.5} gradientDone={true}></Bubble>
            <Bubble title={'Юни 2022'} subtitle={'РС, строителна площадка и първа копка'} opacity={0.5} gradientDone={true}></Bubble>
            <Bubble title={'Март 2023'} subtitle={'Груб строеж завършен Акт 14'} opacity={0.5} gradientDone={true}></Bubble>
            <Bubble title={'Декември 2024'} subtitle={'Въвеждане в експлоатация Акт 16'} opacity={1} gradientDone={false}></Bubble>

        </motion.div>

    )
}

export default Timeline
