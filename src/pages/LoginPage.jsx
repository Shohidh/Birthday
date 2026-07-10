import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginCard from '../components/login/LoginCard';
import Clouds from '../components/Clouds';
import FloatingPetals from '../components/FloatingPetals';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const success = () => {
    setLoading(true);
    setTimeout(() => navigate('/garden'), 2200);
  };

  return <main className="sky relative grid min-h-screen place-items-center overflow-hidden px-4">
    <Clouds /><FloatingPetals />
    {!loading ? <LoginCard onSuccess={success} /> : <AnimatePresence><motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center"><motion.div className="sunflower" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>{'\u{1F33B}'}</motion.div><h1 className="serif text-3xl font-bold">Planting Happiness...</h1><motion.div className="mx-auto mt-5 h-2 w-52 overflow-hidden rounded-full bg-white/70"><motion.div className="h-full bg-[#f8c537]" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }} /></motion.div></motion.div></AnimatePresence>}
  </main>;
}
