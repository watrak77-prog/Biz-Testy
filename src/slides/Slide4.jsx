import Slide from '../components/Slide';
import Step from '../components/Step';

const items = [
    { label: 'Paliwo (12 000 km rocznie)', amount: '6 240', color: 'text-error' },
    { label: 'Eksploatacja i chemia', amount: '600', color: 'text-error' },
];

export default function Slide4({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-5xl mx-auto space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-accent">Analiza Roczna</h2>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white italic">
                        TCO <span className="text-text-muted not-italic">— Rok 1</span>
                    </h1>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="glass-card flex items-center justify-between px-12 py-8 rounded-2xl">
                                <span className="text-xl md:text-2xl font-medium text-white/90">{item.label}</span>
                                <span className={`text-3xl font-black font-mono ${item.color}`}>
                                    {item.amount} <span className="text-lg opacity-60">PLN</span>
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>

                <Step visible={step >= 3} className="mt-8">
                    <div className="text-center py-16 px-12 rounded-[2.5rem] bg-error/5 border border-error/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-error/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-mono tracking-[0.4em] uppercase text-text-muted block mb-6">
                            Całkowity Koszt (Zakup + Rok 1)
                        </span>
                        <span className="text-7xl md:text-8xl font-black text-error text-glow">
                            28 520 <span className="text-3xl font-mono">PLN</span>
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}

