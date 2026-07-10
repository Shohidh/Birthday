import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../../config/config';
import Button from '../common/Button';

export default function LoginCard({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    if (password === CONFIG.password) onSuccess();
    else setError(true);
  };

  return <motion.form onSubmit={submit} animate={error ? { x: [0, -10, 10, -7, 7, 0] } : {}} onAnimationComplete={() => setError(false)} className="w-[min(92vw,410px)] rounded-[2rem] border border-white/80 bg-white/60 p-7 shadow-2xl shadow-[#476a21]/20 backdrop-blur-xl">
    <div className="mb-5 text-center"><motion.span className="sunflower" animate={{ rotate: [-5, 5, -5], y: [0, -5, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>{'\u{1F33B}'}</motion.span><h1 className="serif text-3xl font-bold">Welcome, {CONFIG.name}</h1><p className="mt-1 text-sm text-[#58783c]">A little garden is waiting for you.</p></div>
    <label className="block text-sm font-semibold">Secret word<input required type="password" aria-label="Secret word" value={password} onChange={(event) => setPassword(event.target.value)} className="focus-ring mt-1 w-full rounded-xl border border-[#d7e4bd] bg-white/80 px-4 py-3 outline-none" placeholder="••••••••" autoFocus /></label>
    {error && <p role="alert" className="mt-3 text-center text-sm text-red-600">The flowers don't recognize you 🌻</p>}
    <Button className="mt-6 w-full" type="submit">Enter the garden</Button>
  </motion.form>;
}
