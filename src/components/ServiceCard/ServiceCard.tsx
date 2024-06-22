import Typography from '../Typography/Typography';
import './ServiceCard.styles.scss';
import ArrowIcon from '../../../public/assets/arrow-icon.svg?react';

interface IServiceCard {
  variant?: 'primary' | 'secondary' | 'accent';
  title: string;
  src: string;
}

function ServiceCard({ variant = 'primary', title, src }: IServiceCard) {
  let highlight: 'accent' | 'white';
  let linkColor: 'primary' | 'secondary';

  switch (variant) {
    case 'primary':
      highlight = 'accent';
      linkColor = 'primary';
      break;
    case 'secondary':
      highlight = 'white';
      linkColor = 'secondary';
      break;
    case 'accent':
      highlight = 'white';
      linkColor = 'primary';
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
          <div
            className={`service-card__learn-more service-card__learn-more--${variant}`}
          >
            <ArrowIcon />
            <Typography className='service-card-link__text' color={linkColor}>
              Learn more
            </Typography>
          </div>
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
