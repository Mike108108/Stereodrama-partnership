import { useCallback, useEffect, useRef, useState } from 'react';
import { slideMeta, TOTAL_SLIDES } from '../data/slides';

const SWIPE_THRESHOLD = 50;

function parseHash(): number {
  const hash = window.location.hash.replace('#', '');
  const match = slideMeta.find((s) => s.hash === hash);
  return match ? match.id - 1 : 0;
}

export function usePresentation() {
  const [currentIndex, setCurrentIndex] = useState(parseHash);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1));
    setCurrentIndex(clamped);
    const hash = slideMeta[clamped].hash;
    window.history.replaceState(null, '', `#${hash}`);
  }, []);

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', `#${slideMeta[0].hash}`);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentIndex(parseHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX < 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev],
  );

  return {
    currentIndex,
    currentSlide: currentIndex + 1,
    totalSlides: TOTAL_SLIDES,
    goTo,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchEnd,
    canGoNext: currentIndex < TOTAL_SLIDES - 1,
    canGoPrev: currentIndex > 0,
  };
}
