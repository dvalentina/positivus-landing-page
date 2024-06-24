import { serviceCards } from '../../../constants';
import SectionHeading from '../../SectionHeading/SectionHeading';
import ServiceCard from '../../ServiceCard/ServiceCard';
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
      <SectionHeading>
        <SectionHeading.Title>Services</SectionHeading.Title>
        <SectionHeading.Subtitle width='580px'>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </SectionHeading.Subtitle>
      </SectionHeading>
      <div className='services-cards-container'>{serviceCardsComponents}</div>
    </section>
  );
}

export default Services;
