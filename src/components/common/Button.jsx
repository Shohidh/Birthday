import { motion } from 'framer-motion';
export default function Button({ children, className = '', ...props }) { return <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} className={`focus-ring rounded-full bg-[#f8c537] px-6 py-3 font-bold text-[#3f4a16] shadow-lg shadow-yellow-600/20 transition ${className}`} {...props}>{children}</motion.button>; }
