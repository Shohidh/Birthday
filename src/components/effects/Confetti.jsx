import { useEffect } from 'react'; import confetti from 'canvas-confetti'; export default function Confetti(){useEffect(()=>{confetti({particleCount:220,spread:130,origin:{y:.65}})},[]);return null}
