import { useCarouselContext } from './Carousel';
import './Carousel.styles.scss';

function CarouselItem({
  children,
  index,
}: {
  children?: React.ReactNode;
  index: number;
}) {
  const { loop } = useCarouselContext();

  const handleClick = () => {
    if (loop) {
      loop.toIndex(index, { duration: 0.7, ease: 'power1.inOut' });
    }
  };

  return (
    <div className='carousel-item' onClick={handleClick}>
      {children}
    </div>
  );
}

export default CarouselItem;
