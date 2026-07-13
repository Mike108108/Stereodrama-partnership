import { slide2 } from '../data/slides';
import styles from './Slide2.module.css';

interface Slide2Props {
  isActive: boolean;
}

export function Slide2({ isActive: _isActive }: Slide2Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topZone}>
        <h1 className={styles.title}>
          {slide2.titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>

        <p className={styles.subtitle}>{slide2.mainText}</p>
      </div>

      <div className={styles.caseBlock}>
        <div className={styles.exampleColumn}>
          <span className={styles.exampleLabel}>{slide2.exampleLabel}</span>

          <p className={styles.exampleText}>{slide2.exampleText}</p>
        </div>

        <div className={styles.placesColumn}>
          {slide2.places.map((place) => (
            <div
              key={place.title}
              className={
                place.emphasized
                  ? `${styles.placeRow} ${styles.placeRowActive}`
                  : styles.placeRow
              }
            >
              <span className={styles.placeTitle}>{place.title}</span>

              <span
                className={
                  place.emphasized
                    ? `${styles.placeStatus} ${styles.placeStatusActive}`
                    : `${styles.placeStatus} ${styles.placeStatusMuted}`
                }
              >
                {place.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.takeaway}>
        <span className={styles.takeawayLine} aria-hidden="true" />
        <p className={styles.takeawayText}>{slide2.takeaway}</p>
      </div>
    </div>
  );
}
