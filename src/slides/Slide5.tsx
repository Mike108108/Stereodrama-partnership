import type { CSSProperties } from 'react';

import layersIcon from '../assets/icons/slide5/layers.svg';
import panelsIcon from '../assets/icons/slide5/panels-top-left.svg';
import databaseIcon from '../assets/icons/slide5/database.svg';
import workflowIcon from '../assets/icons/slide5/workflow.svg';
import botIcon from '../assets/icons/slide5/bot.svg';

import { slide5, type Slide5StageIconId } from '../data/slides';
import styles from './Slide5.module.css';

const stageIcons: Record<Slide5StageIconId, string> = {
  layers: layersIcon,
  'panels-top-left': panelsIcon,
  database: databaseIcon,
  workflow: workflowIcon,
  bot: botIcon,
};

type StageIconStyle = CSSProperties & {
  '--stage-icon': string;
};

interface Slide5Props {
  isActive: boolean;
}

export function Slide5({ isActive: _isActive }: Slide5Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.topZone}>
        <h1 className={styles.title}>{slide5.title}</h1>

        <p className={styles.description}>{slide5.description}</p>
      </div>

      <ol className={styles.route} aria-label="Этапы перехода">
        <span className={styles.routeLine} aria-hidden="true" />

        {slide5.stages.map((stage) => (
          <li
            key={stage.index}
            className={
              stage.current ? `${styles.stage} ${styles.stageCurrent}` : styles.stage
            }
          >
            <span className={styles.stageIndex}>{stage.index}</span>

            <span className={styles.stageMarker}>
              <span
                className={styles.stageIcon}
                aria-hidden="true"
                style={
                  {
                    '--stage-icon': `url("${stageIcons[stage.icon]}")`,
                  } as StageIconStyle
                }
              />
            </span>

            <span className={styles.stageTitle}>{stage.title}</span>
          </li>
        ))}
      </ol>

      <div className={styles.takeaway}>
        <span className={styles.takeawayLine} aria-hidden="true" />

        <p className={styles.takeawayText}>{slide5.takeaway}</p>
      </div>
    </div>
  );
}
