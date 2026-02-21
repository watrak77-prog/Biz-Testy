import Slide from '../components/Slide';
import Step from '../components/Step';

const conclusions = [
    {
        number: '1',
        text: 'Ubezpieczenie dla młodych to często 15–20% wartości całego auta.',
    },
    {
        number: '2',
        text: 'Koszty ukryte pożerają budżet szybciej niż samo paliwo.',
    },
    {
        number: '3',
        text: 'Gotówka na zakup auta to zaledwie 55% pełnego sukcesu.',
    },
];

export default function Slide7({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-5xl mx-auto space-y-24">
                <div className="space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-[0.4em] uppercase text-accent">Podsumowanie</h2>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-2">
                        Co nas <span className="text-accent underline decoration-accent/30 underline-offset-8">zaskoczyło</span>?
                    </h1>
                </div>

                <div className="space-y-6">
                    {conclusions.map((item, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="glass-card flex items-center gap-12 px-12 py-10 rounded-[2rem] border-white/5 bg-white/[0.02] group transition-all duration-500 hover:scale-[1.02]">
                                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-3xl font-black text-accent shadow-glow group-hover:scale-110 transition-transform">
                                    {item.number}
                                </div>
                                <span className="text-2xl md:text-3xl font-medium leading-tight text-white/90 group-hover:text-white">
                                    {item.text}
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>
            </div>
        </Slide>
    );
}

