import { motion } from 'framer-motion';

const SoftGlow = ({ color, size, initialX, initialY, duration, delay = 0 }) => {
    return (
        <motion.div
            className="absolute rounded-full blur-[180px] opacity-[0.25] pointer-events-none"
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                left: initialX,
                top: initialY,
            }}
            animate={{
                x: [0, 150, -150, 0],
                y: [0, -100, 120, 0],
                scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        />
    );
};

export default function PresentationBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-surface overflow-hidden pointer-events-none">
            {/* Deep base layer */}
            <div className="absolute inset-0 bg-[#020205]" />

            {/* Massive floating glows - Professional Dark Palette */}
            <div className="absolute inset-0 overflow-hidden opacity-60">
                <SoftGlow color="#6366f1" size="80vw" initialX="-20%" initialY="-10%" duration={40} />
                <SoftGlow color="#4c1d95" size="70vw" initialX="40%" initialY="-20%" duration={35} delay={5} />
                <SoftGlow color="#1e40af" size="90vw" initialX="-10%" initialY="40%" duration={45} delay={2} />
                <SoftGlow color="#312e81" size="60vw" initialX="60%" initialY="60%" duration={38} delay={7} />
            </div>

            {/* Grain Overlay for premium texture */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                    filter: 'contrast(120%) brightness(100%)'
                }}
            />

            {/* Cinematic Radial Overlay for focus and depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,5,0.85)_85%)]" />
        </div>
    );
}


