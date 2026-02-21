import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import Step from '../components/Step';

const points = [
    { label: 'Zakup', value: '16 000', year: 'Dziś', color: 'accent' },
    { label: 'Po 1. roku', value: '14 500', year: '+1 rok', color: 'warn' },
    { label: 'Po 2. roku', value: '13 000', year: '+2 lata', color: 'error' },
];

const colorMap = {
    accent: { text: 'text-accent', bg: 'bg-accent', border: 'border-accent/40', shadow: 'shadow-accent/30' },
    warn: { text: 'text-warn', bg: 'bg-warn', border: 'border-warn/40', shadow: 'shadow-warn/30' },
    error: { text: 'text-error', bg: 'bg-error', border: 'border-error/40', shadow: 'shadow-error/30' },
};

export default function Slide6({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-24">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-text-muted">Projekcja Finansowa</h2>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-2">
                        Utrata wartości
                    </h1>
                </div>

                <div className="relative w-full px-12">
                    {/* Top row: values */}
                    <div className="flex items-end justify-between mb-14 relative z-10">
                        {points.map((point, i) => (
                            <Step key={`val-${i}`} visible={step >= i + 1} className="flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="glass-card px-8 py-6 rounded-2xl flex flex-col items-center group">
                                        <span className={`text-5xl md:text-6xl font-black font-mono tracking-tighter ${colorMap[point.color].text} group-hover:text-glow transition-all`}>
                                            {point.value}
                                        </span>
                                        <span className="text-xs font-mono text-text-muted mt-2 uppercase tracking-widest">PLN</span>
                                    </div>
                                </div>
                            </Step>
                        ))}
                    </div>

                    {/* Middle row: line + dots */}
                    <div className="relative flex items-center justify-between">
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10" />
                        <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-accent via-warn to-error rounded-full shadow-glow"
                            initial={{ width: '0%' }}
                            animate={{ width: step >= 3 ? '100%' : step === 2 ? '50%' : '0%' }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />

                        {points.map((point, i) => (
                            <div key={`dot-${i}`} className="flex-1 flex justify-center relative z-20">
                                <motion.div
                                    className={`w-5 h-5 rounded-full border-4 border-surface ${colorMap[point.color].bg} shadow-lg ${colorMap[point.color].shadow}`}
                                    initial={{ scale: 0 }}
                                    animate={step >= i + 1 ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom row: labels + deltas */}
                    <div className="flex items-start justify-between mt-14">
                        {points.map((point, i) => (
                            <Step key={`label-${i}`} visible={step >= i + 1} className="flex-1">
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-sm font-mono font-bold tracking-[0.2em] text-text-muted uppercase italic">
                                        {point.year}
                                    </span>
                                    {i > 0 && (
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 border border-error/20">
                                            <span className="text-lg font-black font-mono text-error">
                                                −{(parseInt(points[i - 1].value.replace(/\s/g, '')) - parseInt(point.value.replace(/\s/g, ''))).toLocaleString('pl-PL')}
                                            </span>
                                            <span className="text-xs font-mono text-error/60">PLN</span>
                                        </div>
                                    )}
                                </div>
                            </Step>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}

