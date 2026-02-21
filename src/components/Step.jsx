import { motion } from 'framer-motion';

export default function Step({ visible, children, className = '', delay = 0 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.5,
                delay: visible ? delay : 0,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{ pointerEvents: visible ? 'auto' : 'none' }}
        >
            {children}
        </motion.div>
    );
}
