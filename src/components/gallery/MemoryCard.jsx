import { motion } from 'framer-motion';

export default function MemoryCard({ photo, onClick }) {
    return (
        <motion.button
            layout
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="focus-ring group relative block w-full overflow-hidden rounded-2xl text-left shadow-lg"
        >
            <img
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-105"
                src={photo.src}
                alt={photo.caption}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-12 text-sm font-medium text-white">
                {photo.caption}
            </span>
        </motion.button>
    );
}
