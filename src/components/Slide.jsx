import { motion } from 'framer-motion';

const slideVariants = {
    enter: (direction) => ({
        opacity: 0,
        scale: 0.95,
        y: direction > 0 ? 20 : -20,
        filter: 'blur(10px)',
    }),
    center: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
    },
    exit: (direction) => ({
        opacity: 0,
        scale: 1.05,
        y: direction > 0 ? -20 : 20,
        filter: 'blur(10px)',
    }),
};

export default function Slide({ children, className = '', direction = 1 }) {
    return (
        <motion.div
            className={`absolute inset-0 flex flex-col items-center justify-center px-20 py-16 ${className}`}
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.6 }
            }}
        >
            {children}
        </motion.div>
    );
}
