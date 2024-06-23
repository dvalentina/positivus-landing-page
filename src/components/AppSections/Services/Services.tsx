import { serviceCards } from '../../../constants';
import ServiceCard from '../../ServiceCard/ServiceCard';
import Typography from '../../Typography/Typography';
import './Services.styles.scss';

function Services({ className = '' }: { className?: string }) {
  const variantsOrder: Array<'grey' | 'dark' | 'green'> = [
    'grey',
    'green',
    'dark',
  ];

  const serviceCardsComponents = serviceCards.map((item, index) => (
    <ServiceCard
      title={item.title}
      variant={variantsOrder[index % variantsOrder.length]}
      src={item.src}
    />
  ));

  return (
    <section id='#services' className={`services ${className}`}>
      <div className='services-title'>
        <Typography role='h2' type='h2' color='primary' highlight='accent'>
          Services
        </Typography>
        <Typography className='services-subtitle'>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </Typography>
      </div>
      <div className='services-cards-container'>{serviceCardsComponents}</div>
    </section>
  );
}

export default Services;
