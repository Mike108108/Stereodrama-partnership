import styles from './DecorativeBackground.module.css';

export type DecorativeBackgroundVariant = 'default' | 'center' | 'right' | 'gradient' | 'matte';

interface DecorativeBackgroundProps {
  variant?: DecorativeBackgroundVariant;
}

export function DecorativeBackground({ variant = 'default' }: DecorativeBackgroundProps) {
  const isClean = variant === 'gradient' || variant === 'matte';

  return (
    <div className={`${styles.bg} ${styles[variant]}`} aria-hidden="true">
      {isClean ? null : (
        <>
          <div className={styles.glowTop} />
          <div className={styles.glowBottom} />
        </>
      )}
      {isClean ? null : (
        <>
          <div className={styles.ring} />
          <div className={styles.ringSmall} />
        </>
      )}
    </div>
  );
}
