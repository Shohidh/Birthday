import { CONFIG } from '../../config/config';

export default function SunflowerMedia() {
  if (CONFIG.media.sunflowerVideo) {
    return <video className="absolute bottom-20 left-4 hidden w-32 rounded-3xl border-4 border-white/70 shadow-xl md:block" autoPlay muted loop playsInline aria-label="Sunflower animation"><source src={CONFIG.media.sunflowerVideo} type="video/webm" /></video>;
  }

  return <img className="absolute bottom-16 left-4 hidden w-24 rounded-full bg-white/45 p-1 shadow-xl md:block" src={CONFIG.media.sunflowerGif} alt="Animated sunflower" />;
}
