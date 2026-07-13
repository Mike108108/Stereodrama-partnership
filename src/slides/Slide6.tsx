import { slide6 } from '../data/slides';
import styles from './Slide6.module.css';

interface Slide6Props {
  isActive: boolean;
}

export function Slide6({ isActive: _isActive }: Slide6Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topZone}>
        <h1 className={styles.title}>{slide6.title}</h1>

        <p className={styles.description}>{slide6.description}</p>
      </div>

      <div className={styles.offerGrid}>
        {slide6.offers.map((offer) => (
          <section
            key={offer.index}
            className={
              offer.accent ? `${styles.offer} ${styles.offerAccent}` : styles.offer
            }
          >
            <div className={styles.offerHeader}>
              <span className={styles.offerIndex}>{offer.index}</span>

              <span className={styles.offerLabel}>{offer.label}</span>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.price}>{offer.price}</span>

              <span className={styles.period}>{offer.period}</span>
            </div>

            <h2 className={styles.offerTitle}>{offer.title}</h2>

            <ul className={styles.featureList}>
              {offer.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <span className={styles.featureLine} aria-hidden="true" />

                  <span className={styles.featureText}>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className={styles.takeaway}>
        <span className={styles.takeawayLine} aria-hidden="true" />

        <p className={styles.takeawayText}>{slide6.takeaway}</p>
      </div>
    </div>
  );
}
