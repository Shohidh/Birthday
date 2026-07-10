export default function Card({ children, className = '' }) { return <article className={`rounded-3xl bg-white/80 p-6 shadow-xl shadow-[#8da85a]/10 backdrop-blur ${className}`}>{children}</article>; }
