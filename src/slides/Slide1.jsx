import Slide from '../components/Slide';
import Step from '../components/Step';

export default function Slide1({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="flex flex-col items-center justify-center text-center space-y-32 w-full max-w-7xl">
                <div className="space-y-6">
                    <h1 className="text-[10rem] md:text-[14rem] font-black tracking-[-0.04em] leading-[0.8] text-white text-glow">
                        PIERWSZA<br />BRYKA
                    </h1>
                    <p className="text-3xl md:text-5xl font-mono text-accent uppercase tracking-[0.5em] font-medium opacity-80">
                        Pułapka każdego BMW
                    </p>
                </div>

                <Step visible={step >= 1} className="relative">
                    <div className="flex flex-col items-center group">
                        <span className="text-sm font-mono tracking-[0.3em] uppercase text-text-muted mb-8 group-hover:text-accent transition-colors">
                            Kapitał początkowy
                        </span>
                        <div className="relative">
                            <span className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tighter">
                                30 000
                            </span>
                            <span className="absolute -right-16 md:-right-24 bottom-4 md:bottom-8 text-3xl md:text-4xl font-mono text-accent font-bold">
                                PLN
                            </span>
                        </div>
                        <div className="w-32 h-1 bg-accent mt-8 rounded-full shadow-glow" />
                    </div>
                </Step>
            </div>
        </Slide>
    );
}

