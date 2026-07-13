import styles from './SlideNumber.module.css';

interface SlideNumberProps {
  current: number;
  total: number;
}

export function SlideNumber({ current, total }: SlideNumberProps) {
  const formatted = String(current).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');

  return (
    <div className={styles.number} aria-label={`Слайд ${current} из ${total}`}>
      <span className={styles.current}>{formatted}</span>
      <span className={styles.separator}>/</span>
      <span className={styles.total}>{totalFormatted}</span>
    </div>
  );
}
