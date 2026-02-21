import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import PresentationBackground from './components/PresentationBackground';

// Steps per slide (how many clicks each slide consumes)
const SLIDE_STEPS = [1, 2, 5, 3, 3, 3, 3, 1];

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const lockRef = useRef(false);
  const cursorTimeoutRef = useRef(null);

  // Cursor auto-hide
  useEffect(() => {
    const handleMouseMove = () => {
      document.body.classList.remove('cursor-hidden');
      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
      cursorTimeoutRef.current = setTimeout(() => {
        document.body.classList.add('cursor-hidden');
      }, 2000);
    };

    // Hide cursor initially
    document.body.classList.add('cursor-hidden');
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
    };
  }, []);

  const advance = useCallback(() => {
    if (lockRef.current) return;

    const maxSteps = SLIDE_STEPS[currentSlide];
    if (currentStep < maxSteps) {
      setCurrentStep((s) => s + 1);
    } else if (currentSlide < SLIDES.length - 1) {
      lockRef.current = true;
      setDirection(1);
      setCurrentSlide((s) => s + 1);
      setCurrentStep(0);
      setTimeout(() => {
        lockRef.current = false;
      }, 650);
    }
  }, [currentSlide, currentStep]);

  const goBack = useCallback(() => {
    if (lockRef.current) return;

    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    } else if (currentSlide > 0) {
      lockRef.current = true;
      setDirection(-1);
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      setCurrentStep(SLIDE_STEPS[prevSlide]);
      setTimeout(() => {
        lockRef.current = false;
      }, 650);
    }
  }, [currentSlide, currentStep]);

  // Block context menu globally
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Mouse clicks
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (e.button === 0) {
        // LPM — forward
        advance();
      } else if (e.button === 2) {
        // RPM — back
        goBack();
      }
    };
    window.addEventListener('mousedown', handleMouseDown);
    return () => window.removeEventListener('mousedown', handleMouseDown);
  }, [advance, goBack]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        advance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [advance, goBack]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="w-screen h-screen bg-surface overflow-hidden relative">
      <PresentationBackground />

      {/* Slide indicator */}
      <div className="absolute top-6 right-8 z-50 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide
              ? 'w-8 bg-accent'
              : i < currentSlide
                ? 'w-3 bg-white/30'
                : 'w-3 bg-white/10'
              }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <CurrentSlideComponent key={currentSlide} step={currentStep} direction={direction} />
      </AnimatePresence>
    </div>
  );
}
