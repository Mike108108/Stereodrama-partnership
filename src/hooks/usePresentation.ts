import { useCallback, useEffect, useRef, useState } from 'react';
import { slideMeta, TOTAL_SLIDES } from '../data/slides';

const SWIPE_THRESHOLD = 50;
const AXIS_LOCK_THRESHOLD = 10;

function parseHash(): number {
  const hash = window.location.hash.replace('#', '');
  const match = slideMeta.find((s) => s.hash === hash);
  return match ? match.id - 1 : 0;
}

export function usePresentation() {
  const [currentIndex, setCurrentIndex] = useState(parseHash);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchLockedAxis = useRef<'horizontal' | 'vertical' | null>(null);

  const resetTouchState = useCallback(() => {
    touchLockedAxis.current = null;
  }, []);

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

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      resetTouchState();
    },
    [resetTouchState],
  );

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchLockedAxis.current !== null) {
      return;
    }

    const deltaX = e.touches[0].clientX - touchStartX.current;
    const deltaY = e.touches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) < AXIS_LOCK_THRESHOLD && Math.abs(deltaY) < AXIS_LOCK_THRESHOLD) {
      return;
    }

    touchLockedAxis.current =
      Math.abs(deltaY) > Math.abs(deltaX) ? 'vertical' : 'horizontal';
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      if (
        touchLockedAxis.current === 'horizontal' &&
        Math.abs(deltaX) > SWIPE_THRESHOLD
      ) {
        if (deltaX < 0) goNext();
        else goPrev();
      } else if (
        touchLockedAxis.current === null &&
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > SWIPE_THRESHOLD
      ) {
        if (deltaX < 0) goNext();
        else goPrev();
      }

      resetTouchState();
    },
    [goNext, goPrev, resetTouchState],
  );

  const handleTouchCancel = useCallback(() => {
    resetTouchState();
  }, [resetTouchState]);

  return {
    currentIndex,
    currentSlide: currentIndex + 1,
    totalSlides: TOTAL_SLIDES,
    goTo,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
    canGoNext: currentIndex < TOTAL_SLIDES - 1,
    canGoPrev: currentIndex > 0,
  };
}
