import { Mail, RefreshCw, Table2 } from 'lucide-react';
import type { ServiceIconId } from '../../data/slides';
import styles from './ServiceIcon.module.css';

import tildaSvg from '/icons/tilda.svg?raw';
import bothelpSvg from '/icons/bothelp.svg?raw';

const localIcons: Record<'tilda' | 'bothelp', string> = {
  tilda: tildaSvg,
  bothelp: bothelpSvg,
};

interface ServiceIconProps {
  icon: ServiceIconId;
}

export function ServiceIcon({ icon }: ServiceIconProps) {
  if (icon === 'tilda' || icon === 'bothelp') {
    return (
      <span
        className={styles.icon}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: localIcons[icon] }}
      />
    );
  }

  const lucideProps = {
    className: styles.lucide,
    size: 20,
    strokeWidth: 1.75,
    'aria-hidden': true as const,
  };

  switch (icon) {
    case 'tables':
      return <Table2 {...lucideProps} />;
    case 'mail':
      return <Mail {...lucideProps} />;
    case 'manual':
      return <RefreshCw {...lucideProps} />;
  }
}
