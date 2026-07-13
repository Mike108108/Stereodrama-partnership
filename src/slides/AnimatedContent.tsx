import type { CSSProperties, ReactNode } from 'react';
import shared from './slides.module.css';

interface AnimatedContentProps {
  isActive: boolean;
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  fadeOnly?: boolean;
}

export function AnimatedContent({
  isActive,
  children,
  delay = 0,
  className = '',
  style,
  fadeOnly = false,
}: AnimatedContentProps) {
  const inlineStyle = delay > 0 ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <div
      className={`${shared.animated} ${fadeOnly ? shared.fadeOnly : ''} ${isActive ? shared.animatedVisible : ''} ${className}`}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}

export { shared as slideStyles };
