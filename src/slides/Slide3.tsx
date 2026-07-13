import { slide3 } from '../data/slides';
import styles from './Slide3.module.css';

interface Slide3Props {
  isActive: boolean;
}

export function Slide3({ isActive: _isActive }: Slide3Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topZone}>
        <h1 className={styles.title}>
          {slide3.titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>
      </div>

      <div className={styles.contentZone}>
        <section className={styles.formCard}>
          <span className={styles.cardLabel}>{slide3.formLabel}</span>

          <div className={styles.formGrid}>
            {slide3.formFields.map((field) => (
              <div
                key={field.label}
                className={
                  field.span === 'full'
                    ? `${styles.field} ${styles.fieldFull}`
                    : `${styles.field} ${styles.fieldHalf}`
                }
              >
                <span className={styles.fieldLabel}>{field.label}</span>

                <div
                  className={
                    field.type === 'textarea'
                      ? `${styles.fieldControl} ${styles.fieldTextarea}`
                      : field.type === 'upload'
                        ? `${styles.fieldControl} ${styles.fieldUpload}`
                        : field.type === 'select'
                          ? `${styles.fieldControl} ${styles.fieldSelect}`
                          : styles.fieldControl
                  }
                >
                  <span className={styles.fieldValue}>{field.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.formFooter}>
            <span className={styles.formFooterNote}>{slide3.formFooterLabel}</span>

            <button type="button" className={styles.formAction}>
              {slide3.formFooterAction}
            </button>
          </div>
        </section>

        <div className={styles.arrow} aria-hidden="true" />

        <section className={styles.resultCard}>
          <span className={styles.cardLabel}>{slide3.resultLabel}</span>

          <div className={styles.resultList}>
            {slide3.resultItems.map((item) => (
              <div key={item} className={styles.resultItem}>
                <span className={styles.resultCheck} aria-hidden="true">
                  ✓
                </span>

                <span className={styles.resultItemText}>{item}</span>
              </div>
            ))}
          </div>

          <p className={styles.resultNote}>{slide3.resultNote}</p>
        </section>
      </div>

      <div className={styles.takeaway}>
        <span className={styles.takeawayLine} aria-hidden="true" />
        <p className={styles.takeawayText}>{slide3.takeaway}</p>
      </div>
    </div>
  );
}
