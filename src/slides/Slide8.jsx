import Slide from '../components/Slide';
import Step from '../components/Step';

const sources = [
    'Otomoto',
    'OLX Motoryzacja',
    'Rankomat',
    'mfind',
];

export default function Slide8({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-32">
                <div className="w-full space-y-12 text-center">
                    <h2 className="text-sm font-mono tracking-[0.5em] uppercase text-text-muted mb-8 italic">
                        Biblioteka Danych
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {sources.map((source, i) => (
                            <span
                                key={i}
                                className="px-10 py-5 rounded-2xl glass-card text-xl text-white/80 font-bold tracking-tight border-white/10 hover:border-accent/40 hover:text-accent transition-all duration-300"
                            >
                                {source}
                            </span>
                        ))}
                    </div>
                </div>

                <Step visible={step >= 1}>
                    <div className="text-center group cursor-pointer">
                        <span className="text-[6rem] md:text-[10rem] font-black text-white tracking-tighter leading-none group-hover:text-glow transition-all duration-700">
                            DZIĘKUJEMY<br />ZA UWAGĘ
                        </span>
                        <div className="w-48 h-1 bg-accent mx-auto mt-12 rounded-full shadow-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                    </div>
                </Step>
            </div>
        </Slide>
    );
}

