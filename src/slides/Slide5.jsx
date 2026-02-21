import Slide from '../components/Slide';
import Step from '../components/Step';

const items = [
    { label: 'Inflacja i rosnące ceny paliwa/części', amount: '6 500', color: 'text-warn' },
    { label: 'Awaria (np. rozrząd/zawieszenie)', amount: '2 500', color: 'text-warn' },
];

export default function Slide5({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-5xl mx-auto space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-warn animate-pulse">Uwaga: Inflacja</h2>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-2">
                        TCO <span className="text-warn">— Rok 2</span>
                    </h1>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="glass-card flex items-center justify-between px-12 py-8 rounded-2xl border-warn/20 bg-warn/5">
                                <span className="text-xl md:text-2xl font-medium text-white/90">{item.label}</span>
                                <span className="text-3xl font-black font-mono text-warn">
                                    {item.amount} <span className="text-lg opacity-60">PLN</span>
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>

                <Step visible={step >= 3} className="mt-8">
                    <div className="text-center py-16 px-12 rounded-[2.5rem] bg-warn/10 border border-warn/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent)]" />
                        <span className="text-sm font-mono tracking-[0.4em] uppercase text-text-muted block mb-6">
                            Utrzymanie: Sam Rok 2
                        </span>
                        <span className="text-7xl md:text-9xl font-black text-warn text-glow">
                            12 000 <span className="text-3xl font-mono">PLN</span>
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}

