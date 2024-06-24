import './Carousel.styles.scss';
import ArrowIcon from '../../../public/assets/arrow-icon.svg?react';
import StarIcon from '../../../public/assets/star-icon.svg?react';
import {
  createContext,
  useState,
  Children,
  useContext,
  useEffect,
} from 'react';
import CarouselItem from './CarouselItem';
import { gsap } from 'gsap';
// @ts-expect-error: No defs provided
import { horizontalLoop } from '../../utils/horizontalLoop';

interface ICarouselnContext {
  chosenIndex: number;
  loop: any;
}

const CarouselContext = createContext<ICarouselnContext>(
  {} as ICarouselnContext
);

export function useCarouselContext() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      'Carousel-related comonents must be wrapped in <Carousel>.'
    );
  }

  return context;
}

function Carousel({ children }: { children?: React.ReactNode }) {
  const [chosenIndex, setChosenIndex] = useState(0);
  const [loop, setLoop] = useState<any>();

  const length = Children.count(children);

  const contextValue = {
    chosenIndex,
    loop,
  };

  useEffect(() => {
    const items = gsap.utils.toArray('.carousel-item');
    const loop = horizontalLoop(items, {
      paused: true,
      center: true,
      draggable: true,
      paddingRight: 50,
      onChange: (_, index: number) => {
        setChosenIndex(index);
      },
    });
    setLoop(loop);
    loop.toIndex(2, { duration: 0.7, ease: 'power1.inOut' });
  }, []);

  const handleClickNext = () => {
    if (loop) {
      loop.next({ duration: 0.7, ease: 'power1.inOut' });
    }
  };

  const handleClickPrevious = () => {
    if (loop) {
      loop.previous({ duration: 0.7, ease: 'power1.inOut' });
    }
  };

  const handleClickStar = (index: number) => {
    if (loop) {
      loop.toIndex(index, { duration: 0.7, ease: 'power1.inOut' });
    }
  };

  const stars = Array.from({ length }).map((_, index) => (
    <button
      onClick={() => handleClickStar(index)}
      className='carousel-navigation__button carousel-navigation__button--small'
    >
      <StarIcon
        className={`carousel-navigation__star ${
          index === chosenIndex ? 'carousel-navigation__star--chosen' : ''
        }`}
      />
    </button>
  ));

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className='carousel'>
        <div className='carousel-items'>{children}</div>
        <div className='carousel-navigation'>
          <button
            onClick={handleClickPrevious}
            className='carousel-navigation__button carousel-navigation__button--big'
          >
            <ArrowIcon className='carousel-navigation__arrow carousel-navigation__arrow--left' />
          </button>
          <div className='carousel-navigation-stars'>{stars}</div>
          <button
            onClick={handleClickNext}
            className='carousel-navigation__button carousel-navigation__button--big'
          >
            <ArrowIcon className='carousel-navigation__arrow carousel-navigation__arrow--right' />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export default Carousel;

Carousel.Item = CarouselItem;
