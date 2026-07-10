import { motion } from 'framer-motion';

export default function Sun() {
  return <div aria-hidden="true" className="sun-realistic absolute right-[8%] top-24 md:right-[16%]">
    <motion.div className="sun-rays" animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}>
      {Array.from({ length: 12 }, (_, index) => <i key={index} className="sun-ray" style={{ transform: `rotate(${index * 30}deg) translateY(-125%)` }} />)}
    </motion.div>
    <motion.div className="sun-core" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
  </div>;
}
