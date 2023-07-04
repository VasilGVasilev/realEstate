import { motion } from "framer-motion"
import { useTranslations } from "next-intl";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
const WelcomeText = () => {
    const t = useTranslations('Home');
    const animatedDescriptionText = t('WelcomeTextDescription').split(' ');
    return (
        <motion.div
            className="text-justify font-semibold text-gray-700"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6 }}

        >
            {animatedDescriptionText.map((element, index)=>(
                <motion.span key={index} variants={letterVariant}> {element}</motion.span>

            ))}
        </motion.div>
    )
}

export default WelcomeText
