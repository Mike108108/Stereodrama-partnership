import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  featured?: boolean;
  className?: string;
}

export function Card({ children, featured = false, className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''} ${className}`}>
      {children}
    </div>
  );
}
