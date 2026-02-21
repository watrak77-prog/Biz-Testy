import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function AnimatedNumber({ value, className = '', prefix = '', suffix = '' }) {
    const spring = useSpring(value, { stiffness: 50, damping: 20, mass: 1 });
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    useEffect(() => {
        const unsubscribe = spring.on('change', (v) => {
            setDisplay(Math.round(v));
        });
        return unsubscribe;
    }, [spring]);

    return (
        <motion.span className={className}>
            {prefix}{display.toLocaleString('pl-PL')}{suffix}
        </motion.span>
    );
}
