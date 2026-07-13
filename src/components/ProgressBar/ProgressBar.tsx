import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className={styles.wrapper} role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>
      <span className={styles.label}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
}
