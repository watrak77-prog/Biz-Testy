import Slide from '../components/Slide';
import Step from '../components/Step';

export default function Slide2({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="text-center space-y-24 w-full max-w-6xl">
                <div className="space-y-4">
                    <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-accent mb-2">
                        Strategia Finansowa
                    </h2>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white">
                        Podział budżetu
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <Step visible={step >= 1}>
                        <div className="glass-card p-16 rounded-[2rem] flex flex-col items-center gap-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
                            <span className="text-sm font-mono tracking-[0.2em] uppercase text-text-muted">
                                Aktywa: Zakup
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-7xl md:text-8xl font-black text-white group-hover:text-glow transition-all">
                                    16 000
                                </span>
                                <span className="text-xl font-mono text-accent font-bold">PLN</span>
                            </div>
                            <span className="text-2xl font-semibold text-white/90 px-6 py-2 rounded-full border border-white/10 bg-white/5">
                                BMW Serii 1
                            </span>
                        </div>
                    </Step>

                    <Step visible={step >= 2}>
                        <div className="glass-card p-16 rounded-[2rem] flex flex-col items-center gap-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-warn/40" />
                            <span className="text-sm font-mono tracking-[0.2em] uppercase text-text-muted">
                                Rezerwa Operacyjna
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-7xl md:text-8xl font-black text-white group-hover:text-glow transition-all">
                                    14 000
                                </span>
                                <span className="text-xl font-mono text-warn font-bold">PLN</span>
                            </div>
                            <span className="text-2xl font-semibold text-warn/90 px-6 py-2 rounded-full border border-warn/20 bg-warn/5 uppercase tracking-wider">
                                Żelazna rezerwa
                            </span>
                        </div>
                    </Step>
                </div>
            </div>
        </Slide>
    );
}

