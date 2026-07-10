import { motion } from 'framer-motion';
import { CONFIG } from '../../config/config';
import MemoryCard from './MemoryCard';

export default function GalleryGrid({ open }) {
    return (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {CONFIG.photos.map((p, i) => (
                <motion.div
                    key={p.src}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.0, delay: i * 0.25, ease: 'easeOut' }}
                    className="mb-4 break-inside-avoid"
                >
                    <MemoryCard photo={p} onClick={() => open(i)} />
                </motion.div>
            ))}
        </div>
    );
}
