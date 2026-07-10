import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sky from '../components/garden/Sky';
import Hero from '../components/garden/Hero';
import SunflowerField from '../components/garden/SunflowerField';
import GardenGate from '../components/garden/GardenGate';
import Butterflies from '../components/Butterflies';
import Bee from '../components/Bee';
import Clouds from '../components/Clouds';
import FloatingPetals from '../components/FloatingPetals';
import GalleryGrid from '../components/gallery/GalleryGrid';
import PhotoModal from '../components/gallery/PhotoModal';
import Letter from '../components/letter/Letter';
import BirthdayCake from '../components/cake/BirthdayCake';
import MusicPlayer from '../components/effects/MusicPlayer';
import Fireworks from '../components/effects/Fireworks';

export default function GardenPage() {
  const [photo, setPhoto] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [finale, setFinale] = useState(false);
  const flower = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next === 10) setFinale(true);
  };

  return <main className="garden-bg isolate min-h-screen">
    <Navbar />
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-45">
      <Clouds /><FloatingPetals count={20} />
    </div>
    <div className="relative z-10">
      <section className="relative min-h-screen overflow-hidden">
        <Sky /><Butterflies /><Bee /><FloatingPetals /><Hero /><GardenGate />
        <SunflowerField onSunflowerClick={flower} />
      </section>
      <section id="memories" className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-bold tracking-[.2em] text-[#819a42]">SAVED SUNSHINE</p>
          <h2 className="serif mb-10 text-center text-4xl font-bold">A garden of memories</h2>

          <GalleryGrid open={setPhoto} />
        </div>
      </section>
      <Letter />
      <BirthdayCake onBlow={() => setFinale(true)} />
      <Footer /><MusicPlayer /><PhotoModal index={photo} setIndex={setPhoto} />
      {finale && <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-[#26441d]/95 p-5 text-center text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Fireworks />
        <div>
          <img className="mx-auto mb-8 max-w-[40%] rounded-3xl shadow-xl" src={new URL('../assets/cat.jpg', import.meta.url).href} alt="Cat" />
          <span className="text-6xl">Shameen</span><h2 className="serif mt-4 text-5xl font-bold">Happy Birthday</h2><p className="mt-3 text-white/80">You are as bright as every sunflower in this garden.</p><button onClick={() => { setFinale(false); setClicks(0); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="focus-ring mt-8 rounded-full bg-[#f8c537] px-6 py-3 font-bold text-[#38551c]">Replay Journey</button></div>
      </motion.div>}
    </div>
  </main>;
}
