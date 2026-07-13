import type { ReactNode } from 'react';
import { DecorativeBackground, type DecorativeBackgroundVariant } from '../DecorativeBackground';
import { Navigation } from '../Navigation';
import { ProgressBar } from '../ProgressBar';
import { SlideNumber } from '../SlideNumber';
import styles from './SlideLayout.module.css';

interface SlideLayoutProps {
  slideNumber: number;
  totalSlides: number;
  currentIndex: number;
  isActive: boolean;
  onGoTo: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  decorVariant?: DecorativeBackgroundVariant;
  children: ReactNode;
}

export function SlideLayout({
  slideNumber,
  totalSlides,
  currentIndex,
  isActive,
  onGoTo,
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  decorVariant = 'default',
  children,
}: SlideLayoutProps) {
  const resolvedDecorVariant = slideNumber === 3 ? 'matte' : decorVariant;

  return (
    <section
      className={`${styles.slide} ${isActive ? styles.active : ''}`}
      aria-hidden={!isActive}
      data-slide={slideNumber}
    >
      <DecorativeBackground variant={resolvedDecorVariant} />

      <header className={styles.header}>
        <div className={styles.logo}>STEREODRAMA</div>
        <SlideNumber current={slideNumber} total={totalSlides} />
      </header>

      <main className={styles.content}>{children}</main>

      <footer className={styles.footer}>
        <ProgressBar current={slideNumber} total={totalSlides} />
        <Navigation
          currentIndex={currentIndex}
          total={totalSlides}
          onGoTo={onGoTo}
          onNext={onNext}
          onPrev={onPrev}
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
        />
      </footer>
    </section>
  );
}
