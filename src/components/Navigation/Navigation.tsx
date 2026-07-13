import styles from './Navigation.module.css';

interface NavigationProps {
  currentIndex: number;
  total: number;
  onGoTo: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export function Navigation({
  currentIndex,
  total,
  onGoTo,
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
}: NavigationProps) {
  return (
    <nav className={styles.nav} aria-label="Навигация по слайдам">
      <button
        className={styles.arrow}
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Предыдущий слайд"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.dots} role="tablist" aria-label="Слайды">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Слайд ${i + 1}`}
            className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
            onClick={() => onGoTo(i)}
          />
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Следующий слайд"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}
