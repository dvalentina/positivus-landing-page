import Typography from '../Typography/Typography';
import './TestimonialItem.styles.scss';

interface ITestimonialItem {
  name: string;
  jobTitle: string;
  quote: string;
}

function TestimonialItem({ name, jobTitle, quote }: ITestimonialItem) {
  return (
    <div className='testimonial-item'>
      <div className='testimonial-item__bubble'>
        <Typography color='secondary'>"{quote}"</Typography>
      </div>
      <div className='testimonial-item__name'>
        <Typography role='p' type='h4' color='accent'>
          {name}
        </Typography>
        <Typography color='secondary'>{jobTitle}</Typography>
      </div>
    </div>
  );
}

export default TestimonialItem;
