import Slide from '../components/Slide';
import Step from '../components/Step';
import AnimatedNumber from '../components/AnimatedNumber';

const costs = [
    { label: 'Rejestracja i podatek PCC', amount: 480 },
    { label: 'Ubezpieczenie OC (młody kierowca)', amount: 2500 },
    { label: 'Podstawowy serwis (olej, filtry, klocki)', amount: 1500 },
    { label: 'Komplet nowych opon', amount: 1200 },
];

function getReserve(step) {
    let reserve = 14000;
    for (let i = 0; i < Math.min(step, costs.length); i++) {
        reserve -= costs[i].amount;
    }
    return reserve;
}

export default function Slide3({ step, direction }) {
    const reserve = getReserve(step);

    return (
        <Slide direction={direction}>
            <div className="w-full max-w-6xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pb-12 border-b border-white/10">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-accent">Operacja: Wstęp</h2>
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">Pakiet startowy</h1>
                    </div>

                    <div className="glass-card px-10 py-6 rounded-2xl flex flex-col items-center md:items-end group">
                        <span className="text-xs font-mono tracking-[0.2em] uppercase text-text-muted mb-2">Fundusz Rezerwowy</span>
                        <AnimatedNumber
                            value={reserve}
                            className={`text-6xl font-black tabular-nums transition-colors duration-500 ${reserve < 10000 ? 'text-warn' : 'text-accent'
                                }`}
                            suffix=" PLN"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {costs.map((cost, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="glass-card flex items-center justify-between px-8 py-6 rounded-2xl group relative overflow-hidden">
                                <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">{cost.label}</span>
                                <span className="text-2xl font-black text-warn font-mono">
                                    -{cost.amount.toLocaleString('pl-PL')}
                                    <span className="text-sm ml-2 opacity-60">PLN</span>
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>

                <Step visible={step >= 5} className="mt-8">
                    <div className="text-center py-16 px-12 rounded-[2.5rem] bg-accent/5 border border-accent/20 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-accent/40 rounded-full" />
                        <span className="text-sm font-mono tracking-[0.5em] uppercase text-text-muted block mb-6">
                            Stan Portfela
                        </span>
                        <span className="text-7xl md:text-9xl font-black text-accent text-glow">
                            8 320 <span className="text-3xl font-mono">PLN</span>
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}

