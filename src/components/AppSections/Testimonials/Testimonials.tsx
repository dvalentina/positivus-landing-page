import './Testimonials.styles.scss';
import Carousel from '../../Carousel/Carousel';
import SectionHeading from '../../SectionHeading/SectionHeading';
import TestimonialItem from '../../TestimonialItem/TestimonialItem';
import { testimonials } from '../../../constants';

function Testimonials({ className = '' }: { className?: string }) {
  const testimonialsComponents = testimonials.map((item, index) => (
    <Carousel.Item index={index} key={`testimonial-${index}`}>
      <TestimonialItem
        name={item.name}
        jobTitle={item.jobTitle}
        quote={item.quote}
      />
    </Carousel.Item>
  ));

  return (
    <section id='testimonials' className={`testimonials ${className}`}>
      <SectionHeading>
        <SectionHeading.Title>Testimonials</SectionHeading.Title>
        <SectionHeading.Subtitle width='473px'>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </SectionHeading.Subtitle>
      </SectionHeading>
      <Carousel>{testimonialsComponents}</Carousel>
    </section>
  );
}

export default Testimonials;
