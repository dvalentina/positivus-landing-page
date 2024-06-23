import Typography from '../Typography/Typography';
import './ServiceCard.styles.scss';
import Link from '../Link/Link';

interface IServiceCard {
  variant?: 'primary' | 'secondary' | 'accent';
  title: string;
  src: string;
}

function ServiceCard({ variant = 'primary', title, src }: IServiceCard) {
  let highlight: 'accent' | 'white';
  let linkVariant: 'black' | 'white-2';

  switch (variant) {
    case 'primary':
      highlight = 'accent';
      linkVariant = 'black';
      break;
    case 'secondary':
      highlight = 'white';
      linkVariant = 'white-2';
      break;
    case 'accent':
      highlight = 'white';
      linkVariant = 'black';
      break;
  }

  const titleWords = title.split(' ');
  const titleFirstRow = titleWords.slice(0, -1);
  const titleSecondRow = titleWords[titleWords.length - 1];

  return (
    <div className='service-card-wrapper'>
      <div className={`service-card service-card--${variant}`}>
        <div className='service-card-text'>
          <div>
            <Typography role='h3' type='h3' highlight={highlight}>
              {titleFirstRow.join(' ')}
            </Typography>
            <Typography role='h3' type='h3' highlight={highlight}>
              {titleSecondRow}
            </Typography>
          </div>
          <Link variant={linkVariant} label='Learn more' />
        </div>
        <img
          src={`/assets/${src}.png`}
          alt={title}
          className='service-card__image'
        />
      </div>
    </div>
  );
}

export default ServiceCard;
