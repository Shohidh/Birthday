import { useEffect, useRef, useState } from 'react';
import { FiMusic, FiVolumeX } from 'react-icons/fi';
import { CONFIG } from '../../config/config';

export default function MusicPlayer() {
    const [on, setOn] = useState(true);
    const audioRef = useRef(null);
    const onRef = useRef(on);

    useEffect(() => {
        onRef.current = on;
    }, [on]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !CONFIG.music) return;

        const startPlayback = () => {
            if (!onRef.current || !audio) return;

            audio.volume = 1;
            audio.currentTime = 0;

            void audio.play().catch(() => {
                window.setTimeout(() => {
                    if (onRef.current && audio.paused) {
                        void audio.play().catch(() => { });
                    }
                }, 600);
            });
        };

        const handleVisibility = () => {
            if (document.visibilityState === 'visible') {
                startPlayback();
            }
        };

        const timer = window.setTimeout(startPlayback, 300);
        window.addEventListener('focus', startPlayback);
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('focus', startPlayback);
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!CONFIG.music || !audio) return;

        if (on) {
            audio.volume = 1;
            if (audio.paused) {
                void audio.play().catch(() => { });
            }
        } else {
            audio.pause();
        }
    }, [on]);

    const toggle = () => {
        if (!CONFIG.music) return setOn((x) => !x);
        setOn((x) => !x);
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={CONFIG.music}
                preload="auto"
                loop
                playsInline
                className="hidden"
            />
            <button
                onClick={toggle}
                title={CONFIG.music ? 'Toggle music' : 'Add a music path in config.js'}
                aria-label="Toggle music"
                className="focus-ring fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#496d28] text-white shadow-lg"
            >
                {on ? <FiMusic /> : <FiVolumeX />}
            </button>
        </>
    );
}
