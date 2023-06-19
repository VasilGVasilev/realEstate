import { motion } from "framer-motion";


const LineGradient = () => {
    return (
        <motion.div 
          className={`h-2 bg-gradient-ixora`} 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        />
    )
  };
  
export default LineGradient;