import { motion } from 'framer-motion';
export default function Bee(){return <motion.span aria-hidden="true" className="absolute z-10 text-2xl" initial={{left:'7%',top:'72%'}} animate={{left:['7%','78%','55%','7%'],top:['72%','43%','75%','72%']}} transition={{duration:17,repeat:Infinity,ease:'linear'}}>🐝</motion.span>}
