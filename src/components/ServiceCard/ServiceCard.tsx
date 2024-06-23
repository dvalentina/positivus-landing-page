import Typography from '../Typography/Typography';
import './ServiceCard.styles.scss';
import Link from '../Link/Link';
import Card from '../Card/Card';

interface IServiceCard {
  variant?: 'grey' | 'dark' | 'green';
  title: string;
  src: string;
}

function ServiceCard({ variant = 'grey', title, src }: IServiceCard) {
  let highlight: 'accent' | 'white';
  let linkVariant: 'black' | 'white-2';

  switch (variant) {
    case 'grey':
      highlight = 'accent';
      linkVariant = 'black';
      break;
    case 'dark':
      highlight = 'white';
      linkVariant = 'white-2';
      break;
    case 'green':
      highlight = 'white';
      linkVariant = 'black';
      break;
  }

  const titleWords = title.split(' ');
  const titleFirstRow = titleWords.slice(0, -1);
  const titleSecondRow = titleWords[titleWords.length - 1];

  return (
    <Card variant={variant} className='service-card'>
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
    </Card>
  );
}

export default ServiceCard;
