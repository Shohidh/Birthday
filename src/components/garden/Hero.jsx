import { motion } from 'framer-motion';
import Button from '../common/Button';

export default function Hero() {
  const letters = 'Happy Birthday'.split('');

  return <section id="top" className="relative z-20 flex min-h-screen flex-col items-center justify-center px-5 pt-18 text-center">
    <motion.p className="mb-3 text-sm font-bold tracking-[.25em] text-[#497528]" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>A DAY MADE FOR YOU</motion.p>
    <div className="relative grid w-full max-w-5xl place-items-center py-10 sm:py-14">
      <h1 className="serif max-w-5xl text-center text-5xl font-bold leading-[.9] text-[#355c23] sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem]">
        {letters.map((letter, index) => <motion.span key={`${letter}-${index}`} className="inline-block" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: [0, -3, 0] }} transition={{ opacity: { delay: 1.0 + index * .32, duration: 3.6 }, y: { delay: 4.0 + index * .32, duration: 5.2, repeat: Infinity, ease: 'easeInOut' } }}>{letter === ' ' ? '\u00a0' : letter}</motion.span>)}
      </h1>
      <motion.div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" initial={{ opacity: 0, scale: .8, rotate: -4 }} animate={{ opacity: 1, scale: [1, 1.02, 1], rotate: [-4, -2.5, -4] }} transition={{ opacity: { delay: 6.5, duration: 1.2 }, scale: { delay: 6.5, duration: 6.4, repeat: Infinity, ease: 'easeInOut' }, rotate: { delay: 6.5, duration: 6.4, repeat: Infinity, ease: 'easeInOut' } }}>
        <span className="calligraphy whitespace-nowrap px-2 text-7xl leading-none text-[#f0b52a] drop-shadow-[0_3px_0_#fff] sm:text-9xl md:text-[8.5rem]">Shameen</span>
      </motion.div>
      <motion.span aria-hidden="true" className="pointer-events-none absolute left-2 top-[62%] text-3xl sm:left-8 sm:text-4xl" animate={{ y: [0, -7, 0], rotate: [-4, 4, -4] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>🌻</motion.span>
      <motion.span aria-hidden="true" className="pointer-events-none absolute right-2 top-[27%] text-3xl sm:right-9 sm:text-4xl" animate={{ y: [0, 7, 0], rotate: [4, -4, 4] }} transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: .2 }}>🌻</motion.span>
    </div>
    <motion.p className="mt-1 max-w-md text-lg text-[#496d37]" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9, duration: .6 }}>You make every day bloom brighter.</motion.p>
    <Button className="mt-8" onClick={() => document.querySelector('#memories').scrollIntoView({ behavior: 'smooth' })}>Enter Garden ↓</Button>
  </section>;
}
