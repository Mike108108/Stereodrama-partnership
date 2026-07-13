import { slide4 } from '../data/slides';
import styles from './Slide4.module.css';

interface Slide4Props {
  isActive: boolean;
}

export function Slide4({ isActive: _isActive }: Slide4Props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>{slide4.title}</h1>

      <div className={styles.valueGrid}>
        {slide4.groups.map((group) => (
          <section key={group.index} className={styles.valueGroup}>
            <div className={styles.groupHeader}>
              <span className={styles.groupIndex}>{group.index}</span>

              <span className={styles.groupLabel}>{group.label}</span>
            </div>

            <div className={styles.benefitList}>
              {group.benefits.map((benefit) => (
                <div key={benefit} className={styles.benefitItem}>
                  {benefit}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
