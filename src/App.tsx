import { SlideLayout } from './components/SlideLayout';
import { TOTAL_SLIDES } from './data/slides';
import { usePresentation } from './hooks/usePresentation';
import { Slide1 } from './slides/Slide1';
import { Slide2 } from './slides/Slide2';
import { Slide3 } from './slides/Slide3';
import { Slide4 } from './slides/Slide4';
import { Slide5 } from './slides/Slide5';
import { Slide6 } from './slides/Slide6';
import styles from './App.module.css';

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function App() {
  const {
    currentIndex,
    currentSlide,
    totalSlides,
    goTo,
    goNext,
    goPrev,
    handleTouchStart,
    handleTouchEnd,
    canGoNext,
    canGoPrev,
  } = usePresentation();

  return (
    <div
      className={styles.presentation}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slideComponents.map((SlideComponent, index) => (
        <SlideLayout
          key={index}
          slideNumber={index + 1}
          totalSlides={TOTAL_SLIDES}
          currentIndex={currentIndex}
          isActive={index === currentIndex}
          onGoTo={goTo}
          onNext={goNext}
          onPrev={goPrev}
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
          decorVariant={
            index === 0
              ? 'gradient'
              : index === 1 || index === 3 || index === 4 || index === 5
                ? 'matte'
                : 'default'
          }
        >
          <SlideComponent isActive={index === currentIndex} />
        </SlideLayout>
      ))}

      <div className={styles.srOnly} aria-live="polite">
        Слайд {currentSlide} из {totalSlides}
      </div>
    </div>
  );
}
