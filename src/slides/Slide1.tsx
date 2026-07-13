import { slide1 } from '../data/slides';
import styles from './Slide1.module.css';

interface Slide1Props {
  isActive: boolean;
}

export function Slide1({ isActive: _isActive }: Slide1Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.contentGrid}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Сейчас всё</span>
            <span className={styles.titleLine}>работает</span>
          </h1>

          <div className={styles.textBlock}>
            {slide1.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.text}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul className={styles.serviceList}>
          {slide1.services.map((service, index) => (
            <li
              key={service.name}
              className={
                index === slide1.services.length - 1
                  ? `${styles.serviceItem} ${styles.serviceItemAccent}`
                  : styles.serviceItem
              }
            >
              <span className={styles.serviceIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className={styles.serviceName}>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.takeaway}>
        <span className={styles.takeawayLine} aria-hidden="true" />

        <p className={styles.takeawayText}>{slide1.takeaway}</p>
      </div>
    </div>
  );
}
